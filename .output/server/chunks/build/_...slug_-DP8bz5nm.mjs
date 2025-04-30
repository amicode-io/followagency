import _sfc_main$1 from './ContentDoc-DF8JAsot.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../nitro/nitro.mjs';
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
import './ContentRenderer-7kN3XCNk.mjs';
import './ContentRendererMarkdown-Bj-Zbz9S.mjs';
import 'property-information';
import './node-hwMnPqaI.mjs';
import './preview-B7RKd8p3.mjs';
import './server.mjs';
import 'pinia';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import './ContentQuery-D-LcUgK8.mjs';
import './query-DS-Xa9BF.mjs';
import './index-C2merokO.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ContentDoc = _sfc_main$1;
  _push(ssrRenderComponent(_component_ContentDoc, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ____slug_ as default };
//# sourceMappingURL=_...slug_-DP8bz5nm.mjs.map
