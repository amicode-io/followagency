<template>
  <HumbleScroll animation="fade up" class="item" :once="true">
    <div class="portfolio-item element">
      <div class="portfolio-item__inner element__inner">
        <img :src="image" alt="" />
      </div>

      <div
        class="portfolio-logo element"
        :style="`--random: ${random.toFixed(0)}deg`"
      >
        <div class="element__inner">
          <img :src="logo" alt="" />
        </div>
      </div>
    </div>
  </HumbleScroll>
</template>

<script lang="ts" setup>
interface Props {
  image: string;
  logo: string;
}

const {image = "", logo = ""} = defineProps<Props>();

const random = computed(() => {
  return Math.random() * (12 - -12) + -12;
});
</script>

<style lang="scss" scoped>
.item {

  @media (width >= 60rem) {
    &:nth-child(4n + 2) .portfolio-item {
      transform: translateY(calc(var(--max) / 3));
    }

    &:nth-child(4n + 3) .portfolio-item {
      transform: translateY(var(--max));
    }

    &:nth-child(4n + 4) .portfolio-item {
      transform: translateY(calc(var(--max) / 2));
    }
  }
}

.portfolio-item {
  --shadow-bg: #fff69c;
  --aspect-ratio: 225 / 425;
  --border-radius: 2rem;

  > .element__inner > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.portfolio-logo {
  --shadow-bg: #fff69c;
  --aspect-ratio: auto;
  --border-radius: 2rem;

  width: auto;
  max-width: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -10%) rotate(var(--random, -10deg));

  > .element__inner {
    background-color: var(--fo-white);
    min-height: 6rem;
    padding: 1rem 2.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    > img {
      max-width: 100%;
      min-width: 6rem;
      height: auto;
    }
  }
}
</style>
