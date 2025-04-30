<template>
  <main
    class="main main--default"
    :class="{ 'main--cursor': isCustomCursor }"
    >
    <LayoutHeader />
    <slot />
    <LayoutFooter />

    <AtomsCursor v-if="isCustomCursor" />
  </main>
</template>

<script setup>
const isCustomCursor = ref(false);

onMounted(() => {
  if (matchMedia('(hover:hover)').matches) {
    isCustomCursor.value = true;
  }
});
</script>