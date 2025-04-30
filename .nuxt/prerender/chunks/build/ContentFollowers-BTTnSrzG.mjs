import { HumbleScroll } from 'file:///Users/mikolagnatuk/Downloads/follow-www-main/node_modules/humblescroll-vue/dist/humble-scroll.js';
import { defineComponent, useId, ref, mergeProps, unref, withCtx, createBlock, openBlock, createVNode, toDisplayString, Fragment, renderList, useSSRContext } from 'file:///Users/mikolagnatuk/Downloads/follow-www-main/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'file:///Users/mikolagnatuk/Downloads/follow-www-main/node_modules/vue/server-renderer/index.mjs';
import { S as Splide, a as SplideSlide } from '../_/vue-splide.esm.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContentFollowers",
  __ssrInlineRender: true,
  props: {
    id: { default: "" },
    title: { default: "" },
    followers: { default: () => [] }
  },
  setup(__props) {
    const uid = useId();
    const splideOptions = ref({
      type: "loop",
      drag: "free",
      focus: "center",
      snap: true,
      autoWidth: true,
      autoplay: true,
      gap: "2rem"
    });
    const isDragging = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HumbleScroll = HumbleScroll;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: _ctx.id ? _ctx.id : unref(uid),
        class: "m-followers",
        "aria-label": "List of our followers"
      }, _attrs))} data-v-0a33098f><div class="${ssrRenderClass([{ "is-drag": unref(isDragging) }, "m-followers__title"])}" data-v-0a33098f>`);
      _push(ssrRenderComponent(_component_HumbleScroll, {
        animation: "zoom-in",
        once: true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg viewBox="0 0 366 486" data-v-0a33098f${_scopeId}><path id="curve" fill="transparent" d="M36.35 97.5C69.71 38.31 122.95 0 182.93 0c101.03 0 182.93 108.7 182.93 242.79s-81.9 242.79-182.93 242.79S0 376.88 0 242.79C0 188.31 13.52 138.01 36.35 97.5" data-v-0a33098f${_scopeId}></path><text width="366" data-v-0a33098f${_scopeId}><textPath xlink:href="#curve" startOffset="-8" data-v-0a33098f${_scopeId}>${ssrInterpolate(_ctx.title)}</textPath></text></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", { viewBox: "0 0 366 486" }, [
                createVNode("path", {
                  id: "curve",
                  fill: "transparent",
                  d: "M36.35 97.5C69.71 38.31 122.95 0 182.93 0c101.03 0 182.93 108.7 182.93 242.79s-81.9 242.79-182.93 242.79S0 376.88 0 242.79C0 188.31 13.52 138.01 36.35 97.5"
                }),
                createVNode("text", { width: "366" }, [
                  createVNode("textPath", {
                    "xlink:href": "#curve",
                    startOffset: "-8"
                  }, toDisplayString(_ctx.title), 1)
                ])
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_HumbleScroll, {
        animation: "fade up",
        once: true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Splide), {
              options: unref(splideOptions),
              "aria-label": _ctx.title,
              "onSplide:scroll": ($event) => isDragging.value = true,
              "onSplide:scrolled": ($event) => isDragging.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(_ctx.followers, ({ image_url, title }) => {
                    _push3(ssrRenderComponent(unref(SplideSlide), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="m-followers__item" data-v-0a33098f${_scopeId3}><img class="u-img"${ssrRenderAttr("src", image_url)}${ssrRenderAttr("alt", title)} data-v-0a33098f${_scopeId3}></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "m-followers__item" }, [
                              createVNode("img", {
                                class: "u-img",
                                src: image_url,
                                alt: title
                              }, null, 8, ["src", "alt"])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.followers, ({ image_url, title }) => {
                      return openBlock(), createBlock(unref(SplideSlide), null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "m-followers__item" }, [
                            createVNode("img", {
                              class: "u-img",
                              src: image_url,
                              alt: title
                            }, null, 8, ["src", "alt"])
                          ])
                        ]),
                        _: 2
                      }, 1024);
                    }), 256))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Splide), {
                options: unref(splideOptions),
                "aria-label": _ctx.title,
                "onSplide:scroll": ($event) => isDragging.value = true,
                "onSplide:scrolled": ($event) => isDragging.value = false
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.followers, ({ image_url, title }) => {
                    return openBlock(), createBlock(unref(SplideSlide), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "m-followers__item" }, [
                          createVNode("img", {
                            class: "u-img",
                            src: image_url,
                            alt: title
                          }, null, 8, ["src", "alt"])
                        ])
                      ]),
                      _: 2
                    }, 1024);
                  }), 256))
                ]),
                _: 1
              }, 8, ["options", "aria-label", "onSplide:scroll", "onSplide:scrolled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/ContentFollowers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContentFollowers = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0a33098f"]]);

export { ContentFollowers as default };
//# sourceMappingURL=ContentFollowers-BTTnSrzG.mjs.map
