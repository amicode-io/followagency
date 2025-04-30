<template>
  <section
    :id="id ? id : uid"
    class="m-socialmedia"
    aria-label="Social media"
    :class="{'is-dragging': isDragging}"
    >
    <HumbleScroll animation="fade up blur slow" :once="true">
      <Splide :options="splideOptions" :aria-label="title" v-on="splideEvents">
        <SplideSlide v-for="(item, index) in items" :key="id">
            <AtomsPhone :item :index />
        </SplideSlide>
      </Splide>
    </HumbleScroll>
  </section>
</template>

<script setup lang="ts">
import type { SocialItem } from '~/models/SocialItem';

import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

const isDragging = ref(false)

const startMove = (text = '', e) => {
  isDragging.value = true;
}

const finishMove = (text = '', e) => {
  isDragging.value = false;
}

const splideEvents = ref({
  "splide:drag": (e) => startMove('drag', e),
  "splide:dragged": (e) => finishMove('dragged', e),
  "splide:move": (e) => startMove('move', e),
  "splide:moved": (e) => finishMove('moved', e),
  "splide:scroll": (e) => startMove('scroll', e),
  "splide:scrolled": (e) => finishMove('scrolled', e),
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
  pagination: false,
})

interface Props {
  id: string;
  title: string;
  items: SocialItem[];
};

const uid = useId();
const { id = "" } = defineProps<Props>();
</script>

<style lang="scss" scoped>
.m-socialmedia {
  position: relative;
  --item-scale: 1;
  --item-multiplier: 1;
  --item-scale-lg: 1.3;
  --item-scale-md: 1.1;

  &.is-dragging {
    --item-scale-lg: 1;
    --item-scale-md: 1;
    --item-shadow: none;
  }

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

  ::v-deep(.splide__list) {
    height: calc(var(--width) * 1167/579 * 1.3);
    --width: clamp(15rem, 12.333rem + 8.889vw, 23rem);
  }

  ::v-deep(.splide__slide) {
    display: flex;
    align-items: center;
    justify-content: center;

    &.is-active {
      --item-scale: var(--item-scale-lg, 1);
      --item-shadow: rgba(0, 0, 0, 0.5) 0 0 1rem;
      z-index: 10;
    }

    &.is-prev,
    &.is-next {
      --item-scale: var(--item-scale-md, 1);
      --item-delay: .2s;
    }
  }
}
</style>