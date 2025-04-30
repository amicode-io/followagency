import { defineEventHandler, readBody } from 'file:///Users/mikolagnatuk/Downloads/follow-www-main/node_modules/h3/dist/index.mjs';

const auth_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const correctPassword = "extra";
  if (body.password === correctPassword) {
    return { success: true };
  } else {
    return { success: false, message: "Incorrect password!" };
  }
});

export { auth_post as default };
//# sourceMappingURL=auth.post.mjs.map
