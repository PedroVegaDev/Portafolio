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
          v-for="proyect of portfolioPage.proyects"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Portfolio',

  head() {
    return {
      title: 'Portafolio'
    }
  },
  async asyncData({ $content }) {
    const portfolioPage = await $content('portfolio').fetch()
    return { portfolioPage }
  }
})
</script>

<style lang="scss" scoped>
@import '../scss/pages/portfolio.scss';
</style>
