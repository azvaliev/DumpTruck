import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import cuid from 'cuid';
import redis from 'src/server/redis';

const reqBodySchema = z.object({
  content: z.string().min(1),
});

async function Handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }

  if (!req.headers.origin) {
    res.status(400).end('Missing Origin Header');
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
