<template>
  <video autoplay muted loop playsinline preload="metadata">
    <source :src="value" type="video/mp4" />
  </video>
</template>

<script lang="ts" setup>
defineProps<{ value: string }>();
</script>

<style>

</style>