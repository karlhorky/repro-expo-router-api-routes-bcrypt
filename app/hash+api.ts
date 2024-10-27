import { hashSync } from 'bcryptjs';

export function GET(request: Request) {
  const hash = hashSync('hello', 10);
  return Response.json({ hash: hash });
}
