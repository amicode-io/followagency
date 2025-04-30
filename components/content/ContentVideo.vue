<template>
  <section class="m-video-wrap">
    <div class="container">
      <HumbleScroll animation="zoom-out fade up" :once="true">
        <div
          :id="id ? id : uid"
          ref="sectionEl"
          :class="`m-video m-video--${uid} ${videoIsPlay ? 'is-play' : ''}`"
        >
          <ContentTitle
            v-if="title"
            ref="titleEl"
            is="h2"
            :title
            class="m-video__title"
          />

          <video
            v-if="!loop"
            ref="videoEl"
            class="m-video__video m-video__video--active"
            playsinline
            disablepictureinpicture
            preload="metadata"
            :controls="videoIsPlay ? 'controls' : null"
            @play="onPlay"
            @pause="onStop"
            @ended="onStop"
          >
            <source :src="url" type="video/mp4" />
          </video>
          <template v-else>
            <video
              ref="loopEl"
              class="m-video__video m-video--loop"
              :class="{'is-active': !videoIsPlay}"
              playsinline
              disablepictureinpicture
              muted
              loop
              background
            >
              <source :src="loop" type="video/mp4" />
            </video>
            <video
              ref="videoEl"
              class="m-video__video m-video--full"
              :class="{'is-active': videoIsPlay}"
              playsinline
              disablepictureinpicture
              :preload="videoIsInit ? 'auto' : 'none'"
              controls
              @play="onPlay"
              @pause="onStop"
              @ended="onStop"
            >
              <source :src="url" type="video/mp4" />
            </video>
          </template>

          <div class="m-video__overlay" @click="playOrPause"></div>
        </div>
      </HumbleScroll>
    </div>
  </section>
</template>

<script setup>
import ContentTitle from "./ContentTitle";

const uid = useState("uid", () => useId());

// elements
const loopEl = useTemplateRef("loopEl");
const videoEl = useTemplateRef("videoEl");

// boolean
const videoIsPlay = ref(false);
const videoIsInit = ref(false);

const props = defineProps({
  id: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  loop: {
    type: String,
    default: "",
  },
  url: {
    type: String,
    required: true,
  },
});

// Methods
const playOrPause = (e) => {
  e.preventDefault();

  if (videoIsPlay.value) {
    videoEl.value?.pause();
  } else {
    videoEl.value?.play();
  }
};

const onPlay = () => {
  videoEl.value?.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center",
  });

  setTimeout(() => {
    videoIsPlay.value = true;
    // titleEl.value?.reverse()
  }, 500);

  setTimeout(() => {
    videoEl.value?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }, 1500);

  document.documentElement.classList.add("is-overflow-hidden");
};

const onStop = () => {
  document.documentElement.classList.remove("is-overflow-hidden");
  videoIsPlay.value = false;
  // titleEl.value?.play()
};

onMounted(() => {
  // imitate autoplay
  if (!!props.loop) {
    loopEl.value.play();
  }
});
</script>

<style lang="scss" scoped>
@import "rfs/scss";

.m-video-wrap {
  position: relative;
  z-index: 10;
}

.m-video {
  @include rfs(8rem, --margin);

  --shadow-bg: rgb(212 109 132);
  --shadow-size: 0.75rem;

  position: relative;
  border-radius: 3rem;
  width: 100%;
  margin-inline: auto;
  aspect-ratio: 16/9;
  // transform: translateY(100px);
  margin-block-end: var(--shadow-size);

  margin-block-start: var(--margin);
  margin-block-end: calc(var(--margin) + var(--shadow-size));

  &.is-play {
    border-radius: 0;
    z-index: 1000;

    &::before {
      display: none;
    }
  }

  &:not(.is-play) {
    cursor: none;

    &:hover {
      .m-video__icon {
        opacity: 1;
        transform: scale(1);
      }
    }
  }

  &,
  &::before,
  &__video {
    border-radius: 3rem;
  }

  &__video,
  &::before {
    border-style: solid;
    border-color: var(--fo-black, #000);
    border-width: var(--fo-border-width, 2px);
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: calc(-1 * var(--shadow-size));
    left: var(--shadow-size);
    width: 100%;
    height: 100%;
    background-color: var(--shadow-bg);
    transform: translate(var(--translate-x, 0), var(--translate-y, 0));
    z-index: -1;
  }

  &__title {
    color: var(--fo-white);
    position: absolute;
    top: 13%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 1;
    z-index: 3;
    transition: opacity 0.5s;
    margin-block-end: 0 !important;
  }

  &__video {
    background-color: #000;
    display: block;
    width: 100%;
    height: 100%;

    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;

    transform-origin: 50%;
    transform: translate(-50%, -50%);
    transition:
      width 1.5s ease-in-out,
      height 1s ease-in-out,
      border-radius 0.2s;

    &.is-active {
      z-index: 2;
    }
  }

  &__overlay {
    background-color: rgb(0 0 255 / 0%);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 4;
    width: 100%;
    height: 100%;
  }

  &.is-play .m-video__video {
    position: fixed;
    width: 100vw;
    width: 100dvw;
    max-width: none;
    height: 100vh;
    height: 100dvh;
    // z-index: 1000;
    border-radius: 0;
  }
}
</style>
