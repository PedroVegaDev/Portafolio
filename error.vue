<script setup lang="ts">
useHead({
  title: 'Página no encontrada',
  bodyAttrs: {
    class: 'bg-gray-100 text-zinc-900 dark:bg-zinc-950 dark:text-gray-100'
  }
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
  <section class="text-center p-12">
    <template v-if="props.error?.statusCode === 404">
      <h1 class="text-4xl font-semibold mb-2">Ooops.. Error 404</h1>
      <h2 class="text-2xl mb-5">
        Lo sentimos, pero la página que busca no existe.
      </h2>
    </template>
    <h1 class="text-4xl mb-5" v-else>Ha ocurrido un error.. 😥</h1>
    <button
      class="border border-zinc-900 px-4 py-1 rounded-md"
      @click="handleError"
    >
      Volver al Inicio
    </button>
  </section>
</template>
