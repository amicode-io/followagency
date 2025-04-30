<template>
  <div class="woof">
    <span>
      <HumbleScroll
        animation="zoom-in fade up right blur 2xl"
        :once="true"
        element="span"
        inner-element="span"
      >
        <img
          class="woof__paw"
          src="/contact-paw.png"
          width="42"
          height="48"
          alt=""
        />
        Woof, woof
      </HumbleScroll>

      <HumbleScroll
        animation="zoom-in fade up right blur"
        :once="true"
        style="--hs-delay: 0.2s"
        element="span"
        inner-element="span"
      >
        <img
          class="woof__arrow"
          src="/contact-arrow.svg"
          width="434"
          height="417"
          alt=""
        />
      </HumbleScroll>
    </span>

    <HumbleScroll animation="fade up" :once="true" style="--hs-delay: 0.4s">
      <a href="mailto:kontakt@followagency.pl" class="woof__email">
        kontakt@followagency.pl
      </a>
    </HumbleScroll>
  </div>
</template>

<style lang="scss" scoped>
.woof {
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  gap: 1rem;

  @media (width >= 60rem) {
    font-size: 2.125rem;
    align-items: flex-end;
  }

  > span {
    text-transform: uppercase;
    display: inline-flex;
    flex-direction: column;
    position: relative;
    align-items: flex-start;
    transform: rotate(-17deg);

    @media (width < 50rem) {
      translate: 20% -.5rem;
    }
  }

  > a {
    font-size: 1.1em;
    font-weight: bold;
    color: var(--fo-black);

    &:not(:first-child) {
      margin-top: 1rem;
    }
  }
}

.woof__paw {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-100%, -100%);
}

.woof__arrow {
  margin-top: 0.25em;
  width: 40%;
  height: auto;
  transform: translate(45%, 0) rotate(-10deg);
}

.woof__email {
  color: inherit;
}
</style>
