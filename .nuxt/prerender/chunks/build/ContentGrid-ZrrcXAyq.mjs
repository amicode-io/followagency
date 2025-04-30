import { defineComponent, useId, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, computed, resolveDynamicComponent, createBlock, openBlock, useTemplateRef, useSSRContext } from 'file:///Users/mikolagnatuk/Downloads/follow-www-main/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderVNode, ssrRenderSlot } from 'file:///Users/mikolagnatuk/Downloads/follow-www-main/node_modules/vue/server-renderer/index.mjs';
import { HumbleScroll } from 'file:///Users/mikolagnatuk/Downloads/follow-www-main/node_modules/humblescroll-vue/dist/humble-scroll.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "GridImage",
  __ssrInlineRender: true,
  props: {
    value: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<img${ssrRenderAttrs(mergeProps({
        src: _ctx.value,
        alt: "",
        loading: "lazy"
      }, _attrs))}>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/atoms/GridImage.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Fitty",
  __ssrInlineRender: true,
  props: {
    minSize: { default: 16 },
    maxSize: { default: 640 }
  },
  setup(__props) {
    const fittyEl = useTemplateRef("fittyEl");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "fittyEl",
        ref: fittyEl,
        class: "fitty"
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/atoms/Fitty.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "GridText",
  __ssrInlineRender: true,
  props: {
    value: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AtomsFitty = _sfc_main$4;
      _push(ssrRenderComponent(_component_AtomsFitty, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.value)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.value), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/atoms/GridText.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "GridVideo",
  __ssrInlineRender: true,
  props: {
    value: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<video${ssrRenderAttrs(mergeProps({
        autoplay: "",
        muted: "",
        loop: "",
        playsinline: "",
        preload: "metadata"
      }, _attrs))}><source${ssrRenderAttr("src", _ctx.value)} type="video/mp4"></video>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/atoms/GridVideo.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var GridItemType = /* @__PURE__ */ ((GridItemType2) => {
  GridItemType2["GridImage"] = "GridImage";
  GridItemType2["GridText"] = "GridText";
  GridItemType2["GridVideo"] = "GridVideo";
  return GridItemType2;
})(GridItemType || {});
var GridType = /* @__PURE__ */ ((GridType2) => {
  GridType2["TikTok"] = "TikTok";
  GridType2["Reels"] = "Reels";
  return GridType2;
})(GridType || {});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "GridItem",
  __ssrInlineRender: true,
  props: {
    index: {},
    is: {},
    type: { default: "" },
    url: { default: "" },
    value: {},
    gridType: {}
  },
  setup(__props) {
    const isLink = computed(() => (__props.type === GridItemType.GridImage || __props.type === GridItemType.GridText) && __props.url !== "");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HumbleScroll = HumbleScroll;
      _push(ssrRenderComponent(_component_HumbleScroll, mergeProps({
        animation: "fade up",
        once: true,
        variables: { delay: `${_ctx.index * 100}ms` },
        class: `
      m-grid-item--${_ctx.index}
      m-grid-item--${_ctx.type}
    `,
        innerClass: "m-grid-item m-grid-item__inner"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(isLink)) {
              _push2(`<a${ssrRenderAttr("href", _ctx.url)}${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(_ctx.is), { value: _ctx.value }, null), _parent2, _scopeId);
              _push2(`</a>`);
            } else {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(_ctx.is), { value: _ctx.value }, null), _parent2, _scopeId);
            }
          } else {
            return [
              unref(isLink) ? (openBlock(), createBlock("a", {
                key: 0,
                href: _ctx.url
              }, [
                (openBlock(), createBlock(resolveDynamicComponent(_ctx.is), { value: _ctx.value }, null, 8, ["value"]))
              ], 8, ["href"])) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.is), {
                key: 1,
                value: _ctx.value
              }, null, 8, ["value"]))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/atoms/GridItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContentGrid",
  __ssrInlineRender: true,
  props: {
    id: { default: "" },
    title: {},
    type: { default: () => GridType.TikTok },
    items: {}
  },
  setup(__props) {
    const components = {
      GridImage: _sfc_main$5,
      GridText: _sfc_main$3,
      GridVideo: _sfc_main$2
    };
    const uid = useId();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AtomsGridItem = _sfc_main$1;
      const _component_HumbleScroll = HumbleScroll;
      const _component_AtomsFitty = _sfc_main$4;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: _ctx.id || unref(uid),
        class: `m-grid m-grid--${_ctx.type}`,
        "aria-label": _ctx.title
      }, _attrs))} data-v-dd10e9af><div class="m-grid-items container" data-v-dd10e9af><!--[-->`);
      ssrRenderList(_ctx.items, (item, index) => {
        _push(ssrRenderComponent(_component_AtomsGridItem, {
          index: index + 1,
          is: components[item.type],
          type: item.type,
          url: item == null ? void 0 : item.url,
          value: item.value
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="m-grid-bg" aria-hidden="true" data-v-dd10e9af>`);
      _push(ssrRenderComponent(_component_HumbleScroll, {
        key: `anim1-${_ctx.id || unref(uid)}`,
        once: true,
        animation: "reveal-left blur fast",
        class: "w-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AtomsFitty, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_AtomsFitty, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.title), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_HumbleScroll, {
        key: `anim2-${_ctx.id || unref(uid)}`,
        animation: "reveal-right blur fast",
        once: true,
        variables: { delay: `300ms` },
        class: "w-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AtomsFitty, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_AtomsFitty, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.title), 1)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/ContentGrid.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContentGrid = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dd10e9af"]]);

export { ContentGrid as default };
//# sourceMappingURL=ContentGrid-ZrrcXAyq.mjs.map
