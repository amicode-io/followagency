<template>
   <div class="c-cursor" :style="`transform: translate(${x}px, ${y}px)`">
    <svg
      class="c-cursor__svg u-svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 122 137"
      role="presentation"
      focusable="false"
      fill="none"
    >
      <path
        fill="currentColor"
        fill-rule="evenodd"
        stroke="#000"
        stroke-width="2"
        d="M111 55c10 6 10 20 0 26l-86 50c-10 6-23-1-23-13V18C2 6 15-1 25 5l86 50Z"
      />
    </svg>

    <img :src="cursorPath" class="c-cursor__icon" alt="cursor" />
  </div>
</template>

<script lang="ts" setup>
// Cursor Movements
const {x, y} = useMouse();

// Create a reactive state and set default value
const randomNumber = useState(
  "counter",
  () => Math.floor(Math.random() * 18) + 1
);
const cursorPath = computed(
  () => `/cursors/flw_www_kursory${randomNumber.value}.png`
);
</script>

<style lang="scss">
.main.main--cursor {
  cursor: none;

  *,
  &::before,
  &::after {
    cursor: none;
  }
}
</style>

<style lang="scss" scoped>
.c-cursor {
  --size: 8rem;

  pointer-events: none;
  color: rgb(240 97 125 / 100%);
  background: none;
  width: var(--size);
  aspect-ratio: 1;
  margin-left: calc(-1 / 2 * var(--size));
  margin-top: calc(-1 / 2 * var(--size));

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  left: 0;

  max-width: 25%;
  height: auto;
  transform-origin: 50%;
  border: 0;
  appearance: none;

  will-change: transform;

  z-index: 1000;

  &__icon,
  &__svg {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
    height: auto;
    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  &__icon {
    width: calc(0.8 * var(--size));
    max-width: 4rem;
    transform: translate(0, 0);
  }

  &__svg {
    opacity: 0;
    width: 0;
  }
}

:has(.m-video:hover) .c-cursor {
  outline-width: 3px;

  &__icon {
    opacity: 0;
  }

  &__svg {
    opacity: 1;
    width: calc(0.8 * var(--size));
  }
}

:has(.m-video--full.is-active):hover .c-cursor {
  &__icon,
  &__svg {
    opacity: 0;
    width: 0;
  }
}
</style>