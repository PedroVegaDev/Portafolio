<script setup lang="ts">
useHead({
  title: 'Página no encontrada'
})

const props = defineProps({
  error: Object
})

const handleError = () => {
  console.clear()
  clearError({ redirect: '/' })
}
</script>

<template>
  <NuxtLayout>
    <section class="p-error">
      <div class="container">
        <h1 class="p-error__title" v-if="props.error?.statusCode === 404">
          Ooops.. Error 404
        </h1>
        <h1 class="p-error__title" v-else>Ha ocurrido un error.. 😥</h1>
        <h2 class="p-error__subtitle" v-if="props.error?.statusCode === 404">
          Lo sentimos, pero la página que busca no existe.
        </h2>
        <button class="btn" @click="handleError">Volver al Inicio</button>
      </div>
    </section>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.p-error {
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 640px) {
    font-size: 13px;
  }

  @media screen and (max-width: 460px) {
    font-size: 11px;
  }

  &__title {
    font-size: 3em;
  }

  &__subtitle {
    font-size: 1.2em;
    margin-bottom: 0.8rem;
  }
}
</style>
