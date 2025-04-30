<template>
  <HumbleScroll
    class="c-title"
    :class="`c-title--${size}`"
    :element="is"
    animation="fade up"
    :once="true"
    innerClass="c-title__inner"
    innerElement="span"
  >
    <span class="c-title__text">
      {{ title }}
    </span>

    <span class="c-title__deco">
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

    <slot />
  </HumbleScroll>
</template>

<script setup>
const props = defineProps({
  is: {
    type: String,
    default: "div",
  },
  title: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: 'normal',
  },
});
</script>

<style lang="scss" scoped>
@import "rfs/scss";

.c-title {
  text-align: center;
  font-family: var(--font-accent);
  pointer-events: none;
  user-select: none;
  margin: 0 auto;

  @include rfs(2.25rem);

  &--large {
    @include rfs(5rem);

    &:first-child {
      @include rfs(5rem, margin-block-start);
    }

    &:not(:last-child) {
      margin-bottom: 1em;
    }
  }

  &:not(:last-child) {
    margin-bottom: 2em;
  }

  :deep(.c-title__inner) {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25em;
  }

  &__text {
    position: relative;
    display: block;
    padding-inline: 1em;
  }

  &__deco {
    height: 0.75em;
    position: relative;
    display: inline-flex;
    width: 0;
    transition: width 0.5s ease;

    &::before {
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
  }

  .u-svg {
    display: block;
    width: 0.75em;
    height: auto;
    position: absolute;
    inset-block-end: 50%;

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

.hs-visible .c-title__deco {
  width: 100%;
}
</style>
