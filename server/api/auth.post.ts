// import { useCookies } from 'h3';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // Server-side password (never exposed to client)
  const correctPassword = 'extra';

  if (body.password === correctPassword) {
    return { success: true };
  } else {
    return { success: false, message: 'Incorrect password!' };
  }
});