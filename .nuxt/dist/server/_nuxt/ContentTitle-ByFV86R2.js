import { HumbleScroll } from "humblescroll-vue";
import { mergeProps, withCtx, createVNode, renderSlot, toDisplayString, createBlock, openBlock, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "ContentTitle",
  __ssrInlineRender: true,
  props: {
    is: {
      type: String,
      default: "div"
    },
    title: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "normal"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HumbleScroll = HumbleScroll;
      _push(ssrRenderComponent(_component_HumbleScroll, mergeProps({
        class: ["c-title", `c-title--${__props.size}`],
        element: __props.is,
        animation: "fade up",
        once: true,
        innerClass: "c-title__inner",
        innerElement: "span"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="c-title__text" data-v-63d5deed${_scopeId}>${ssrInterpolate(__props.title)}</span><span class="c-title__deco" data-v-63d5deed${_scopeId}><svg class="u-svg is-start" width="24" height="24" role="presentation" focusable="false" data-v-63d5deed${_scopeId}><use xlink:href="#svg-diamond" data-v-63d5deed${_scopeId}></use></svg><svg class="u-svg is-end" width="24" height="24" role="presentation" focusable="false" data-v-63d5deed${_scopeId}><use xlink:href="#svg-diamond" data-v-63d5deed${_scopeId}></use></svg></span>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              createVNode("span", { class: "c-title__text" }, toDisplayString(__props.title), 1),
              createVNode("span", { class: "c-title__deco" }, [
                (openBlock(), createBlock("svg", {
                  class: "u-svg is-start",
                  width: "24",
                  height: "24",
                  role: "presentation",
                  focusable: "false"
                }, [
                  createVNode("use", { "xlink:href": "#svg-diamond" })
                ])),
                (openBlock(), createBlock("svg", {
                  class: "u-svg is-end",
                  width: "24",
                  height: "24",
                  role: "presentation",
                  focusable: "false"
                }, [
                  createVNode("use", { "xlink:href": "#svg-diamond" })
                ]))
              ]),
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/ContentTitle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContentTitle = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-63d5deed"]]);
export {
  ContentTitle as default
};
//# sourceMappingURL=ContentTitle-ByFV86R2.js.map
