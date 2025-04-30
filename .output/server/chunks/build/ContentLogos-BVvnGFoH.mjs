import { defineComponent, useId, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContentLogos",
  __ssrInlineRender: true,
  props: {
    id: { default: "" },
    logos: { default: () => [] }
  },
  setup(__props) {
    const uid = useId();
    const baseSpeed = ref(3);
    ref(baseSpeed.value);
    ref(4e-3);
    ref(150);
    const items = ref([]);
    ref(0);
    const containerHeight = ref(0);
    const wavePath = ref("");
    const waveWidth = ref(1024);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: _ctx.id || unref(uid),
        class: "m-logos"
      }, _attrs))} data-v-dcef2954><div class="wave-container" style="${ssrRenderStyle({ height: containerHeight.value + "px" })}" data-v-dcef2954><svg class="wave-svg"${ssrRenderAttr("width", waveWidth.value)}${ssrRenderAttr("height", containerHeight.value)} data-v-dcef2954><path${ssrRenderAttr("d", wavePath.value)} stroke="black" fill="none" stroke-width="2" data-v-dcef2954></path></svg><!--[-->`);
      ssrRenderList(items.value, (item, index) => {
        _push(`<img${ssrRenderAttr("src", item.src)} class="wave-item" style="${ssrRenderStyle(item.style)}" alt="Logo" data-v-dcef2954>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/ContentLogos.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContentLogos = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dcef2954"]]);

export { ContentLogos as default };
//# sourceMappingURL=ContentLogos-BVvnGFoH.mjs.map
