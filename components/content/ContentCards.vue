

<script lang="ts" setup>
import { gsap } from 'gsap'

import type { CardItem, CardTween } from '~/models/CardItem';

interface Props {
  id?: string;
  cards?: CardItem[];
};

const uid = useId();
const { id = "", cards = [] } = defineProps<Props>();

const cardsTween = ref();
cardsTween.value = cards.map((el: CardItem): CardTween => ({ number: el.number, tweened: 0 }))

const sprintf = (template: string, value: number): string => template.replace(/%d/g, value.toFixed(0));

const onIntersect = (index: number, isIntersecting: boolean): void => {
  if (isIntersecting) {
    gsap.to(
      cardsTween.value[index],
      {
        duration: 2,
        tweened: Number(cardsTween.value[index].number),
        delay: index * 0.1,
      }
    )
  }
}
</script>

<template>
  <section :id="id || uid" class="m-cards">
    <div class="container">
      <div class="m-cards__wrapper">
        <HumbleScroll
          v-for="({ text, number }, index) in cards"
          animation="zoom-in fade up fast"
          :once="true"
          :variables="{ delay: `${(index + 1) * 100}ms`}"
          @intersecting="(isIntersecting) => onIntersect(index, isIntersecting)"
          >
          <article :class="`element c-card c-card--${index + 1}`">
            <p
              class="element__inner"
              v-html="sprintf(text, cardsTween[index]?.tweened || 0.01)"
              :style="`--strong-width: ${String(number).length}ch`"
            />
          </article>
        </HumbleScroll>
      </div>

      <svg
        class="m-cards__cloud m-cards__cloud--1"
        width="713"
        height="599"
        role="presentation"
        focusable="false"
        >
        <use xlink:href="#svg-cloud"/>
      </svg>
      <svg
        class="m-cards__cloud m-cards__cloud--2"
        width="713"
        height="599"
        role="presentation"
        focusable="false"
        >
        <use xlink:href="#svg-cloud"/>
      </svg>
      <svg
        class="m-cards__cloud m-cards__cloud--3"
        width="713"
        height="599"
        role="presentation"
        focusable="false"
        >
        <use xlink:href="#svg-cloud"/>
      </svg>
    </div><!-- / .container -->
  </section><!-- / .m-cards -->
</template>

<style lang="scss" scoped>
::v-deep(.hs-visible) {

  &:hover {
    transform: scale(1.1);
    transition: all .2s;
  }
}

.c-card {
  --shadow-bg: #ddd;
  --aspect-ratio: 217 / 266;

  font-family: var(--font-accent);
  font-weight: 400;
  font-style: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: .875rem;
  line-height: 1.2;
  text-align: center;
  position: relative;
  z-index: 1;

  @media (width >= 50rem) {
    font-size: 1.5rem;
  }

  ::v-deep(strong) {
    font-weight: 700;
    font-size: 3em;
    font-size: clamp(2.5em, 5vw + 2em, 3.5em);
    font-variant-numeric: tabular-nums;
    line-height: 1.2;
  }

  > p {
    margin: 0;
    padding: 1em;
    background-image: var(--background-image);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > ::v-deep(span),
    > ::v-deep(strong) {
      display: block;
      width: 100%;
      text-align: center;
    }

    > ::v-deep(strong) {
      width: var(--strong-width, 100%);
    }
  }
}

// variations
.c-card--1 {
  --shadow-bg: #8781bd;
  --background-image: linear-gradient(-135deg, #fdc689 60%, #9489b7 100%);
  --aspect-ratio: 1 / 0.9;
}

.c-card--2 {
  --shadow-bg: #1cbbb4;
  --background-image: linear-gradient(-135deg, #3db6b3 0%, #f29bad 80%);

  transform: rotate(5deg);
  --aspect-ratio: 1 / 1.1;
}

.c-card--3 {
  --shadow-bg: #fb9aad;
  --background-image: linear-gradient(-135deg, #fb9aad 0%, #9384bb 80%);

  transform: rotate(-10deg) translate(1rem, 0rem);

  @media (width >= 50rem) {
    transform: rotate(-10deg) translate(-2rem, 3rem);
  }
}

.c-card--4 {
  --shadow-bg: #fffcd5;
  --background-image: linear-gradient(
    -45deg,
    #fb9aad 0%,
    #fdc589 50%,
    #fb9aad 100%
  );
  --aspect-ratio: none;

  transform: rotate(-10deg);
}

.c-card--5 {
  --shadow-bg: #fdc689;
  --background-image: radial-gradient(
    circle at center,
    #f3c68b 0%,
    #23bbb3 100%
  );

  transform: rotate(3deg) translateY(2rem);
}

.c-card--6 {
  --shadow-bg: #fff799;
  --background-image: linear-gradient(to bottom, #f0627d 0%, #fde696 100%);

  z-index: 6;
}

.m-cards {
  --shadow-distance: -0.7rem;
  --card-width: 14rem;
  --card-gap: 3rem;

  overflow: hidden;
  padding-top: 3rem;
  padding-bottom: calc(3rem + -1 * var(--shadow-distance));

  > .container {
    position: relative;
    width: calc((3 * var(--card-width) + 2 * var(--card-gap)) * 1.2)
  }

  &__wrapper {
    position: relative;
    z-index: 2;

    position: relative;
    display: grid;
    grid-template-columns: repeat(2, minmax(35vw, var(--card-width)));
    justify-content: center;
    gap: 0 var(--card-gap);
    min-height: 800px;

    @media (width < 50rem) {
      grid-auto-rows: min-content;
    }

    @media (width >= 50rem) {
      gap: 8rem var(--card-gap);
      grid-template-columns: repeat(3, minmax(min-content, var(--card-width)));
    }
  }

  &__butterfly {
    position: absolute;
    height: auto;
    width: 15%;
    left: 85%;
    bottom: 0;
  }

  &__cloud {
    position: absolute;
    height: auto;

    &--1 {
      width: 25%;
      top: 0;
      right: 95%;
    }

    &--2 {
      width: 70%;
      bottom: -5%;
      right: 40%;
      left: auto;
    }

    &--3 {
      width: 19%;
      top: 20%;
      right: -2rem;
    }

    &--4 {
      width: 60%;
      top: -12%;
      left: -25%;
      z-index: -2;
    }
  }
}
</style>