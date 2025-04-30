<template>
  <footer class="footer">
    <svg
      class="footer__bg"
      xmlns="http://www.w3.org/2000/svg"
      width="2199"
      height="615"
      viewBox="0 0 2199 615"
    >
      <path
        fill="#fff"
        fill-rule="evenodd"
        stroke="#000"
        stroke-width="2"
        style="stroke-width: var(--fo-stroke-width)"
        vector-effect="non-scaling-stroke"
        d="M1346 600c51-10 830 36 844-16s-10-504-42-508c-266-32-498 94-508 203-93-45-283-41-343 56-48-60-96-51-160-9-52-125-197-171-332-81C790 170 577-6 109 6-3 49-20 510 40 586c-112 10 1244 27 1306 14Z"
      />
      <path
        fill="#fff"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        style="stroke-width: var(--fo-stroke-width)"
        vector-effect="non-scaling-stroke"
        d="M1280 130c-1-7 4-14 9-18 6-4 12-4 14-4-2-11-1-22 10-27 12-6 26-3 35 7 4-11 13-21 25-18 12 4 14 15 14 26 12-7 28-7 37 5 9 11 2 25-9 31 10 8 15 23 5 34-8 9-21 6-30-1-2 12-6 25-19 28-14 4-23-7-29-18-9 11-24 13-35 4-10-7-12-21-5-31l-11-4c-3-2-10-6-11-14Z"
      />
    </svg>

    <div class="container">
      <div class="footer__main">
        <div class="footer__start">

          <NuxtLink to="/">
            <svg
              class="footer__logo"
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

          <nav v-if="false" class="footer__nav" aria-label="Footer Navigation">
            <a href="#">Folio</a>
            <a href="#">Pracka</a>
            <a href="#">Pjeski</a>
            <a href="#">Kontakt</a>
          </nav>

          <NuxtLink to="/portfolio" class="footer__hidden">
            <span class="u-visually-hidden">Strefa tylko dla klientów</span>
            <img src="/contact-hidden.png" width="384" height="149" alt="" />
          </NuxtLink>
        </div>
        <div class="footer__contact">
          <ContactWoof />

          <address>
            Chocimska 35/3<br />
            00-791 Warszawa
          </address>
        </div>
      </div>
      <div class="footer__end">
        <a href="https://www.linkedin.com/company/follow-sm" target="_blank" class="footer__external">LinkedIn</a>
        <span>&copy; 2025 Follow Agency, All Rights Reserved.</span>
        <a href="#top" class="footer__top">Go to the top</a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import ContactWoof from "./atoms/ContactWoof.vue";
</script>

<style></style>
