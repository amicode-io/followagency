import { HumbleScroll } from 'humblescroll-vue';
import { defineComponent, useId, unref, mergeProps, withCtx, createBlock, openBlock, createVNode, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as _imports_0 } from './virtual_public-2FTOlSxK.mjs';
import { u as useAuth } from './auth-CGpOd4hY.mjs';
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
import 'pinia';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PortfolioItem",
  __ssrInlineRender: true,
  props: {
    image: { default: "" },
    logo: { default: "" }
  },
  setup(__props) {
    const random = computed(() => {
      return Math.random() * (12 - -12) + -12;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HumbleScroll = HumbleScroll;
      _push(ssrRenderComponent(_component_HumbleScroll, mergeProps({
        animation: "fade up",
        class: "item",
        once: true
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="portfolio-item element" data-v-cd720ef2${_scopeId}><div class="portfolio-item__inner element__inner" data-v-cd720ef2${_scopeId}><img${ssrRenderAttr("src", _ctx.image)} alt="" data-v-cd720ef2${_scopeId}></div><div class="portfolio-logo element" style="${ssrRenderStyle(`--random: ${unref(random).toFixed(0)}deg`)}" data-v-cd720ef2${_scopeId}><div class="element__inner" data-v-cd720ef2${_scopeId}><img${ssrRenderAttr("src", _ctx.logo)} alt="" data-v-cd720ef2${_scopeId}></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "portfolio-item element" }, [
                createVNode("div", { class: "portfolio-item__inner element__inner" }, [
                  createVNode("img", {
                    src: _ctx.image,
                    alt: ""
                  }, null, 8, ["src"])
                ]),
                createVNode("div", {
                  class: "portfolio-logo element",
                  style: `--random: ${unref(random).toFixed(0)}deg`
                }, [
                  createVNode("div", { class: "element__inner" }, [
                    createVNode("img", {
                      src: _ctx.logo,
                      alt: ""
                    }, null, 8, ["src"])
                  ])
                ], 4)
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/atoms/PortfolioItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-cd720ef2"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PortfolioContent",
  __ssrInlineRender: true,
  props: {
    id: { default: "" },
    items: { default: () => [] }
  },
  setup(__props) {
    const auth = useAuth();
    const uid = useId();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HumbleScroll = HumbleScroll;
      const _component_AtomsPortfolioItem = __nuxt_component_1;
      if (unref(auth).isAuth) {
        _push(`<section${ssrRenderAttrs(mergeProps({
          id: _ctx.id || unref(uid),
          class: "c-portfolio container"
        }, _attrs))} data-v-6d003dd3><div class="c-portfolio__deco c-portfolio__deco--1" data-v-6d003dd3>`);
        _push(ssrRenderComponent(_component_HumbleScroll, { animation: "blur" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg class="cloud c-portfolio__cloud" width="713" height="599" role="presentation" focusable="false" data-v-6d003dd3${_scopeId}><use xlink:href="#svg-cloud" data-v-6d003dd3${_scopeId}></use></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  class: "cloud c-portfolio__cloud",
                  width: "713",
                  height: "599",
                  role: "presentation",
                  focusable: "false"
                }, [
                  createVNode("use", { "xlink:href": "#svg-cloud" })
                ]))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_HumbleScroll, { animation: "fade up" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="c-portfolio__text element" data-v-6d003dd3${_scopeId}><div class="element__inner" data-v-6d003dd3${_scopeId}><p data-v-6d003dd3${_scopeId}>witaj w\xA0krainie pi\u0119knych kreacji</p></div></div>`);
            } else {
              return [
                createVNode("div", { class: "c-portfolio__text element" }, [
                  createVNode("div", { class: "element__inner" }, [
                    createVNode("p", null, "witaj w\xA0krainie pi\u0119knych kreacji")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="c-portfolio__relative" data-v-6d003dd3><div class="c-portfolio__wrap" data-v-6d003dd3><!--[-->`);
        ssrRenderList(_ctx.items, ({ image, logo }) => {
          _push(ssrRenderComponent(_component_AtomsPortfolioItem, {
            image,
            logo
          }, null, _parent));
        });
        _push(`<!--]--></div><div class="c-portfolio__deco c-portfolio__deco--2" data-v-6d003dd3>`);
        _push(ssrRenderComponent(_component_HumbleScroll, { animation: "blur" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg class="cloud c-portfolio__cloud" width="713" height="599" role="presentation" focusable="false" data-v-6d003dd3${_scopeId}><use xlink:href="#svg-cloud" data-v-6d003dd3${_scopeId}></use></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  class: "cloud c-portfolio__cloud",
                  width: "713",
                  height: "599",
                  role: "presentation",
                  focusable: "false"
                }, [
                  createVNode("use", { "xlink:href": "#svg-cloud" })
                ]))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_HumbleScroll, { animation: "fade up" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="c-portfolio__text element" data-v-6d003dd3${_scopeId}><div class="element__inner" data-v-6d003dd3${_scopeId}><p data-v-6d003dd3${_scopeId}>mamy nadziej\u0119, \u017Ce by\u0142o fajniutko</p></div></div>`);
            } else {
              return [
                createVNode("div", { class: "c-portfolio__text element" }, [
                  createVNode("div", { class: "element__inner" }, [
                    createVNode("p", null, "mamy nadziej\u0119, \u017Ce by\u0142o fajniutko")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="c-portfolio__contact" data-v-6d003dd3><p data-v-6d003dd3>chcesz tutaj do\u0142\u0105czy\u0107?</p><a href="mailto:kontakt@followagency.pl" data-v-6d003dd3> KONTAKT <img class="c-portfolio__arrow"${ssrRenderAttr("src", _imports_0)} width="434" height="417" alt="" data-v-6d003dd3></a></div></section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/PortfolioContent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PortfolioContent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6d003dd3"]]);

export { PortfolioContent as default };
//# sourceMappingURL=PortfolioContent-6jjqhnF5.mjs.map
