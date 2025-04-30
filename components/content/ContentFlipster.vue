<template>
  <section
    :id="id ? id : uid"
    class="m-flipster"
    :style="`
      --flipster-items: ${flipsters.length};
      --flipster-size: ${flipsterWidth};
      --flipster-diameter: ${flipsterDiameter};
      --flipster-distance: ${flipsterDistance};
      --rotation: ${rotation};
    `"
  >
    <h2 class="m-flipster__title">
      <span>
        {{ title }}

        <svg
          class="u-svg is-start"
          width="24"
          height="24"
          role="presentation"
          focusable="false"
        >
          <use xlink:href="#svg-diamond" />
        </svg>
        <svg
          class="u-svg is-end"
          width="24"
          height="24"
          role="presentation"
          focusable="false"
        >
          <use xlink:href="#svg-diamond" />
        </svg>
      </span>
    </h2>

    <div
      ref="flipsterWrap"
      class="m-flipster__wrap"
      @mouseenter="stopAnimation"
      @mouseleave="startAnimation"
      @dragstart="onDragstart"
    >
      <div class="m-flipster__list">
        <div
          v-for="(item, index) in flipsters"
          class="m-flipster__item"
          :style="`--n: ${index}`"
        >
          <template v-if="item.type === 'image'">
            <img :src="item.image_url" alt="" loading="lazy" />
          </template>
          <template v-else-if="item.type === 'video'">
            <video
              data-video="lazy"
              width="579"
              height="1167"
              autoplay
              muted
              loop
              playsinline
              preload="metadata"
            >
              <source :src="item.video_url" type="video/mp4" />
            </video>
          </template>
        </div>
      </div>

      <div class="m-flipster__drag">
        <div class="m-flipster__handle">
          <label for="flipsterRange" class="u-visually-hidden">
            Rotation
          </label>
          <input
            class="m-flipster__range"
            type="range"
            :min="-180"
            :max="180"
            step="1"
            id="flipsterRange"
            v-model="startAngle"
            style="width: 100%"
            @input="onInput"
          />

          <svg
            class="u-svg is-start"
            width="24"
            height="24"
            role="presentation"
            focusable="false"
          >
            <use xlink:href="#svg-diamond" />
          </svg>
          <svg
            class="u-svg is-end"
            width="24"
            height="24"
            role="presentation"
            focusable="false"
          >
            <use xlink:href="#svg-diamond" />
          </svg>
        </div>
      </div>
    </div>

    <svg viewBox="0 0 579 1167" class="u-visually-hidden">
      <clipPath id="flipsterSvgClip" clipPathUnits="objectBoundingBox">
        <path
          d="M0.868,0 H0.704 V0 H0.132 C0.06,0,0,0.029,0,0.064 V0.936 C0,0.971,0.06,1,0.132,1 H0.868 C0.94,1,1,0.971,1,0.936 V0.064 C1,0.029,0.94,0,0.868,0"
        ></path>
      </clipPath>
    </svg>
  </section>
</template>

<script setup>
const flipsterWrap = useTemplateRef("flipsterWrap");
const uid = useId();

const {x} = useDraggable(flipsterWrap, {
  initialValue: {x: 0, y: 0},
});

const windowWidth = ref(1440);

onMounted(() => {
  // startAnimation();
  windowWidth.value = window.innerWidth;
});

defineProps({
  id: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
});

const flipsters = ref([
  {
    type: "image",
    image_url: "https://picsum.photos/seed/1/400/805",
  },
  {
    type: "video",
    video_url:
      "https://pub-2b2d7646d0674576865bb5969de02ed2.r2.dev/4769627-uhd_2160_4096_25fps.mp4",
  },
  {
    type: "image",
    image_url: "https://picsum.photos/seed/2/400/805",
  },
  {
    type: "image",
    image_url: "https://picsum.photos/seed/3/400/805",
  },
  {
    type: "image",
    image_url: "https://picsum.photos/seed/4/400/805",
  },
  {
    type: "video",
    video_url:
      "https://pub-2b2d7646d0674576865bb5969de02ed2.r2.dev/12694168_1080_1920_60fps.mp4",
  },
  {
    type: "image",
    image_url: "https://picsum.photos/seed/5/400/805",
  },
  {
    type: "image",
    image_url: "https://picsum.photos/seed/6/400/805",
  },
  {
    type: "video",
    video_url:
      "https://pub-2b2d7646d0674576865bb5969de02ed2.r2.dev/7251768-uhd_2160_3840_25fps.mp4",
  },
  {
    type: "image",
    image_url: "https://picsum.photos/seed/7/400/805",
  },
]);

const flipsterDiameter = ref(25); // 75
const flipsterDistance = ref(5);
const flipsterItems = computed(() => flipsters.value.length);
const flipsterWidth = ref(15);
const startAngle = ref(0);

const rott = computed(
  () =>
    Math.atan2(flipsterWidth.value, flipsterDiameter.value) * (180 / Math.PI) +
    flipsterDistance.value
);
const itemsAngle = computed(() => (flipsterItems.value - 1) * rott.value);

// update rotation
const currentRotation = ref(Math.round(-90 - itemsAngle.value / 2));
const rotation = computed(
  () => `${currentRotation.value - startAngle.value + Math.floor(x.value / windowWidth.value * 180)}deg`
);

const animationInterval = ref();

// Function to update the value and loop back to -180 if it exceeds 180
const reverse = ref(false);
const animate = () => {
  if (startAngle.value === -180) {
    reverse.value = false;
  }

  if (startAngle.value === 180) {
    reverse.value = true;
  }

  if (reverse.value) {
    startAngle.value = Number(startAngle.value) - 1;
  } else {
    startAngle.value = Number(startAngle.value) + 1;
  }
};

// Start animation
const startAnimation = () => {
  if (!animationInterval.value) {
    animationInterval.value = setInterval(animate, 200); // Adjust interval speed if needed
  }
};

// Stop animation
const stopAnimation = () => {
  clearInterval(animationInterval.value);
  animationInterval.value = null;
};
</script>

<style lang="scss" scoped>
.m-flipster {
  margin: 10rem auto;

  --width: calc(var(--flipster-size) * 1vw);
  --height-calc: calc(1167 / 579 * var(--width));

  --offset: calc(var(--flipster-diameter) * 1vw);
  --distance: calc(var(--flipster-distance) * 1deg);
  --rott: calc(atan2(var(--width), var(--offset)) + var(--distance));
  --rotation: calc(-90deg - ((var(--flipster-items) - 1) * var(--rott)) / 2);

  // overflow: hidden;
}

.m-flipster__title {
  font-size: 2.25rem;
  text-align: center;
  font-family: var(--font-accent);

  &:not(:last-child) {
    margin-bottom: 2em;
  }

  > span {
    display: inline-flex;
    position: relative;
    padding-inline: 1em;
    padding-block-end: 0.5em;
    border-block-end: 2px solid;
  }

  .u-svg {
    display: block;
    width: 0.75em;
    height: auto;
    position: absolute;
    inset-block-end: 0;

    &.is-start {
      inset-inline-start: 0;
      transform: translate(-50%, calc(50% + 1px));
    }

    &.is-end {
      inset-inline-end: 0;
      transform: translate(50%, calc(50% + 1px));
    }
  }
}

.m-flipster__wrap {
  // overflow: hidden;
  // height: calc(1.54 * var(--height-calc));
  position: relative;
  background-color: rgb(0 255 0 / 15%);

  &::after {
    content: "";
    display: block;
    width: calc(2 * var(--offset)); // diameter
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: rgb(255 0 0 / 40%);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
}

.m-flipster__drag {
  position: absolute;
  top: calc(1.1 * var(--height-calc));
  padding-top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: var(--width);
  min-width: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
}

.m-flipster__handle {
  // height: 2rem;
  display: block;
  position: relative;
  width: 100%;
  // cursor: url("./images/hand.png"), col-resize;

  &::after {
    content: "";
    display: block;
    height: var(--fo-border-width);
    background-color: currentColor;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
  }

  .u-svg {
    display: block;
    width: 1.5rem;
    height: auto;
    position: absolute;
    top: 50%;

    &.is-start {
      left: 0;
      transform: translate(-50%, -50%);
    }

    &.is-end {
      right: 0;
      transform: translate(50%, -50%);
    }
  }
}

.m-flipster__list {
  position: relative;
  display: grid;
  justify-content: center;
  padding-top: var(--offset);
  padding-bottom: var(--offset);
  height: calc(2 * var(--height-calc) + 2 * var(--offset));
}

.m-flipster__item {
  grid-area: 1 / 1;
  aspect-ratio: 579 / 1167;
  width: var(--width);
  background-image: url("@/assets/images/flipster/iphone.svg");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  -webkit-user-drag: none;
  user-select: none;
  pointer-events: none;
  transform-origin: bottom center;

  // You can use --n-calc below to set items around the circle
  --n-calc: calc((360deg / (var(--flipster-items))) * var(--n));

  // Or you can set them next to each other
  // --n-calc: calc(var(--rott) * var(--n));

  transform: rotate(calc(var(--n-calc) + var(--rotation)))
    translateX(var(--offset)) rotate(90deg);

  transition: transform 0.2s linear;
}

.m-flipster__item > img,
.m-flipster__item > video {
  --top: 23;
  --right: 50;
  --bottom: 22;
  --left: 50;
  --top-calc: calc(1% * (var(--top) / 10));
  --right-calc: calc(1% * (var(--right) / 10));
  --bottom-calc: calc(1% * (var(--bottom) / 10));
  --left-calc: calc(1% * (var(--left) / 10));

  clip-path: url("#flipsterSvgClip");
  object-fit: cover;
  -webkit-user-drag: none;
  user-select: none;
  pointer-events: none;
  inline-size: calc(100% - var(--right-calc) - var(--left-calc));
  block-size: calc(100% - var(--top-calc) - var(--bottom-calc));
  position: absolute;
  inset: var(--top-calc) var(--right-calc) var(--bottom-calc) var(--left-calc);
}

// Range
.m-flipster__range {
  --track-bg: transparent;
  --track-height: 1rem;
  --thumb-size: 4rem;

  appearance: none;
  background: transparent;
  cursor: pointer;
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;

  // Track
  &::-webkit-slider-runnable-track {
    background-color: var(--track-bg);
    height: var(--track-height);
    border-radius: calc(var(--track-height) / 2);
  }

  &::-moz-range-track {
    background-color: var(--track-bg);
    height: var(--track-height);
    border-radius: calc(var(--track-height) / 2);
  }

  // Thumb
  &::-webkit-slider-thumb {
    appearance: none;
    margin-top: calc(var(--track-height) / 2 - var(--thumb-size) / 2);
    border-radius: var(--thumb-size);
    height: var(--thumb-size);
    width: var(--thumb-size);
    background-color: transparent;
    background-image: url("@/assets/images/flipster/hand.svg");
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: contain;
    transform: translateY(-5%);
  }

  &::-moz-range-thumb {
    border: 0;
    border-radius: var(--thumb-size);
    height: var(--thumb-size);
    width: var(--thumb-size);
    background-color: transparent;
    background-image: url("@/assets/images/flipster/hand.svg");
    background-repeat: no-repeat;
    background-size: contain;
    transform: translateY(-5%);
  }
}
</style>
