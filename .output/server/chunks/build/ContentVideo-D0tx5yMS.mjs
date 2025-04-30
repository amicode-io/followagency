import { HumbleScroll } from 'humblescroll-vue';
import { useTemplateRef, ref, mergeProps, withCtx, unref, createVNode, createBlock, createCommentVNode, openBlock, Fragment, useId, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import ContentTitle from './ContentTitle-ByFV86R2.mjs';
import { u as useState } from './state-CuouCpJu.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './server.mjs';
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
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  __name: "ContentVideo",
  __ssrInlineRender: true,
  props: {
    id: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    loop: {
      type: String,
      default: ""
    },
    url: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const uid = useState("uid", () => useId());
    const loopEl = useTemplateRef("loopEl");
    const videoEl = useTemplateRef("videoEl");
    const videoIsPlay = ref(false);
    const videoIsInit = ref(false);
    const playOrPause = (e) => {
      var _a, _b;
      e.preventDefault();
      if (videoIsPlay.value) {
        (_a = videoEl.value) == null ? void 0 : _a.pause();
      } else {
        (_b = videoEl.value) == null ? void 0 : _b.play();
      }
    };
    const onPlay = () => {
      var _a;
      (_a = videoEl.value) == null ? void 0 : _a.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
      });
      setTimeout(() => {
        videoIsPlay.value = true;
      }, 500);
      setTimeout(() => {
        var _a2;
        (_a2 = videoEl.value) == null ? void 0 : _a2.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center"
        });
      }, 1500);
      (void 0).documentElement.classList.add("is-overflow-hidden");
    };
    const onStop = () => {
      (void 0).documentElement.classList.remove("is-overflow-hidden");
      videoIsPlay.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HumbleScroll = HumbleScroll;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "m-video-wrap" }, _attrs))} data-v-f295c2f8><div class="container" data-v-f295c2f8>`);
      _push(ssrRenderComponent(_component_HumbleScroll, {
        animation: "zoom-out fade up",
        once: true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${ssrRenderAttr("id", __props.id ? __props.id : unref(uid))} class="${ssrRenderClass(`m-video m-video--${unref(uid)} ${unref(videoIsPlay) ? "is-play" : ""}`)}" data-v-f295c2f8${_scopeId}>`);
            if (__props.title) {
              _push2(ssrRenderComponent(unref(ContentTitle), {
                ref: "titleEl",
                is: "h2",
                title: __props.title,
                class: "m-video__title"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (!__props.loop) {
              _push2(`<video class="m-video__video m-video__video--active" playsinline disablepictureinpicture preload="metadata"${ssrIncludeBooleanAttr(unref(videoIsPlay) ? "controls" : null) ? " controls" : ""} data-v-f295c2f8${_scopeId}><source${ssrRenderAttr("src", __props.url)} type="video/mp4" data-v-f295c2f8${_scopeId}></video>`);
            } else {
              _push2(`<!--[--><video class="${ssrRenderClass([{ "is-active": !unref(videoIsPlay) }, "m-video__video m-video--loop"])}" playsinline disablepictureinpicture muted loop background data-v-f295c2f8${_scopeId}><source${ssrRenderAttr("src", __props.loop)} type="video/mp4" data-v-f295c2f8${_scopeId}></video><video class="${ssrRenderClass([{ "is-active": unref(videoIsPlay) }, "m-video__video m-video--full"])}" playsinline disablepictureinpicture${ssrRenderAttr("preload", unref(videoIsInit) ? "auto" : "none")} controls data-v-f295c2f8${_scopeId}><source${ssrRenderAttr("src", __props.url)} type="video/mp4" data-v-f295c2f8${_scopeId}></video><!--]-->`);
            }
            _push2(`<div class="m-video__overlay" data-v-f295c2f8${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", {
                id: __props.id ? __props.id : unref(uid),
                ref: "sectionEl",
                class: `m-video m-video--${unref(uid)} ${unref(videoIsPlay) ? "is-play" : ""}`
              }, [
                __props.title ? (openBlock(), createBlock(unref(ContentTitle), {
                  key: 0,
                  ref: "titleEl",
                  is: "h2",
                  title: __props.title,
                  class: "m-video__title"
                }, null, 8, ["title"])) : createCommentVNode("", true),
                !__props.loop ? (openBlock(), createBlock("video", {
                  key: 1,
                  ref_key: "videoEl",
                  ref: videoEl,
                  class: "m-video__video m-video__video--active",
                  playsinline: "",
                  disablepictureinpicture: "",
                  preload: "metadata",
                  controls: unref(videoIsPlay) ? "controls" : null,
                  onPlay,
                  onPause: onStop,
                  onEnded: onStop
                }, [
                  createVNode("source", {
                    src: __props.url,
                    type: "video/mp4"
                  }, null, 8, ["src"])
                ], 40, ["controls"])) : (openBlock(), createBlock(Fragment, { key: 2 }, [
                  createVNode("video", {
                    ref_key: "loopEl",
                    ref: loopEl,
                    class: ["m-video__video m-video--loop", { "is-active": !unref(videoIsPlay) }],
                    playsinline: "",
                    disablepictureinpicture: "",
                    muted: "",
                    loop: "",
                    background: ""
                  }, [
                    createVNode("source", {
                      src: __props.loop,
                      type: "video/mp4"
                    }, null, 8, ["src"])
                  ], 2),
                  createVNode("video", {
                    ref_key: "videoEl",
                    ref: videoEl,
                    class: ["m-video__video m-video--full", { "is-active": unref(videoIsPlay) }],
                    playsinline: "",
                    disablepictureinpicture: "",
                    preload: unref(videoIsInit) ? "auto" : "none",
                    controls: "",
                    onPlay,
                    onPause: onStop,
                    onEnded: onStop
                  }, [
                    createVNode("source", {
                      src: __props.url,
                      type: "video/mp4"
                    }, null, 8, ["src"])
                  ], 42, ["preload"])
                ], 64)),
                createVNode("div", {
                  class: "m-video__overlay",
                  onClick: playOrPause
                })
              ], 10, ["id"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/ContentVideo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContentVideo = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f295c2f8"]]);

export { ContentVideo as default };
//# sourceMappingURL=ContentVideo-D0tx5yMS.mjs.map
