<script setup lang="ts">
useHead({
  title: 'Portafolio - Pedro Vega',
  htmlAttrs: {
    class: 'scroll-smooth'
  },
  bodyAttrs: {
    class: 'bg-gray-100 text-zinc-900 dark:bg-zinc-950 dark:text-gray-100'
  }
})

const router = useRouter()
const { isTopScroll } = useTopScroll()
const goUp = () => {
  window.scrollTo({
    top: 0
  })
  router.push('/')
}
</script>

<template>
  <main class="max-w-[650px] mx-auto">
    <TheNavbar />
    <HeroSection />
    <AboutSection id="sobre-mi" />
    <ProyectsSection id="proyectos" />
    <button
      class="fixed flex justify-center items-center w-10 h-10 rounded-full bottom-8 right-8 border transition-opacity duration-300"
      :class="isTopScroll ? 'opacity-0' : ''"
      @click="goUp"
      title="Ir arriba"
    >
      <Icon name="mdi:arrow-up" />
    </button>
  </main>
</template>
