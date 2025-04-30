<template>
  <section :id="id || uid" class="m-logos">
    <div class="wave-container" :style="{ height: containerHeight + 'px' }">
      <!-- SVG Sine Wave -->
      <svg class="wave-svg" :width="waveWidth" :height="containerHeight">
        <path :d="wavePath" stroke="black" fill="none" stroke-width="2" />
      </svg>

      <!-- Logos Moving Along Sine Wave -->
      <img
        v-for="(item, index) in items"
        :key="index"
        :src="item.src"
        class="wave-item"
        :style="item.style"
        alt="Logo"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import type { LogoItem } from "~/models/LogoItem";

interface Props {
  id?: string;
  logos: LogoItem[];
}

const uid = useId();
const { id = "", logos = [] } = defineProps<Props>();

const baseAmplitude = 40;
const baseSpeed = ref(3);
const speed = ref(baseSpeed.value);
const waveFrequency = ref(0.004);
const minGap = ref(150);
const randomnessFactor = 0.1;

const items = ref<{ src: string; x: number; width: number; amplitude: number; style: Record<string, string> }[]>([]);
const time = ref(0);
const containerHeight = ref(0);
const wavePath = ref("");
const waveWidth = ref(1024);
let animationFrame: number;
let resizeObserver: ResizeObserver | null = null;
let lastWindowWidth = 0;

const getRandomAmplitude = (isSmallScreen: boolean) => {
  return (isSmallScreen ? baseAmplitude * 1.2 : baseAmplitude) * (1 + (Math.random() * 2 - 1) * randomnessFactor);
};

const initializeItems = () => {
  items.value = [];
  let totalWidth = Math.max(window.innerWidth, 1024);
  let x = 0;
  let index = 0;
  const isSmallScreen = window.innerWidth < 800;
  const adjustedAmplitude = isSmallScreen ? baseAmplitude * 1.2 : baseAmplitude; // Ensuring wave is visible

 while (x < totalWidth * 1.7) { // <-- Spowoduje, że więcej obrazków zostanie wygenerowanych
    let logo = logos[index % logos.length];
    let scaledWidth = isSmallScreen ? logo.width * 0.5 : logo.width;

    items.value.push({
      src: logo.src,
      x,
      width: scaledWidth,
      amplitude: getRandomAmplitude(isSmallScreen),
      style: {
        width: `${scaledWidth}px`,
        height: "auto",
        transform: `translate3d(${x}px, 0px, 0px) rotate(0deg)`,
        willChange: "transform",
      },
    });

    x += scaledWidth + minGap.value;
    index++;
  }

  containerHeight.value = adjustedAmplitude * 2.5;
  waveWidth.value = totalWidth;
};

const generateWavePath = () => {
  let path = `M 0 ${containerHeight.value / 2} `;
  const isSmallScreen = window.innerWidth < 800;
  const adjustedAmplitude = isSmallScreen ? baseAmplitude * 1.2 : baseAmplitude;

  for (let x = 0; x < waveWidth.value; x += 10) {
    const y = Math.sin((x + time.value) * waveFrequency.value) * adjustedAmplitude + containerHeight.value / 2;
    path += `L ${x} ${y} `;
  }
  wavePath.value = path;
};

const animate = () => {
  time.value += 1;

  const isSmallScreen = window.innerWidth < 800;
  const adjustedAmplitude = isSmallScreen ? baseAmplitude * 1.2 : baseAmplitude;

  items.value.forEach((item) => {
    item.x -= speed.value;

    if (item.x + item.width < 0) {
      let maxX = Math.max(...items.value.map((i) => i.x + i.width));
      item.x = maxX + minGap.value;
      item.amplitude = getRandomAmplitude(isSmallScreen);
    }

    const y = Math.sin((item.x + time.value) * waveFrequency.value) * adjustedAmplitude;
    const slope = Math.cos((item.x + time.value) * waveFrequency.value) * adjustedAmplitude * waveFrequency.value;
    const angle = Math.atan(slope) * (180 / Math.PI); // Corrected rotation

    item.style.transform = `translate3d(${item.x}px, ${y}px, 0px) rotate(${angle}deg)`;
  });

  generateWavePath();
  animationFrame = requestAnimationFrame(animate);
};

const handleResize = () => {
  const currentWidth = window.innerWidth;
  if (currentWidth === lastWindowWidth) return;
  lastWindowWidth = currentWidth;

  minGap.value = Math.min(window.innerWidth / 10, 150);
  waveWidth.value = window.innerWidth;

  if (typeof window !== "undefined") {
    speed.value = baseSpeed.value / window.devicePixelRatio;
  }

  initializeItems();
};

onMounted(() => {
  handleResize();
  animate();

  if (typeof window !== "undefined" && "ResizeObserver" in window) {
    resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(document.body);
  }
});

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrame);
  if (resizeObserver) resizeObserver.disconnect();
});
</script>

<style scoped lang="scss">
@import "rfs/scss";
.m-logos {
  @include rfs(8rem, "margin-block");
}

.wave-container {
  position: relative;
  width: 100%;
  transform: translateY(-40%);
  white-space: nowrap;
  will-change: transform;
}

.wave-svg {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: 1;
  pointer-events: none;
  opacity: 0;
}

.wave-item {
  position: absolute;
  bottom: 0;
  will-change: transform;
  z-index: 2;
}
</style>