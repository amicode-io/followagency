<template>
  <HumbleScroll
    animation="fade up"
    :once="true"
    :variables="{ delay: `${index * 100}ms`}"
    :class="`
      m-grid-item--${index}
      m-grid-item--${type}
    `"
    innerClass="m-grid-item m-grid-item__inner"
    >
    <a
      v-if="isLink"
      :href="url"
      >
      <component :is :value />
    </a>
    <component v-else :is :value />
  </HumbleScroll>
</template>

<script lang="ts" setup>
import { GridItemType } from '~/models/GridItem';
import type { GridItem } from '~/models/GridItem';

interface GridItemProps extends GridItem {
  index: number;
  is: any;
}

const { type = '', url = '' } = defineProps<GridItemProps>();
const isLink = computed(() => ((type === GridItemType.GridImage || type === GridItemType.GridText) && url !== ""));
</script>

<style>

</style>