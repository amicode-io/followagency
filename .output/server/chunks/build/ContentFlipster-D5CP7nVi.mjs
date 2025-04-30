import { useTemplateRef, useId, ref, computed, mergeProps, unref, isRef, toRefs as toRefs$1, customRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

function toValue(r) {
  return typeof r === "function" ? r() : unref(r);
}
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
function toRefs(objectRef, options = {}) {
  if (!isRef(objectRef))
    return toRefs$1(objectRef);
  const result = Array.isArray(objectRef.value) ? Array.from({ length: objectRef.value.length }) : {};
  for (const key in objectRef.value) {
    result[key] = customRef(() => ({
      get() {
        return objectRef.value[key];
      },
      set(v) {
        var _a;
        const replaceRef = (_a = toValue(options.replaceRef)) != null ? _a : true;
        if (replaceRef) {
          if (Array.isArray(objectRef.value)) {
            const copy = [...objectRef.value];
            copy[key] = v;
            objectRef.value = copy;
          } else {
            const newObject = { ...objectRef.value, [key]: v };
            Object.setPrototypeOf(newObject, Object.getPrototypeOf(objectRef.value));
            objectRef.value = newObject;
          }
        } else {
          objectRef.value[key] = v;
        }
      }
    }));
  }
  return result;
}
const defaultWindow = void 0;
function useDraggable(target, options = {}) {
  var _a;
  const {
    pointerTypes,
    preventDefault: preventDefault2,
    stopPropagation,
    exact,
    onMove,
    onEnd,
    onStart,
    initialValue,
    axis = "both",
    draggingElement = defaultWindow,
    containerElement,
    handle: draggingHandle = target,
    buttons = [0]
  } = options;
  const position = ref(
    (_a = toValue(initialValue)) != null ? _a : { x: 0, y: 0 }
  );
  const pressedDelta = ref();
  return {
    ...toRefs(position),
    position,
    isDragging: computed(() => !!pressedDelta.value),
    style: computed(
      () => `left:${position.value.x}px;top:${position.value.y}px;`
    )
  };
}
const _sfc_main = {
  __name: "ContentFlipster",
  __ssrInlineRender: true,
  props: {
    id: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const flipsterWrap = useTemplateRef("flipsterWrap");
    const uid = useId();
    const { x } = useDraggable(flipsterWrap, {
      initialValue: { x: 0, y: 0 }
    });
    const windowWidth = ref(1440);
    const flipsters = ref([
      {
        type: "image",
        image_url: "https://picsum.photos/seed/1/400/805"
      },
      {
        type: "video",
        video_url: "https://pub-2b2d7646d0674576865bb5969de02ed2.r2.dev/4769627-uhd_2160_4096_25fps.mp4"
      },
      {
        type: "image",
        image_url: "https://picsum.photos/seed/2/400/805"
      },
      {
        type: "image",
        image_url: "https://picsum.photos/seed/3/400/805"
      },
      {
        type: "image",
        image_url: "https://picsum.photos/seed/4/400/805"
      },
      {
        type: "video",
        video_url: "https://pub-2b2d7646d0674576865bb5969de02ed2.r2.dev/12694168_1080_1920_60fps.mp4"
      },
      {
        type: "image",
        image_url: "https://picsum.photos/seed/5/400/805"
      },
      {
        type: "image",
        image_url: "https://picsum.photos/seed/6/400/805"
      },
      {
        type: "video",
        video_url: "https://pub-2b2d7646d0674576865bb5969de02ed2.r2.dev/7251768-uhd_2160_3840_25fps.mp4"
      },
      {
        type: "image",
        image_url: "https://picsum.photos/seed/7/400/805"
      }
    ]);
    const flipsterDiameter = ref(25);
    const flipsterDistance = ref(5);
    const flipsterItems = computed(() => flipsters.value.length);
    const flipsterWidth = ref(15);
    const startAngle = ref(0);
    const rott = computed(
      () => Math.atan2(flipsterWidth.value, flipsterDiameter.value) * (180 / Math.PI) + flipsterDistance.value
    );
    const itemsAngle = computed(() => (flipsterItems.value - 1) * rott.value);
    const currentRotation = ref(Math.round(-90 - itemsAngle.value / 2));
    const rotation = computed(
      () => `${currentRotation.value - startAngle.value + Math.floor(x.value / windowWidth.value * 180)}deg`
    );
    ref();
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: __props.id ? __props.id : unref(uid),
        class: "m-flipster",
        style: `
      --flipster-items: ${unref(flipsters).length};
      --flipster-size: ${unref(flipsterWidth)};
      --flipster-diameter: ${unref(flipsterDiameter)};
      --flipster-distance: ${unref(flipsterDistance)};
      --rotation: ${unref(rotation)};
    `
      }, _attrs))} data-v-9d33d40c><h2 class="m-flipster__title" data-v-9d33d40c><span data-v-9d33d40c>${ssrInterpolate(__props.title)} <svg class="u-svg is-start" width="24" height="24" role="presentation" focusable="false" data-v-9d33d40c><use xlink:href="#svg-diamond" data-v-9d33d40c></use></svg><svg class="u-svg is-end" width="24" height="24" role="presentation" focusable="false" data-v-9d33d40c><use xlink:href="#svg-diamond" data-v-9d33d40c></use></svg></span></h2><div class="m-flipster__wrap" data-v-9d33d40c><div class="m-flipster__list" data-v-9d33d40c><!--[-->`);
      ssrRenderList(unref(flipsters), (item, index) => {
        _push(`<div class="m-flipster__item" style="${ssrRenderStyle(`--n: ${index}`)}" data-v-9d33d40c>`);
        if (item.type === "image") {
          _push(`<img${ssrRenderAttr("src", item.image_url)} alt="" loading="lazy" data-v-9d33d40c>`);
        } else if (item.type === "video") {
          _push(`<video data-video="lazy" width="579" height="1167" autoplay muted loop playsinline preload="metadata" data-v-9d33d40c><source${ssrRenderAttr("src", item.video_url)} type="video/mp4" data-v-9d33d40c></video>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="m-flipster__drag" data-v-9d33d40c><div class="m-flipster__handle" data-v-9d33d40c><label for="flipsterRange" class="u-visually-hidden" data-v-9d33d40c> Rotation </label><input class="m-flipster__range" type="range"${ssrRenderAttr("min", -180)}${ssrRenderAttr("max", 180)} step="1" id="flipsterRange"${ssrRenderAttr("value", unref(startAngle))} style="${ssrRenderStyle({ "width": "100%" })}" data-v-9d33d40c><svg class="u-svg is-start" width="24" height="24" role="presentation" focusable="false" data-v-9d33d40c><use xlink:href="#svg-diamond" data-v-9d33d40c></use></svg><svg class="u-svg is-end" width="24" height="24" role="presentation" focusable="false" data-v-9d33d40c><use xlink:href="#svg-diamond" data-v-9d33d40c></use></svg></div></div></div><svg viewBox="0 0 579 1167" class="u-visually-hidden" data-v-9d33d40c><clipPath id="flipsterSvgClip" clipPathUnits="objectBoundingBox" data-v-9d33d40c><path d="M0.868,0 H0.704 V0 H0.132 C0.06,0,0,0.029,0,0.064 V0.936 C0,0.971,0.06,1,0.132,1 H0.868 C0.94,1,1,0.971,1,0.936 V0.064 C1,0.029,0.94,0,0.868,0" data-v-9d33d40c></path></clipPath></svg></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/ContentFlipster.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContentFlipster = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9d33d40c"]]);

export { ContentFlipster as default };
//# sourceMappingURL=ContentFlipster-D5CP7nVi.mjs.map
