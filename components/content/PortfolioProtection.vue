<template>
  <div v-if="!auth.isAuth" class="protection">
    <div class="protection__inner container">
      <div class="element element--inner">
        <div class="element__inner">
          <form
            class="protection__form"
            @submit.prevent="onSubmit"
          >
            <label for="portfolio-password">Wpisz hasło</label>
            <input
              id="portfolio-password"
              type="password"
              v-model="password"
              placeholder="Wpisz hasło"
            />
            <button type="submit">Wyślij</button>
          </form>
        </div>
      </div>

      <div v-if="!auth.isAuth && isSubmitted" class="element element--error">
        <div class="element__inner">Brak dostępu!</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const auth = useAuth();

const password: Ref<string> = ref("");
const isSubmitted: Ref<boolean> = ref(false);

const onSubmit = async (event: Event) => {
  isSubmitted.value = false;

  const res = await auth.verify(password.value);

  isSubmitted.value = true;
  console.log({res});
};
</script>

<style lang="scss" scoped>
@import "rfs/scss";

.protection__form {
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  label {
    display: none;
  }

  input,
  button {
    @include rfs(3rem);

    appearance: none;

    padding: .5rem;
    border-color: var(--fo-black, #000);
    border-width: var(--fo-border-width, 2px);
    border-style: solid;
  }

  input {
    background-color: rgba(255, 255, 255, 0.5);
    flex: 1 1 auto;
    width: auto;
    min-width: 2rem;
  }

  button {
    background-color: #fdc689;
    flex: 0 0 auto;
  }
}

.element--inner {
  --shadow-bg: #fdc689;

  .element__inner {
    background-image: radial-gradient(
      circle at center,
      #f3c68b 0%,
      #23bbb3 100%
    );
  }
}

.element--error {
  --shadow-bg: red;

  margin-top: 1rem;

  .element__inner {
    padding: 1rem;
    font-size: 1.5rem;
  }
}


</style>
