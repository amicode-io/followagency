import { HumbleScroll } from "humblescroll-vue";
import { defineComponent, useId, ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { gsap } from "gsap";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContentCards",
  __ssrInlineRender: true,
  props: {
    id: { default: "" },
    cards: { default: () => [] }
  },
  setup(__props) {
    const uid = useId();
    const cardsTween = ref();
    cardsTween.value = __props.cards.map((el) => ({ number: el.number, tweened: 0 }));
    const sprintf = (template, value) => template.replace(/%d/g, value.toFixed(0));
    const onIntersect = (index, isIntersecting) => {
      if (isIntersecting) {
        gsap.to(
          cardsTween.value[index],
          {
            duration: 2,
            tweened: Number(cardsTween.value[index].number),
            delay: index * 0.1
          }
        );
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HumbleScroll = HumbleScroll;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: _ctx.id || unref(uid),
        class: "m-cards"
      }, _attrs))} data-v-a9aa0e40><div class="container" data-v-a9aa0e40><div class="m-cards__wrapper" data-v-a9aa0e40><!--[-->`);
      ssrRenderList(_ctx.cards, ({ text, number }, index) => {
        _push(ssrRenderComponent(_component_HumbleScroll, {
          animation: "zoom-in fade up fast",
          once: true,
          variables: { delay: `${(index + 1) * 100}ms` },
          onIntersecting: (isIntersecting) => onIntersect(index, isIntersecting)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a, _b;
            if (_push2) {
              _push2(`<article class="${ssrRenderClass(`element c-card c-card--${index + 1}`)}" data-v-a9aa0e40${_scopeId}><p class="element__inner" style="${ssrRenderStyle(`--strong-width: ${String(number).length}ch`)}" data-v-a9aa0e40${_scopeId}>${sprintf(text, ((_a = unref(cardsTween)[index]) == null ? void 0 : _a.tweened) || 0.01) ?? ""}</p></article>`);
            } else {
              return [
                createVNode("article", {
                  class: `element c-card c-card--${index + 1}`
                }, [
                  createVNode("p", {
                    class: "element__inner",
                    innerHTML: sprintf(text, ((_b = unref(cardsTween)[index]) == null ? void 0 : _b.tweened) || 0.01),
                    style: `--strong-width: ${String(number).length}ch`
                  }, null, 12, ["innerHTML"])
                ], 2)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><svg class="m-cards__cloud m-cards__cloud--1" width="713" height="599" role="presentation" focusable="false" data-v-a9aa0e40><use xlink:href="#svg-cloud" data-v-a9aa0e40></use></svg><svg class="m-cards__cloud m-cards__cloud--2" width="713" height="599" role="presentation" focusable="false" data-v-a9aa0e40><use xlink:href="#svg-cloud" data-v-a9aa0e40></use></svg><svg class="m-cards__cloud m-cards__cloud--3" width="713" height="599" role="presentation" focusable="false" data-v-a9aa0e40><use xlink:href="#svg-cloud" data-v-a9aa0e40></use></svg></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/ContentCards.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContentCards = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a9aa0e40"]]);
export {
  ContentCards as default
};
//# sourceMappingURL=ContentCards-CljB0ihH.js.map
