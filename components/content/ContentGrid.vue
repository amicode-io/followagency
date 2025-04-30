<template>
	<section
    :id="id || uid"
    :class="`m-grid m-grid--${type}`"
    :aria-label="title"
    >

    <div class="m-grid-items container">
      <AtomsGridItem
        v-for="(item, index) in items"
        :index="index + 1"
        :is="components[item.type]"
        :type="item.type"
        :url="item?.url"
        :value="item.value"
        />
    </div>

    <div class="m-grid-bg" aria-hidden="true">
      <HumbleScroll :key="`anim1-${id || uid}`" :once="true" animation="reveal-left blur fast" class="w-100">
        <AtomsFitty>{{title}}</AtomsFitty>
      </HumbleScroll>

      <HumbleScroll
        :key="`anim2-${id || uid}`"
        animation="reveal-right blur fast"
        :once="true"
        :variables="{ delay: `300ms`}"
        class="w-100"
        >
        <AtomsFitty>{{title}}</AtomsFitty>
      </HumbleScroll>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { GridType } from '~/models/GridItem';

import type { GridItem } from '~/models/GridItem';
import type { ComponentType } from '~/models/ComponentType';

const components: ComponentType = {
  GridImage: resolveComponent('AtomsGridImage'),
  GridText: resolveComponent('AtomsGridText'),
  GridVideo: resolveComponent('AtomsGridVideo'),
};

interface Props {
  id?: string;
  title: string;
  type?: GridType;
  items: GridItem[];
};

const uid = useId();
const { id = "", type = GridType.TikTok } = defineProps<Props>();
</script>

<style lang="scss" scoped>
.m-grid {
  position: relative;
  overflow-x: clip;
  padding-block: 5vw;
  margin-block: clamp(5rem, 7vw, 10rem);

  + .m-grid {
    margin-block-start: calc(-5vw); // minimal value
  }
}

.m-grid-bg {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: var(--font-accent);
  line-height: 1;
  font-weight: 700;
  position: absolute;
  top: 1%;
  left: 0;
  width: 100%;
  z-index: -1;
  color: rgba(#fff, 0.2);
  text-align: center;

  @media (width >= 60rem) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  > div {
    line-height: 0.75;
    transform: translateY(-0.07em); // visual offset

    @media (width < 60rem) {
      &:nth-child(1) {
        display: none;
      }
    }
  }
}

.m-grid-items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  // grid-template-rows: repeat(10, 1fr);
  gap: 1rem;

  @media (width >= 60rem) {
    gap: 1.5rem;
    // grid-template-rows: repeat(4, 1fr);
    aspect-ratio: 976 / 598;
  }
}

::v-deep(.m-grid-item) {
  display: block;
  background-color: #ccc;
  border-style: solid;
  border-color: var(--fo-color-black, #000);
  border-width: var(--fo-border-width, 2px);
  border-radius: 1rem;
  overflow: hidden;
}

.m-grid-item--GridText {

  ::v-deep(.m-grid-item) {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background-color: transparent;
    border-color: transparent;
    font-family: var(--font-accent);
    font-weight: 400;
    font-style: normal;
  }

  ::v-deep(.m-grid-item__inner) {
    padding: 0.25rem;
    overflow: hidden;
    max-width: 50vw;
  }
}

::v-deep(.m-grid-item__inner) {

  &,
  // child elements
  > a,
  > video,
  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  video,
  img {
    object-fit: cover;
  }
}

// variations
.m-grid--TikTok {
  .m-grid-items {
    @media (width >= 60rem) {
      grid-template-columns:
        minmax(12rem, 4fr) minmax(6rem, 2fr) minmax(9rem, 3fr)
        minmax(6rem, 2fr);
    }
  }

  .m-grid-item {
    &--1 {
      grid-area: 7 / 1 / 11 / 3;
    }

    &--2 {
      grid-area: 5 / 1 / 7 / 2;
    }

    &--3 {
      grid-area: 5 / 2 / 7 / 3;
    }

    &--4 {
      grid-area: 1 / 1 / 2 / 2;
    }

    &--5 {
      grid-area: 2 / 1 / 5 / 2;
    }

    &--6 {
      grid-area: 1 / 2 / 3 / 3;
    }

    &--7 {
      grid-area: 3 / 2 / 5 / 3;
    }

    @media (width >= 60rem) {
      &--1 {
        grid-area: 1 / 1 / 5 / 2;
      }

      &--2 {
        grid-area: 1 / 2 / 3 / 3;
      }

      &--3 {
        grid-area: 3 / 2 / 5 / 3;
      }

      &--4 {
        grid-area: 1 / 3 / 2 / 4;
      }

      &--5 {
        grid-area: 2 / 3 / 5 / 4;
      }

      &--6 {
        grid-area: 1 / 4 / 3 / 5;
      }

      &--7 {
        grid-area: 3 / 4 / 5 / 5;
      }
    }
  }
}

.m-grid--Reels {
  .m-grid-bg > div {
    text-transform: uppercase;
  }

  .m-grid-items {
    @media (width >= 60rem) {
      grid-template-columns:
        minmax(6rem, 2fr) minmax(9rem, 3fr) minmax(6rem, 2fr)
        minmax(12rem, 4fr);
    }
  }

  .m-grid-item {
    &--1 {
      grid-area: 5 / 1 / 7 / 2;
    }

    &--2 {
      grid-area: 5 / 2 / 7 / 3;
    }

    &--3 {
      grid-area: 2 / 1 / 5 / 2;
    }

    &--4 {
      grid-area: 1 / 1 / 2 / 2;
    }

    &--5 {
      grid-area: 1 / 2 / 3 / 3;
    }

    &--6 {
      grid-area: 3 / 2 / 5 / 3;
    }

    &--7 {
      grid-area: 7 / 1 / 11 / 3;
    }

    @media (width >= 60rem) {
      &--1 {
        grid-area: 1 / 1 / 3 / 2;
      }

      &--2 {
        grid-area: 3 / 1 / 5 / 2;
      }

      &--3 {
        grid-area: 1 / 2 / 4 / 3;
      }

      &--4 {
        grid-area: 4 / 2 / 5 / 3;
      }

      &--5 {
        grid-area: 1 / 3 / 3 / 4;
      }

      &--6 {
        grid-area: 3 / 3 / 5 / 4;
      }

      &--7 {
        grid-area: 1 / 4 / 5 / 5;
      }
    }
  }
}
</style>