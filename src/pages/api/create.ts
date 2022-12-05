import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import RateLimitCache from 'src/server/rate-limit-cache';
import requestIp from 'request-ip';
import { PrismaClient } from '@prisma/client';

const createPasteRateLimiter = new RateLimitCache();

const reqBodySchema = z.object({
  content: z.string().min(1),
});

const prisma = new PrismaClient();

async function Handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }

  const ip = requestIp.getClientIp(req);

  const requestAllowed = createPasteRateLimiter.requestAllowed(ip || '');
  if (!requestAllowed) {
    res.status(429).send('Too Many Requests. Try Again Later')
    return;
  }

  const baseURL = req.headers.origin || `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

  const { content } = reqBodySchema.parse(req.body);

  const paste = await prisma.paste.create({
    data: {
      data: content,
    }
  })

  const pasteURL = `${baseURL}/paste/${paste.id}`;
  const pasteURLEncoded = encodeURIComponent(pasteURL);

  res.writeHead(303, { Location: `/create/result/${pasteURLEncoded}` }).end();
  return;
}

export default Handler;
