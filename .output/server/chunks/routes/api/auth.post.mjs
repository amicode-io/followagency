import { d as defineEventHandler, r as readBody } from '../../nitro/nitro.mjs';
import 'unified';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'micromark-util-sanitize-uri';
import 'hast-util-to-string';
import 'github-slugger';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

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
