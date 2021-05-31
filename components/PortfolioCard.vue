<template>
  <div class="portfolioCard">
    <div class="portfolioCard__thumbnail">
      <div class="portfolioCard__containerImage">
        <img
          class="portfolioCard__image"
          :src="proyect.thumbnail"
          :alt="`Thumbnail ${proyect.name}`"
        />
      </div>
    </div>
    <h3 class="portfolioCard__title">{{ proyect.name }}</h3>
    <button class="btn view-project-btn" @click="togglePopup(proyect)">
      Ver Proyecto
    </button>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Card } from '@/models/CardPortfolio'

export default Vue.extend({
  name: 'PortfolioCard',
  props: {
    proyect: {
      type: Object as () => PropType<Card>,
      required: true
    }
  },
  methods: {
    togglePopup(proyectData: Card) {
      this.$nuxt.$emit('togglePopup', proyectData)
    }
  }
})
</script>

<style lang="scss" scoped>
@import './PortfolioCard.scss';
</style>