import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import cuid from 'cuid';
import redis from 'src/server/redis';
import RateLimitCache from 'src/server/rate-limit-cache';
import requestIp from 'request-ip';

const createPasteRateLimiter = new RateLimitCache();

const reqBodySchema = z.object({
  content: z.string().min(1),
});

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
  const pasteID = cuid();

  await redis.connect();
  await redis.SETEX(pasteID, 3600, content);
  await redis.QUIT();

  const pasteURL = `${baseURL}/paste/${pasteID}`;
  const pasteURLEncoded = encodeURIComponent(pasteURL);

  res.writeHead(303, { Location: `/create/result/${pasteURLEncoded}` }).end();
  return;
}

export default Handler;
