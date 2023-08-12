<script setup lang="ts">
const { isTopScroll } = useTopScroll()

const sectionLinks = [
  { to: '#sobre-mi', label: 'Sobre mí' },
  { to: '#proyectos', label: 'Proyectos' }
]

const socialLinks = [
  {
    to: 'https://www.linkedin.com/in/pedrovegadamian',
    icon: 'devicon:linkedin',
    size: '1.6rem',
    arialLabel: 'linkedin'
  },
  {
    to: 'https://github.com/PedroVegaDamian',
    icon: 'mdi:github',
    size: '2rem',
    arialLabel: 'github'
  }
]

const colorModeButtons = [
  {
    title: 'Dark',
    changeTo: 'dark',
    currentMode: 'system',
    iconName: 'solar:moon-stars-bold'
  },
  {
    title: 'Light',
    changeTo: 'light',
    currentMode: 'dark',
    iconName: 'solar:sun-bold-duotone'
  },
  {
    title: 'System',
    changeTo: 'system',
    currentMode: 'light',
    iconName: 'ic:baseline-monitor'
  }
]

const isOpenMenu = ref(false)
</script>

<template>
  <nav
    class="bg-gray-100 dark:bg-zinc-950 h-20 w-full fixed left-0 top-0 z-10 transition-shadow duration-300"
    :class="[isTopScroll ? 'shadow-none' : 'shadow-sm dark:shadow-zinc-900']"
  >
    <div
      class="max-w-[650px] mx-auto h-full flex items-center justify-between font-medium max-sm:px-4"
    >
      <div class="hidden max-sm:block">
        <Icon
          class="cursor-pointer"
          v-show="!isOpenMenu"
          @click="isOpenMenu = true"
          name="ci:hamburger"
          size="2rem"
        />
        <Icon
          class="cursor-pointer"
          v-show="isOpenMenu"
          @click="isOpenMenu = false"
          name="ci:close-big"
          size="2rem"
        />
      </div>

      <div
        class="flex gap-8 bg-gray-100 dark:bg-zinc-950 max-sm:flex max-sm:justify-center max-sm:pb-4 max-sm:absolute max-sm:left-0 max-sm:top-20 max-sm:w-full max-sm:shadow-sm max-sm:dark:shadow-zinc-900"
        :class="{ 'max-sm:hidden': !isOpenMenu }"
      >
        <NuxtLink
          v-for="sectionLink of sectionLinks"
          :key="sectionLink.to"
          :to="sectionLink.to"
          class="max-sm:block"
          @click="isOpenMenu = false"
        >
          {{ sectionLink.label }}
        </NuxtLink>
        <NuxtLink
          to="/CV_PedroVega.pdf"
          class="relative"
          target="_blank"
          external
        >
          Resumen
          <Icon class="absolute -right-4 top-0" name="ci:external-link" />
        </NuxtLink>
      </div>

      <div class="flex items-center gap-4">
        <NuxtLink
          v-for="socialLink of socialLinks"
          :key="socialLink.to"
          :to="socialLink.to"
          target="_blank"
          external
          :aria-label="socialLink.arialLabel"
          :title="socialLink.arialLabel"
        >
          <Icon :size="socialLink.size" :name="socialLink.icon" />
        </NuxtLink>
        <button
          v-for="colorModeButton of colorModeButtons"
          :key="colorModeButton.title"
          :title="colorModeButton.title"
          @click="$colorMode.preference = colorModeButton.changeTo"
          v-show="$colorMode.preference === colorModeButton.currentMode"
        >
          <Icon size="2rem" :name="colorModeButton.iconName" />
        </button>
      </div>
    </div>
  </nav>
</template>
