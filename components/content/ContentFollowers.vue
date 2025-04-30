<template>
  <section
    :id="id ? id : uid"
    class="m-followers"
    aria-label="List of our followers"
    >

    <div class="m-followers__title" :class="{ 'is-drag': isDragging}">
      <HumbleScroll animation="zoom-in" :once="true">
        <svg viewBox="0 0 366 486">
          <path id="curve" fill="transparent" d="M36.35 97.5C69.71 38.31 122.95 0 182.93 0c101.03 0 182.93 108.7 182.93 242.79s-81.9 242.79-182.93 242.79S0 376.88 0 242.79C0 188.31 13.52 138.01 36.35 97.5" />

          <text width="366">
            <textPath xlink:href="#curve" startOffset="-8">
              {{ title }}
            </textPath>
          </text>
        </svg>
      </HumbleScroll>
    </div>

    <HumbleScroll animation="fade up" :once="true">
      <Splide :options="splideOptions" :aria-label="title" @splide:scroll="isDragging = true" @splide:scrolled="isDragging = false">
        <SplideSlide v-for="{ image_url, title } in followers">
            <div class="m-followers__item">
              <img class="u-img" :src="image_url" :alt="title">
            </div>
        </SplideSlide>
      </Splide>
    </HumbleScroll>
  </section>
</template>

<script lang="ts" setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

import type { FollowersItem } from '~/models/FollowersItem';

interface Props {
  id?: string;
  title?: String;
  followers: FollowersItem[];
};

const uid = useId();
const { id = "", title = "", followers = [] } = defineProps<Props>();

const splideOptions = ref({
  type: "loop",
  drag: "free",
  focus: "center",
  snap: true,
  autoWidth: true,
  autoplay: true,
  gap: "2rem",
})

const isDragging = ref(false)
</script>

<style lang="scss" scoped>
.m-followers {
  position: relative;

  &:not(:first-child) {
    margin-block-start: 6rem;
  }

  &:not(:last-child) {
    margin-block-end: 4rem;
  }

  &::v-deep(.splide__track) {
    padding-block: 4rem;
  }

  &::v-deep(.splide__pagination__page) {
    background-color: rgb(0 0 0 / 50%);

    &.is-active {
      background-color: rgba(0 0 0 / 100%);
      transform: scale(1.2);
    }
  }

  &__title {
    --moveX: 0px;
    --moveY: 0px;
    --rotate: 0deg;
    --offset: 1.5rem;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(
      calc(-50% - var(--offset) + var(--moveX)),
      calc(-50% - var(--offset) + var(--moveY))
    ) rotate(var(--rotate));
    width: 20rem;
    height: auto;
    transition: transform 0.2s ease;

    @media (width >= 50rem) {
      width: 23rem;
    }

    &.is-drag {
      --moveX: 0rem;
      --moveY: -3rem;
      --rotate: 42deg;
    }

    text {
      font-size: 1.7rem;
      font-family: var(--font-accent);
    }
  }

  &__item {
    width: 20rem;
    aspect-ratio: 265/350;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (width >= 50rem) {
      width: 23rem;
    }

    > .u-img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
      border-style: solid;
      border-color: var(--fo-color-black, #000);
      border-width: var(--fo-border-width, 2px);
      transition: transform 0.2s;
    }

    &:hover > .u-img {
      transform: scale(1.07);
    }
  }
}
</style>