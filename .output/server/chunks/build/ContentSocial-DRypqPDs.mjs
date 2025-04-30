import { HumbleScroll } from 'humblescroll-vue';
import { defineComponent, ref, useId, mergeProps, unref, withCtx, toHandlers, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { S as Splide, a as SplideSlide } from '../_/vue-splide.esm.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Phone",
  __ssrInlineRender: true,
  props: {
    item: {},
    index: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-93aa84c3><div class="m-flipster__item" style="${ssrRenderStyle(`--n: ${_ctx.index}`)}" data-v-93aa84c3>`);
      if (_ctx.item.type === "image") {
        _push(`<img${ssrRenderAttr("src", _ctx.item.value)} alt="" loading="lazy" data-v-93aa84c3>`);
      } else if (_ctx.item.type === "video") {
        _push(`<video data-video="lazy" width="579" height="1167" autoplay muted loop playsinline preload="metadata" data-v-93aa84c3><source${ssrRenderAttr("src", _ctx.item.value)} type="video/mp4" data-v-93aa84c3></video>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/atoms/Phone.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-93aa84c3"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContentSocial",
  __ssrInlineRender: true,
  props: {
    id: { default: "" },
    title: {},
    items: {}
  },
  setup(__props) {
    const isDragging = ref(false);
    const startMove = (text = "", e) => {
      isDragging.value = true;
    };
    const finishMove = (text = "", e) => {
      isDragging.value = false;
    };
    const splideEvents = ref({
      "splide:drag": (e) => startMove("drag"),
      "splide:dragged": (e) => finishMove("dragged"),
      "splide:move": (e) => startMove("move"),
      "splide:moved": (e) => finishMove("moved"),
      "splide:scroll": (e) => startMove("scroll"),
      "splide:scrolled": (e) => finishMove("scrolled")
    });
    const splideOptions = ref({
      type: "loop",
      drag: "free",
      focus: "center",
      updateOnMove: true,
      snap: true,
      autoWidth: true,
      autoplay: true,
      gap: "2rem",
      pagination: false
    });
    const uid = useId();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HumbleScroll = HumbleScroll;
      const _component_AtomsPhone = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: _ctx.id ? _ctx.id : unref(uid),
        class: ["m-socialmedia", { "is-dragging": unref(isDragging) }],
        "aria-label": "Social media"
      }, _attrs))} data-v-8878cd78>`);
      _push(ssrRenderComponent(_component_HumbleScroll, {
        animation: "fade up blur slow",
        once: true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Splide), mergeProps({
              options: unref(splideOptions),
              "aria-label": _ctx.title
            }, toHandlers(unref(splideEvents))), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(_ctx.items, (item, index) => {
                    _push3(ssrRenderComponent(unref(SplideSlide), { key: _ctx.id }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_AtomsPhone, {
                            item,
                            index
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_AtomsPhone, {
                              item,
                              index
                            }, null, 8, ["item", "index"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                      return openBlock(), createBlock(unref(SplideSlide), { key: _ctx.id }, {
                        default: withCtx(() => [
                          createVNode(_component_AtomsPhone, {
                            item,
                            index
                          }, null, 8, ["item", "index"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Splide), mergeProps({
                options: unref(splideOptions),
                "aria-label": _ctx.title
              }, toHandlers(unref(splideEvents))), {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                    return openBlock(), createBlock(unref(SplideSlide), { key: _ctx.id }, {
                      default: withCtx(() => [
                        createVNode(_component_AtomsPhone, {
                          item,
                          index
                        }, null, 8, ["item", "index"])
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              }, 16, ["options", "aria-label"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/ContentSocial.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContentSocial = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8878cd78"]]);

export { ContentSocial as default };
//# sourceMappingURL=ContentSocial-DRypqPDs.mjs.map
