<template>
  <div>

    <div
        class="m-flipster__item"
        :style="`--n: ${index}`"
      >
        <template v-if="item.type === 'image'">
          <img :src="item.value" alt="" loading="lazy" />
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
            <source :src="item.value" type="video/mp4" />
          </video>
        </template>
      </div>
  </div>
</template>

<script lang="ts" setup>
import type { SocialItem } from '~/models/SocialItem';

defineProps<{
  item: SocialItem;
  index: number;
}>();
</script>

<style lang="scss" scoped>
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
  transform-origin: center center;

  transform: scale(calc(var(--item-scale) * var(--item-multiplier)));
  transition-delay: var(--item-delay, 0);
  transition: transform 0.2s ease-in-out;

  filter: drop-shadow(var(--item-shadow, none));
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

  clip-path: inset(0% round 2.6rem);
  object-fit: cover;
  -webkit-user-drag: none;
  user-select: none;
  pointer-events: none;
  inline-size: calc(100% - var(--right-calc) - var(--left-calc));
  block-size: calc(100% - var(--top-calc) - var(--bottom-calc));
  position: absolute;
  inset: var(--top-calc) var(--right-calc) var(--bottom-calc) var(--left-calc);
}

@media (max-width: 768px) {
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

  clip-path: inset(0% round 1.8rem); /* Mniejszy zaokrąglony prostokąt na urządzeniach mobilnych */
  object-fit: cover;
  -webkit-user-drag: none;
  user-select: none;
  pointer-events: none;
  inline-size: calc(100% - var(--right-calc) - var(--left-calc));
  block-size: calc(100% - var(--top-calc) - var(--bottom-calc));
  position: absolute;
  inset: var(--top-calc) var(--right-calc) var(--bottom-calc) var(--left-calc);
    
  }
}
</style>
