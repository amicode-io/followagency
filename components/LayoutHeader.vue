<template>
  <header class="header">
    <div class="container">
      <div class="header__container">
        <div class="header-logo" :style="`--size: ${headerRange}`">
          <NuxtLink to="/" class="header-logo__link">
            <svg
              class="header-logo__svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 346 81"
              width="346"
              height="81"
            >
              <defs>
                <linearGradient
                  id="followLogoA"
                  x1="30.8"
                  x2="23.9"
                  y1="22.4"
                  y2="-.4"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#fff" />
                  <stop offset=".1" stop-color="#d8d8d8" stop-opacity=".8" />
                  <stop offset=".5" stop-color="#3e3e3e" stop-opacity=".2" />
                  <stop offset=".7" stop-opacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M68 27 45 9 34 0h-1l-1 1v9c0-3-4-6-6-8V1h-1l-1 1v15l-2 1c-2 1-4 4-4 7s-3 6-5 7L0 39c0 6 6 11 13 11v2c0-1 1-2 3-2h2l-2 2v2h11c3 0 5 2 5 5v22c0-5 11-13 14-15 2-3 11-9 11-14v5c3-3 11-8 11-13v4a13 13 0 0 0 0-21Z"
              />
              <path fill="#1a1a1a" d="M57 57z" />
              <path
                fill="url(#followLogoA)"
                d="M32 10c0-3-4-6-6-8V1h-1l-1 1v15l8-4v-3Z"
              />
              <path
                fill="#f1627e"
                d="M18 50h-2c-2 0-3 1-3 2v-2l-2 2v7a2 2 0 1 0 5 0v-7l2-2Z"
              />
              <path
                d="M97 31v21c4 0 7-4 7-8v-2h8v-6h-8v-6h8v-6h-8c-4 0-7 3-7 7Zm49-7c-3 0-7 1-9 3-3 3-5 7-5 11 0 8 6 14 14 14 4 0 7-1 10-4a14 14 0 0 0-10-24Zm0 21c-4 0-7-3-7-7s3-8 7-8 8 4 8 8-4 7-8 7Zm43-14c0-4-4-7-8-7v28h16v-6h-8V31Zm35 0c0-4-4-7-8-7v28h16v-6h-8V31Zm41-7c-4 0-7 1-10 3-3 3-4 7-4 11 0 8 6 14 14 14 4 0 7-1 9-4a14 14 0 0 0-9-24Zm0 21c-4 0-7-3-7-7s3-8 7-8 7 4 7 8-3 7-7 7Zm59-21v22h-6V31c0-4-4-7-8-7v22h-6V31c0-4-3-7-7-7v28h34V31c0-4-3-7-7-7Zm14 1h1v3h1v-3h1v-1h-3v1zm7-1-1 2-1-2h-1v4h1v-2 1h1l1-1v2h1v-4h-1z"
              />
            </svg>
          </NuxtLink>

          <div class="header-logo__below">
            <img
              class="header-logo__arrow"
              src="/contact-arrow.svg"
              width="434"
              height="417"
              alt=""
            />

            <div class="header-logo__resize">
              <label for="logo-resize">Powiększ logo</label>
              <input
                id="logo-resize"
                class="header-logo__range"
                type="range"
                v-model="headerRange"
                @change="headerRange = 5"
                min="0"
                max="50"
                step="1"
              />
            </div>
          </div>
        </div>

        <button v-if="false" @click="toggleMenu" class="header-toggle btn" type="button">
          <span class="header-toggle__label">Menu</span>
          <span class="header-toggle__icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      <div class="header__hidden">
        <div class="container">
          <ContentMenu
            class="header__menu"
            aria-label="Primary Navigation"
            :menu
          />

          <div class="header__bottom">
            <a href="https://www.linkedin.com/company/follow-sm" target="_blank" class="header__external">LinkedIn</a>
            <ContactWoof class="header__woof" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import ContactWoof from "./atoms/ContactWoof.vue";
import ContentMenu from "./content/ContentMenu.vue";

const headerRange = ref(5);
const menu = ref([
  {
    label: "Folio",
    target: "#",
  },
  {
    label: "Praca",
    target: "#",
  },
  {
    label: "Pjeski",
    target: "#",
  },
  {
    label: "Kontakt",
    target: "#",
  },
]);

const toggleMenu = () => {
  document.body.classList.toggle("is-menu-open");
  document.documentElement.classList.toggle("is-overflow-hidden");
};
</script>

<style lang="scss" scoped>
.header__container {
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 2rem;

  ::v-deep(.header-logo) {
    transform: translateX(3%)
  }
}

.header__woof {
  margin-top: 8rem;

  @media (width >= 60rem) {
    margin-top: 0;
  }
}
</style>
