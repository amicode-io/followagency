<template>
  <div>
    <svg style="display: none" xmlns="http://www.w3.org/2000/svg">
      <symbol id="svg-diamond" viewBox="0 0 75 75">
        <path
          d="M52 34C37 32 40 10 38 0h-2c-4 35 0 33-36 37v2c35 3 33 0 37 36h1c4-35 1-33 37-37v-2l-23-2Z"
        />
      </symbol>
      <symbol id="svg-cloud" viewBox="0 0 713 599">
        <path
          fill="#fff"
          stroke="#000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          style="stroke-width: var(--fo-stroke-width)"
          vector-effect="non-scaling-stroke"
          d="M3 292c-5-37 19-70 42-86 29-21 59-19 69-19-12-51-7-105 45-132 57-29 128-11 171 33 15-53 61-99 119-82 56 16 65 71 65 122 58-31 134-35 178 23 41 54 10 122-46 150 50 38 75 110 28 161-39 42-104 32-144-3-10 58-30 117-93 134-65 17-110-33-138-85-43 50-115 62-168 19-46-37-56-102-22-151-12-2-32-6-52-19-15-9-48-29-54-65Z"
        />
      </symbol>
    </svg>

    <NuxtRouteAnnouncer />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const device = useDevice();

onMounted(async () => {
  if (device.isDesktop) {
    // Dynamically import Lenis only on desktop
    const { default: Lenis } = await import('lenis');

    // Initialize Lenis
    const lenis = new Lenis({
      autoRaf: true,
    });
  }
});
</script>

<style lang="css">
html.lenis,
html.lenis body {
  height: auto;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: clip;
}

.lenis.lenis-smooth iframe {
  pointer-events: none;
}
</style>