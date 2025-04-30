<script setup>
import MenuComp from "~/assets/lotties/Menu.json";

const props = defineProps(["target", "label"]);

const playState = ref(false);
const lottieContainer = useTemplateRef("lottieContainer");

const play = () => {
  lottieContainer.value.setDirection("forward");
  lottieContainer.value.goToAndPlay(0);
};

const reverse = () => {
  const lottieLength = lottieContainer.value.getDuration(true);
  lottieContainer.value.setDirection("reverse");
  lottieContainer.value.goToAndPlay(lottieLength);
};

const targetComputed = computed(() => {
  let url;

  try {
    url = new URL(props.target);

    if (url.protocol === "http:" || url.protocol === "https:") {
      return props.target;
    }
  } catch (_) {
    // Invalid URL
  }

  return `#${props.target}`
});
</script>

<template>
  <a class="m-nav-item" :href="targetComputed" @mouseenter="play" @mouseleave="reverse">
    <span class="m-nav-item__label">{{ label }}</span>

    <client-only>
      <Vue3Lottie
        ref="lottieContainer"
        class="m-nav-item__lottie"
        :auto-play="false"
        :animation-data="MenuComp"
        :pause-animation="playState"
        :height="650"
        :width="200"
        :loop="false"
      />
    </client-only>
  </a>
</template>

<style lang="scss" scoped>
@import "rfs/scss";

@keyframes rotate-img {
  from {
    transform: translate(-50%, -50%) rotate(-20deg); // Start angle
  }
  to {
    transform: translate(-50%, -50%) rotate(0deg); // End angle
  }
}

.m-nav-item {
  color: #000;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 1;
  position: relative;

  display: inline-flex;

  &:hover,
  &:focus {
    .m-nav-item__label {
      transform: scale(1.25);
    }

    .m-nav-item__lottie {
      opacity: 1;
    }
  }
}

.m-nav-item__label {
  position: relative;
  z-index: 2;

  transform-origin: 50%;
  transition: all 0.3s ease;
  will-change: transform;
}

.m-nav-item__lottie {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 120%;
  min-width: 18rem;
  // max-width: 30rem;
  height: auto;
  pointer-events: none;
  z-index: 1;
  opacity: 0.5;

  transform: translate(-50%, -50%);
  transition: transform 0.5s ease;
  animation: rotate-img 2s linear infinite alternate;
  will-change: transform;
}
</style>
