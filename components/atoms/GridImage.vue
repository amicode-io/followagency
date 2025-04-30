<template>
  <img :src="value" alt="" loading="lazy" />
</template>

<script lang="ts" setup>
defineProps<{ value: string }>();
</script>

<style>

</style>