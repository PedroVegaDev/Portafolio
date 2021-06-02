<template>
  <section class="p-home">
    <div class="container">
      <div class="p-home__content">
        <div class="p-home__textContent">
          <p class="p-home__textPresentation">Hola!, Yo soy</p>
          <h1 class="p-home__textName">Pedro Vega</h1>
          <h2 class="p-home__textTitle">Desarrollador Front End</h2>
          <div class="p-home__buttons">
            <nuxt-link to="/sobre-mi" class="btn p-home__button"
              >Mas Sobre Mí</nuxt-link
            >
            <nuxt-link to="/portafolio" class="btn p-home__button"
              >Portafolio</nuxt-link
            >
          </div>
        </div>
        <div class="p-home__imageContainer">
          <div class="p-home__imageBox">
            <img
              alt="profile-img"
              class="p-home__image"
              src="/images/profile-img.png"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',
  head() {
    return {
      title: 'Inicio'
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../scss/pages/home.scss';
</style>
