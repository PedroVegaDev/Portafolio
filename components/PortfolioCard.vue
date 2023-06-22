<script setup lang="ts">
import { Card } from '@/models/CardPortfolio'

interface Props {
  proyect: Card
}

defineProps<Props>()

const { onTogglePopup } = useTogglePopup()
</script>
<template>
  <div class="portfolioCard">
    <div class="portfolioCard__thumbnail">
      <div
        class="portfolioCard__containerImage"
        @click="onTogglePopup(proyect)"
      >
        <img
          class="portfolioCard__image"
          :src="proyect.thumbnail"
          :alt="`Thumbnail ${proyect.name}`"
        />
      </div>
    </div>
    <h3 class="portfolioCard__title">{{ proyect.name }}</h3>
    <button class="btn view-project-btn" @click="onTogglePopup(proyect)">
      Ver Proyecto
    </button>
  </div>
</template>

<style lang="scss" scoped>
@use './PortfolioCard.scss';
</style>
