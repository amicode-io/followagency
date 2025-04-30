<template>
  <section :id="id || uid" v-if="auth.isAuth" class="c-portfolio container">
    <div class="c-portfolio__deco c-portfolio__deco--1">
      <HumbleScroll animation="blur">
        <svg
          class="cloud c-portfolio__cloud"
          width="713"
          height="599"
          role="presentation"
          focusable="false"
        >
          <use xlink:href="#svg-cloud" />
        </svg>
      </HumbleScroll>
      <HumbleScroll animation="fade up">
        <div class="c-portfolio__text element">
          <div class="element__inner">
            <p>witaj w&nbsp;krainie pięknych kreacji</p>
          </div>
        </div>
      </HumbleScroll>
    </div>

    <div class="c-portfolio__relative">
      <div class="c-portfolio__wrap">
        <AtomsPortfolioItem v-for="{image, logo} in items" :image :logo />
      </div>

      <div class="c-portfolio__deco c-portfolio__deco--2">
        <HumbleScroll animation="blur">
          <svg
            class="cloud c-portfolio__cloud"
            width="713"
            height="599"
            role="presentation"
            focusable="false"
          >
            <use xlink:href="#svg-cloud" />
          </svg>
        </HumbleScroll>
        <HumbleScroll animation="fade up">
          <div class="c-portfolio__text element">
            <div class="element__inner">
              <p>mamy nadzieję, że było fajniutko</p>
            </div>
          </div>
        </HumbleScroll>
      </div>
    </div>

    <div class="c-portfolio__contact">
      <p>chcesz tutaj dołączyć?</p>

      <a href="mailto:kontakt@followagency.pl">
        KONTAKT

        <img
          class="c-portfolio__arrow"
          src="/contact-arrow.svg"
          width="434"
          height="417"
          alt=""
        />
      </a>
    </div>
  </section>
</template>

<script lang="ts" setup>
const auth = useAuth();

interface Props {
  id?: string;
  items: {image: string; logo: string}[];
}

const uid = useId();
const {id = "", items = []} = defineProps<Props>();
</script>

<style lang="scss" scoped>
@import "rfs/scss";

.c-portfolio {
  --max: 24rem;
  position: relative;
}

.c-portfolio__relative {
  position: relative;
}

.c-portfolio__deco {
  position: absolute;
  z-index: 1;

  display: inline-flex;
  width: 12rem;

  &--1 {
    top: 0;
    right: 30%;

    .c-portfolio__cloud {
      transform: translate(0%, -25%);
    }
  }

  &--2 {
    left: 0;
    bottom: 0;
  }
}

.c-portfolio__cloud {
  width: 25rem;
  max-width: none;
  height: auto;
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
}

.c-portfolio__text {
  max-width: 100%;
  transform: rotate(-10deg);

  --shadow-bg: #fffdd6;
  --border-radius: 2rem;

  > .element__inner {
    background-image: linear-gradient(to bottom, #f0627d 0%, #fde696 100%);

    padding: 1em 0.5em;
    font-size: 2rem;
    line-height: 1.3;
    text-align: center;
  }
}

.c-portfolio__wrap {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  justify-content: center;
  padding-top: var(--max);
  padding-bottom: var(--max);

  @include rfs(5rem, gap);

  @media (width >= 60rem) {
    padding-top: 0;
    grid-template-columns: repeat(4, minmax(10rem, 1fr));
  }
}

.c-portfolio__contact {
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @include rfs(5rem);
  @include rfs(10rem, padding-block);

  > a {
    color: inherit;
    position: relative;
    display: inline-flex;
    margin-top: 1rem;
    margin-right: 2rem;
    font-size: 0.875em;

    transform-origin: 100% 0;
    transform: rotate(-10deg);
  }

  .c-portfolio__arrow {
    position: absolute;
    left: calc(100% + 1em);
    top: 50%;
    transform: translate(-10%, -50%) rotate(28deg);

    height: 1.5em;
    width: auto;
  }
}
</style>
