<script setup>
import MenuItem from "@/components/atoms/MenuItem.vue";

defineProps({
  menu: {
    type: Array,
  },
});
</script>

<template>
  <nav v-if="menu.length" class="m-nav" aria-label="Menu">
    <HumbleScroll
      v-for="({label, target}, index) in menu"
      :key="target"
      animation="zoom-in fade up fast"
      :variables="{ delay: `${(index + 1) * 100}ms`}"
    >
      <MenuItem :label :target />
    </HumbleScroll>
    <slot />
  </nav>
</template>

<style lang="scss" scoped>
@import "rfs/scss";

.m-nav {
  @include rfs(8rem, "margin-block");
}
</style>
