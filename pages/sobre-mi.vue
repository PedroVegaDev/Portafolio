<template>
  <section class="p-about">
    <div class="container">
      <div class="p-about__row">
        <div class="p-about__contentTitle">
          <h2 class="p-about__title">Sobre Mí</h2>
        </div>
      </div>
      <div class="p-about__row">
        <div class="p-about__imgContent">
          <div class="p-about__imgBox">
            <img class="p-about__img" src="/images/hey.png" alt="about img" />
          </div>
        </div>
        <div class="p-about__textContainer">
          <p class="p-about__description">
            {{ aboutPage.description }}
          </p>
          <h3 class="p-about__titleSkills">Habilidades</h3>
          <div class="p-about__skills">
            <div
              class="p-about__skillItem"
              v-for="skill of aboutPage.skills"
              :key="skill"
            >
              {{ skill }}
            </div>
          </div>

          <div class="p-about__tabs">
            <button
              @click="toggleEducation(true)"
              :class="['p-about__tabItem', isSectionEducation && 'active']"
            >
              Educación
            </button>
            <button
              @click="toggleEducation(false)"
              :class="['p-about__tabItem', !isSectionEducation && 'active']"
            >
              Experiencia
            </button>
          </div>

          <TabContent v-show="isSectionEducation" :data="aboutPage.education" />
          <TabContent
            v-show="!isSectionEducation"
            :data="aboutPage.experience"
          />

          <div class="p-about__buttons">
            <a
              target="_blank"
              class="btn p-about__button"
              href="/CV_PedroVega.pdf"
              >Descargar CV</a
            >
            <nuxt-link to="/contacto" class="btn p-about__button"
              >Contáctame</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'About',
  head() {
    return {
      title: 'Sobre Mí'
    }
  },
  data() {
    return {
      isSectionEducation: true
    }
  },
  methods: {
    toggleEducation(value: boolean) {
      this.isSectionEducation = value
    }
  },
  async asyncData({ $content }) {
    const aboutPage = await $content('about').fetch()
    return { aboutPage }
  }
})
</script>

<style lang="scss" scoped>
@import '../scss/pages/about.scss';
</style>
