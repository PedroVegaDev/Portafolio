<script setup lang="ts">
import { Card } from '@/models/CardPortfolio'

interface Props {
  data: Card
}

defineProps<Props>()
const emit = defineEmits<{
  (e: 'closePopup'): void
}>()

const closePopup = () => {
  emit('closePopup')
}
</script>

<template>
  <div class="popUp">
    <div class="popUp__inner">
      <div class="popUp__content">
        <div class="popUp__header">
          <button @click="closePopup" class="btn popUp__close">
            <Icon name="fa-solid:times" title="close" />
          </button>
          <div class="popUp__thumbnail">
            <img
              class="popUp__image"
              :src="data.image"
              :alt="`Image ${data.name}`"
            />
          </div>
          <h3 class="popUp__title">{{ data.name }}</h3>
        </div>
        <div class="popUp__body">
          <div class="popUp__description">
            <p>
              {{ data.description }}
            </p>
          </div>
          <div class="general-info">
            <ul>
              <li class="popUp__textInfo">
                Tecnologías Usadas - <span>{{ data.tech }}</span>
              </li>
              <li class="popUp__textInfo">
                Repositorio -
                <span class="popUp__link"
                  ><a :href="data.repositorie" target="_blank">{{
                    data.repositorie
                  }}</a></span
                >
              </li>
              <li class="popUp__textInfo">
                Sitio Web -
                <span class="popUp__link"
                  ><a :href="data.url" target="_blank">{{ data.url }}</a></span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use './PopUp.scss';
</style>
