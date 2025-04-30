import { defineComponent, ref, unref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { u as useAuth } from "./auth-CGpOd4hY.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "pinia";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PortfolioProtection",
  __ssrInlineRender: true,
  setup(__props) {
    const auth = useAuth();
    const password = ref("");
    const isSubmitted = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      if (!unref(auth).isAuth) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "protection" }, _attrs))} data-v-64821a3f><div class="protection__inner container" data-v-64821a3f><div class="element element--inner" data-v-64821a3f><div class="element__inner" data-v-64821a3f><form class="protection__form" data-v-64821a3f><label for="portfolio-password" data-v-64821a3f>Wpisz hasło</label><input id="portfolio-password" type="password"${ssrRenderAttr("value", unref(password))} placeholder="Wpisz hasło" data-v-64821a3f><button type="submit" data-v-64821a3f>Wyślij</button></form></div></div>`);
        if (!unref(auth).isAuth && unref(isSubmitted)) {
          _push(`<div class="element element--error" data-v-64821a3f><div class="element__inner" data-v-64821a3f>Brak dostępu!</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/PortfolioProtection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PortfolioProtection = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-64821a3f"]]);
export {
  PortfolioProtection as default
};
//# sourceMappingURL=PortfolioProtection-3mgVHocS.js.map
