import fs from 'fs/promises';
import path from 'path';
import { prune, validate, toModuleSource } from '../../../src/lib/admin-data.mjs';

const LOCAL_HOSTS = ['localhost', '127.0.0.1', '[::1]'];

function forbidden(request) {
  // Only `npm run dev` on your own machine: Netlify's filesystem is read-only and nobody else should write here.
  if (process.env.NODE_ENV !== 'development') return new Response('Not found', { status: 404 });
  const host = (request.headers.get('host') || '').replace(/:\d+$/, '');
  if (!LOCAL_HOSTS.includes(host)) return new Response('Forbidden', { status: 403 });
  // A custom header can't be sent cross-site without a CORS preflight, which this route never approves.
  if (request.headers.get('x-portfolio-admin') !== '1') return new Response('Forbidden', { status: 403 });
  if (request.headers.get('sec-fetch-site') && request.headers.get('sec-fetch-site') !== 'same-origin') {
    return new Response('Forbidden', { status: 403 });
  }
  return null;
}

export async function PUT(request) {
  const blocked = forbidden(request);
  if (blocked) return blocked;

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ errors: ['Body is not valid JSON'] }, { status: 400 });
  }

  const { key } = body || {};
  const data = prune(body?.data);
  const errors = validate(key, data);
  if (errors.length) return Response.json({ errors }, { status: 400 });

  const file = path.join(process.cwd(), 'src', 'data', `${key}.js`);
  const tmp = `${file}.tmp`;
  // Write then rename, so a crash mid-write never leaves a half-written data file.
  await fs.writeFile(tmp, toModuleSource(key, data), 'utf8');
  await fs.rename(tmp, file);

  return Response.json({ ok: true, data });
}
