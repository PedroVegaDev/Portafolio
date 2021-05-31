<template>
  <div class="popUp">
    <div class="popUp__inner">
      <div class="popUp__content">
        <div class="popUp__header">
          <button @click="closePopup" class="btn popUp__close">
            <fa :icon="['fas', 'times']" title="close" />
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

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Card } from '@/models/CardPortfolio'

export default Vue.extend({
  name: 'PopUp',
  props: {
    data: {
      type: Object as () => PropType<Card>,
      required: true
    }
  },
  methods: {
    closePopup() {
      this.$emit('closePopup')
    }
  }
})
</script>

<style lang="scss" scoped>
@import './PopUp.scss';
</style>
