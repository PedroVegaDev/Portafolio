<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

useHead({
  title: 'Portafolio'
})

export interface Proyect {
  name: string
  thumbnail: string
  image: string
  description: string
  repositorie: string
  tech: string
  url: string
}

export interface PortfolioContent extends ParsedContent {
  proyects: Proyect[]
}

const { data: portfolioPage } = useAsyncData('portfolio', () =>
  queryContent<PortfolioContent>('/portfolio').findOne()
)
</script>

<template>
  <section class="p-portfolio">
    <div class="container">
      <div class="p-portfolio__row">
        <div class="p-portfolio__contentTitle">
          <h2 class="p-portfolio__title">Portafolio</h2>
        </div>
      </div>
      <div class="p-portfolio__row --cards">
        <PortfolioCard
          :proyect="proyect"
          :key="proyect.name"
          v-for="proyect of portfolioPage?.proyects"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../scss/pages/portfolio.scss';
</style>
