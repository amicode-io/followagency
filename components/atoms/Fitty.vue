<template>
  <div ref="fittyEl" class="fitty">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import fitty from 'fitty';

const fittyEl: Ref<HTMLElement | null> = useTemplateRef('fittyEl');

interface Props {
  minSize?: number;
  maxSize?: number;
}

const { minSize = 16, maxSize = 640 } = defineProps<Props>();

onMounted(() => {
  fitty(fittyEl.value as HTMLElement, {
    minSize,
    maxSize,
  })
})
</script>