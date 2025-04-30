import { HumbleScroll } from 'file:///Users/mikolagnatuk/Downloads/follow-www-main/node_modules/humblescroll-vue/dist/humble-scroll.js';
import { mergeProps, withCtx, createVNode, ref, useTemplateRef, computed, unref, defineComponent, provide, createElementBlock, useSSRContext } from 'file:///Users/mikolagnatuk/Downloads/follow-www-main/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'file:///Users/mikolagnatuk/Downloads/follow-www-main/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_0 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main$1 = {
  __name: "MenuItem",
  __ssrInlineRender: true,
  props: ["target", "label"],
  setup(__props) {
    const props = __props;
    ref(false);
    useTemplateRef("lottieContainer");
    const targetComputed = computed(() => {
      let url;
      try {
        url = new URL(props.target);
        if (url.protocol === "http:" || url.protocol === "https:") {
          return props.target;
        }
      } catch (_) {
      }
      return `#${props.target}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0;
      _push(`<a${ssrRenderAttrs(mergeProps({
        class: "m-nav-item",
        href: unref(targetComputed)
      }, _attrs))} data-v-b87d83fa><span class="m-nav-item__label" data-v-b87d83fa>${ssrInterpolate(__props.label)}</span>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</a>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/atoms/MenuItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const MenuItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b87d83fa"]]);
const _sfc_main = {
  __name: "ContentMenu",
  __ssrInlineRender: true,
  props: {
    menu: {
      type: Array
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HumbleScroll = HumbleScroll;
      if (__props.menu.length) {
        _push(`<nav${ssrRenderAttrs(mergeProps({
          class: "m-nav",
          "aria-label": "Menu"
        }, _attrs))} data-v-c9ce8a93><!--[-->`);
        ssrRenderList(__props.menu, ({ label, target }, index) => {
          _push(ssrRenderComponent(_component_HumbleScroll, {
            key: target,
            animation: "zoom-in fade up fast",
            variables: { delay: `${(index + 1) * 100}ms` }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(MenuItem, {
                  label,
                  target
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(MenuItem, {
                    label,
                    target
                  }, null, 8, ["label", "target"])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]-->`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/ContentMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContentMenu = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c9ce8a93"]]);

export { ContentMenu as default };
//# sourceMappingURL=ContentMenu-DMV-TFAm.mjs.map
