import { _ as __nuxt_component_0$1 } from "./nuxt-link-DxjINoOo.js";
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext, ref, unref, createBlock, openBlock, defineComponent } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderSlot } from "vue/server-renderer";
import { _ as _imports_0$2 } from "./virtual_public-2FTOlSxK.js";
import { HumbleScroll } from "humblescroll-vue";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import ContentMenu from "./ContentMenu-DMV-TFAm.js";
import { _ as __nuxt_component_2 } from "../server.mjs";
import "ufo";
import "hookable";
import "ofetch";
import "unctx";
import "h3";
import "pinia";
import "defu";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "destr";
import "klona";
const _imports_0$1 = publicAssetsURL("/contact-paw.png");
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HumbleScroll = HumbleScroll;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "woof" }, _attrs))} data-v-16384e43><span data-v-16384e43>`);
  _push(ssrRenderComponent(_component_HumbleScroll, {
    animation: "zoom-in fade up right blur 2xl",
    once: true,
    element: "span",
    "inner-element": "span"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="woof__paw"${ssrRenderAttr("src", _imports_0$1)} width="42" height="48" alt="" data-v-16384e43${_scopeId}> Woof, woof `);
      } else {
        return [
          createVNode("img", {
            class: "woof__paw",
            src: _imports_0$1,
            width: "42",
            height: "48",
            alt: ""
          }),
          createTextVNode(" Woof, woof ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_HumbleScroll, {
    animation: "zoom-in fade up right blur",
    once: true,
    style: { "--hs-delay": "0.2s" },
    element: "span",
    "inner-element": "span"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="woof__arrow"${ssrRenderAttr("src", _imports_0$2)} width="434" height="417" alt="" data-v-16384e43${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            class: "woof__arrow",
            src: _imports_0$2,
            width: "434",
            height: "417",
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</span>`);
  _push(ssrRenderComponent(_component_HumbleScroll, {
    animation: "fade up",
    once: true,
    style: { "--hs-delay": "0.4s" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<a href="mailto:kontakt@followagency.pl" class="woof__email" data-v-16384e43${_scopeId}> kontakt@followagency.pl </a>`);
      } else {
        return [
          createVNode("a", {
            href: "mailto:kontakt@followagency.pl",
            class: "woof__email"
          }, " kontakt@followagency.pl ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/atoms/ContactWoof.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ContactWoof = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-16384e43"]]);
const _sfc_main$2 = {
  __name: "LayoutHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const headerRange = ref(5);
    const menu = ref([
      {
        label: "Folio",
        target: "#"
      },
      {
        label: "Praca",
        target: "#"
      },
      {
        label: "Pjeski",
        target: "#"
      },
      {
        label: "Kontakt",
        target: "#"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))} data-v-77e33566><div class="container" data-v-77e33566><div class="header__container" data-v-77e33566><div class="header-logo" style="${ssrRenderStyle(`--size: ${unref(headerRange)}`)}" data-v-77e33566>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "header-logo__link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="header-logo__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 346 81" width="346" height="81" data-v-77e33566${_scopeId}><defs data-v-77e33566${_scopeId}><linearGradient id="followLogoA" x1="30.8" x2="23.9" y1="22.4" y2="-.4" gradientUnits="userSpaceOnUse" data-v-77e33566${_scopeId}><stop offset="0" stop-color="#fff" data-v-77e33566${_scopeId}></stop><stop offset=".1" stop-color="#d8d8d8" stop-opacity=".8" data-v-77e33566${_scopeId}></stop><stop offset=".5" stop-color="#3e3e3e" stop-opacity=".2" data-v-77e33566${_scopeId}></stop><stop offset=".7" stop-opacity="0" data-v-77e33566${_scopeId}></stop></linearGradient></defs><path d="M68 27 45 9 34 0h-1l-1 1v9c0-3-4-6-6-8V1h-1l-1 1v15l-2 1c-2 1-4 4-4 7s-3 6-5 7L0 39c0 6 6 11 13 11v2c0-1 1-2 3-2h2l-2 2v2h11c3 0 5 2 5 5v22c0-5 11-13 14-15 2-3 11-9 11-14v5c3-3 11-8 11-13v4a13 13 0 0 0 0-21Z" data-v-77e33566${_scopeId}></path><path fill="#1a1a1a" d="M57 57z" data-v-77e33566${_scopeId}></path><path fill="url(#followLogoA)" d="M32 10c0-3-4-6-6-8V1h-1l-1 1v15l8-4v-3Z" data-v-77e33566${_scopeId}></path><path fill="#f1627e" d="M18 50h-2c-2 0-3 1-3 2v-2l-2 2v7a2 2 0 1 0 5 0v-7l2-2Z" data-v-77e33566${_scopeId}></path><path d="M97 31v21c4 0 7-4 7-8v-2h8v-6h-8v-6h8v-6h-8c-4 0-7 3-7 7Zm49-7c-3 0-7 1-9 3-3 3-5 7-5 11 0 8 6 14 14 14 4 0 7-1 10-4a14 14 0 0 0-10-24Zm0 21c-4 0-7-3-7-7s3-8 7-8 8 4 8 8-4 7-8 7Zm43-14c0-4-4-7-8-7v28h16v-6h-8V31Zm35 0c0-4-4-7-8-7v28h16v-6h-8V31Zm41-7c-4 0-7 1-10 3-3 3-4 7-4 11 0 8 6 14 14 14 4 0 7-1 9-4a14 14 0 0 0-9-24Zm0 21c-4 0-7-3-7-7s3-8 7-8 7 4 7 8-3 7-7 7Zm59-21v22h-6V31c0-4-4-7-8-7v22h-6V31c0-4-3-7-7-7v28h34V31c0-4-3-7-7-7Zm14 1h1v3h1v-3h1v-1h-3v1zm7-1-1 2-1-2h-1v4h1v-2 1h1l1-1v2h1v-4h-1z" data-v-77e33566${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "header-logo__svg",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 346 81",
                width: "346",
                height: "81"
              }, [
                createVNode("defs", null, [
                  createVNode("linearGradient", {
                    id: "followLogoA",
                    x1: "30.8",
                    x2: "23.9",
                    y1: "22.4",
                    y2: "-.4",
                    gradientUnits: "userSpaceOnUse"
                  }, [
                    createVNode("stop", {
                      offset: "0",
                      "stop-color": "#fff"
                    }),
                    createVNode("stop", {
                      offset: ".1",
                      "stop-color": "#d8d8d8",
                      "stop-opacity": ".8"
                    }),
                    createVNode("stop", {
                      offset: ".5",
                      "stop-color": "#3e3e3e",
                      "stop-opacity": ".2"
                    }),
                    createVNode("stop", {
                      offset: ".7",
                      "stop-opacity": "0"
                    })
                  ])
                ]),
                createVNode("path", { d: "M68 27 45 9 34 0h-1l-1 1v9c0-3-4-6-6-8V1h-1l-1 1v15l-2 1c-2 1-4 4-4 7s-3 6-5 7L0 39c0 6 6 11 13 11v2c0-1 1-2 3-2h2l-2 2v2h11c3 0 5 2 5 5v22c0-5 11-13 14-15 2-3 11-9 11-14v5c3-3 11-8 11-13v4a13 13 0 0 0 0-21Z" }),
                createVNode("path", {
                  fill: "#1a1a1a",
                  d: "M57 57z"
                }),
                createVNode("path", {
                  fill: "url(#followLogoA)",
                  d: "M32 10c0-3-4-6-6-8V1h-1l-1 1v15l8-4v-3Z"
                }),
                createVNode("path", {
                  fill: "#f1627e",
                  d: "M18 50h-2c-2 0-3 1-3 2v-2l-2 2v7a2 2 0 1 0 5 0v-7l2-2Z"
                }),
                createVNode("path", { d: "M97 31v21c4 0 7-4 7-8v-2h8v-6h-8v-6h8v-6h-8c-4 0-7 3-7 7Zm49-7c-3 0-7 1-9 3-3 3-5 7-5 11 0 8 6 14 14 14 4 0 7-1 10-4a14 14 0 0 0-10-24Zm0 21c-4 0-7-3-7-7s3-8 7-8 8 4 8 8-4 7-8 7Zm43-14c0-4-4-7-8-7v28h16v-6h-8V31Zm35 0c0-4-4-7-8-7v28h16v-6h-8V31Zm41-7c-4 0-7 1-10 3-3 3-4 7-4 11 0 8 6 14 14 14 4 0 7-1 9-4a14 14 0 0 0-9-24Zm0 21c-4 0-7-3-7-7s3-8 7-8 7 4 7 8-3 7-7 7Zm59-21v22h-6V31c0-4-4-7-8-7v22h-6V31c0-4-3-7-7-7v28h34V31c0-4-3-7-7-7Zm14 1h1v3h1v-3h1v-1h-3v1zm7-1-1 2-1-2h-1v4h1v-2 1h1l1-1v2h1v-4h-1z" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="header-logo__below" data-v-77e33566><img class="header-logo__arrow"${ssrRenderAttr("src", _imports_0$2)} width="434" height="417" alt="" data-v-77e33566><div class="header-logo__resize" data-v-77e33566><label for="logo-resize" data-v-77e33566>Powiększ logo</label><input id="logo-resize" class="header-logo__range" type="range"${ssrRenderAttr("value", unref(headerRange))} min="0" max="50" step="1" data-v-77e33566></div></div></div>`);
      {
        _push(`<!---->`);
      }
      _push(`</div><div class="header__hidden" data-v-77e33566><div class="container" data-v-77e33566>`);
      _push(ssrRenderComponent(ContentMenu, {
        class: "header__menu",
        "aria-label": "Primary Navigation",
        menu: unref(menu)
      }, null, _parent));
      _push(`<div class="header__bottom" data-v-77e33566><a href="https://www.linkedin.com/company/follow-sm" target="_blank" class="header__external" data-v-77e33566>LinkedIn</a>`);
      _push(ssrRenderComponent(ContactWoof, { class: "header__woof" }, null, _parent));
      _push(`</div></div></div></div></header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LayoutHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-77e33566"]]);
const _imports_0 = publicAssetsURL("/contact-hidden.png");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LayoutFooter",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))}><svg class="footer__bg" xmlns="http://www.w3.org/2000/svg" width="2199" height="615" viewBox="0 0 2199 615"><path fill="#fff" fill-rule="evenodd" stroke="#000" stroke-width="2" style="${ssrRenderStyle({ "stroke-width": "var(--fo-stroke-width)" })}" vector-effect="non-scaling-stroke" d="M1346 600c51-10 830 36 844-16s-10-504-42-508c-266-32-498 94-508 203-93-45-283-41-343 56-48-60-96-51-160-9-52-125-197-171-332-81C790 170 577-6 109 6-3 49-20 510 40 586c-112 10 1244 27 1306 14Z"></path><path fill="#fff" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" style="${ssrRenderStyle({ "stroke-width": "var(--fo-stroke-width)" })}" vector-effect="non-scaling-stroke" d="M1280 130c-1-7 4-14 9-18 6-4 12-4 14-4-2-11-1-22 10-27 12-6 26-3 35 7 4-11 13-21 25-18 12 4 14 15 14 26 12-7 28-7 37 5 9 11 2 25-9 31 10 8 15 23 5 34-8 9-21 6-30-1-2 12-6 25-19 28-14 4-23-7-29-18-9 11-24 13-35 4-10-7-12-21-5-31l-11-4c-3-2-10-6-11-14Z"></path></svg><div class="container"><div class="footer__main"><div class="footer__start">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="footer__logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 346 81" width="346" height="81"${_scopeId}><defs${_scopeId}><linearGradient id="followLogoA" x1="30.8" x2="23.9" y1="22.4" y2="-.4" gradientUnits="userSpaceOnUse"${_scopeId}><stop offset="0" stop-color="#fff"${_scopeId}></stop><stop offset=".1" stop-color="#d8d8d8" stop-opacity=".8"${_scopeId}></stop><stop offset=".5" stop-color="#3e3e3e" stop-opacity=".2"${_scopeId}></stop><stop offset=".7" stop-opacity="0"${_scopeId}></stop></linearGradient></defs><path d="M68 27 45 9 34 0h-1l-1 1v9c0-3-4-6-6-8V1h-1l-1 1v15l-2 1c-2 1-4 4-4 7s-3 6-5 7L0 39c0 6 6 11 13 11v2c0-1 1-2 3-2h2l-2 2v2h11c3 0 5 2 5 5v22c0-5 11-13 14-15 2-3 11-9 11-14v5c3-3 11-8 11-13v4a13 13 0 0 0 0-21Z"${_scopeId}></path><path fill="#1a1a1a" d="M57 57z"${_scopeId}></path><path fill="url(#followLogoA)" d="M32 10c0-3-4-6-6-8V1h-1l-1 1v15l8-4v-3Z"${_scopeId}></path><path fill="#f1627e" d="M18 50h-2c-2 0-3 1-3 2v-2l-2 2v7a2 2 0 1 0 5 0v-7l2-2Z"${_scopeId}></path><path d="M97 31v21c4 0 7-4 7-8v-2h8v-6h-8v-6h8v-6h-8c-4 0-7 3-7 7Zm49-7c-3 0-7 1-9 3-3 3-5 7-5 11 0 8 6 14 14 14 4 0 7-1 10-4a14 14 0 0 0-10-24Zm0 21c-4 0-7-3-7-7s3-8 7-8 8 4 8 8-4 7-8 7Zm43-14c0-4-4-7-8-7v28h16v-6h-8V31Zm35 0c0-4-4-7-8-7v28h16v-6h-8V31Zm41-7c-4 0-7 1-10 3-3 3-4 7-4 11 0 8 6 14 14 14 4 0 7-1 9-4a14 14 0 0 0-9-24Zm0 21c-4 0-7-3-7-7s3-8 7-8 7 4 7 8-3 7-7 7Zm59-21v22h-6V31c0-4-4-7-8-7v22h-6V31c0-4-3-7-7-7v28h34V31c0-4-3-7-7-7Zm14 1h1v3h1v-3h1v-1h-3v1zm7-1-1 2-1-2h-1v4h1v-2 1h1l1-1v2h1v-4h-1z"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "footer__logo",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 346 81",
                width: "346",
                height: "81"
              }, [
                createVNode("defs", null, [
                  createVNode("linearGradient", {
                    id: "followLogoA",
                    x1: "30.8",
                    x2: "23.9",
                    y1: "22.4",
                    y2: "-.4",
                    gradientUnits: "userSpaceOnUse"
                  }, [
                    createVNode("stop", {
                      offset: "0",
                      "stop-color": "#fff"
                    }),
                    createVNode("stop", {
                      offset: ".1",
                      "stop-color": "#d8d8d8",
                      "stop-opacity": ".8"
                    }),
                    createVNode("stop", {
                      offset: ".5",
                      "stop-color": "#3e3e3e",
                      "stop-opacity": ".2"
                    }),
                    createVNode("stop", {
                      offset: ".7",
                      "stop-opacity": "0"
                    })
                  ])
                ]),
                createVNode("path", { d: "M68 27 45 9 34 0h-1l-1 1v9c0-3-4-6-6-8V1h-1l-1 1v15l-2 1c-2 1-4 4-4 7s-3 6-5 7L0 39c0 6 6 11 13 11v2c0-1 1-2 3-2h2l-2 2v2h11c3 0 5 2 5 5v22c0-5 11-13 14-15 2-3 11-9 11-14v5c3-3 11-8 11-13v4a13 13 0 0 0 0-21Z" }),
                createVNode("path", {
                  fill: "#1a1a1a",
                  d: "M57 57z"
                }),
                createVNode("path", {
                  fill: "url(#followLogoA)",
                  d: "M32 10c0-3-4-6-6-8V1h-1l-1 1v15l8-4v-3Z"
                }),
                createVNode("path", {
                  fill: "#f1627e",
                  d: "M18 50h-2c-2 0-3 1-3 2v-2l-2 2v7a2 2 0 1 0 5 0v-7l2-2Z"
                }),
                createVNode("path", { d: "M97 31v21c4 0 7-4 7-8v-2h8v-6h-8v-6h8v-6h-8c-4 0-7 3-7 7Zm49-7c-3 0-7 1-9 3-3 3-5 7-5 11 0 8 6 14 14 14 4 0 7-1 10-4a14 14 0 0 0-10-24Zm0 21c-4 0-7-3-7-7s3-8 7-8 8 4 8 8-4 7-8 7Zm43-14c0-4-4-7-8-7v28h16v-6h-8V31Zm35 0c0-4-4-7-8-7v28h16v-6h-8V31Zm41-7c-4 0-7 1-10 3-3 3-4 7-4 11 0 8 6 14 14 14 4 0 7-1 9-4a14 14 0 0 0-9-24Zm0 21c-4 0-7-3-7-7s3-8 7-8 7 4 7 8-3 7-7 7Zm59-21v22h-6V31c0-4-4-7-8-7v22h-6V31c0-4-3-7-7-7v28h34V31c0-4-3-7-7-7Zm14 1h1v3h1v-3h1v-1h-3v1zm7-1-1 2-1-2h-1v4h1v-2 1h1l1-1v2h1v-4h-1z" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/portfolio",
        class: "footer__hidden"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="u-visually-hidden"${_scopeId}>Strefa tylko dla klientów</span><img${ssrRenderAttr("src", _imports_0)} width="384" height="149" alt=""${_scopeId}>`);
          } else {
            return [
              createVNode("span", { class: "u-visually-hidden" }, "Strefa tylko dla klientów"),
              createVNode("img", {
                src: _imports_0,
                width: "384",
                height: "149",
                alt: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="footer__contact">`);
      _push(ssrRenderComponent(ContactWoof, null, null, _parent));
      _push(`<address> Chocimska 35/3<br> 00-791 Warszawa </address></div></div><div class="footer__end"><a href="https://www.linkedin.com/company/follow-sm" target="_blank" class="footer__external">LinkedIn</a><span>© 2025 Follow Agency, All Rights Reserved.</span><a href="#top" class="footer__top">Go to the top</a></div></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LayoutFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const isCustomCursor = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutHeader = __nuxt_component_0;
      const _component_LayoutFooter = _sfc_main$1;
      const _component_AtomsCursor = __nuxt_component_2;
      _push(`<main${ssrRenderAttrs(mergeProps({
        class: ["main main--default", { "main--cursor": unref(isCustomCursor) }]
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_LayoutHeader, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_LayoutFooter, null, null, _parent));
      if (unref(isCustomCursor)) {
        _push(ssrRenderComponent(_component_AtomsCursor, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-CYbqmNCS.js.map
