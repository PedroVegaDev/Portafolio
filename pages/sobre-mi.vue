<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

useHead({
  title: 'Sobre mi'
})

const isSectionEducation = ref(true)

const toggleEducation = (value: boolean) => {
  isSectionEducation.value = value
}

export interface Education {
  date: string
  info: string
  entity: string
  description: string
}

interface AboutContent extends ParsedContent {
  description: string
  skills: string[]
  education: Education[]
  experience: Education[]
}

const { data: aboutPage } = await useAsyncData('about', () =>
  queryContent<AboutContent>('/about').findOne()
)
</script>

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
            {{ aboutPage?.description }}
          </p>
          <h3 class="p-about__titleSkills">Habilidades</h3>
          <div class="p-about__skills">
            <div
              class="p-about__skillItem"
              v-for="skill of aboutPage?.skills"
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

          <TabContent
            v-show="isSectionEducation"
            :data="aboutPage?.education"
          />
          <TabContent
            v-show="!isSectionEducation"
            :data="aboutPage?.experience"
          />

          <div class="p-about__buttons">
            <NuxtLink
              target="_blank"
              class="btn p-about__button"
              href="/CV_PedroVega.pdf"
              >Descargar CV</NuxtLink
            >
            <NuxtLink to="/contacto" class="btn p-about__button"
              >Contáctame</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../scss/pages/about.scss';
</style>
