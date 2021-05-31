<template>
  <header class="theHeader">
    <div class="container">
      <div class="theHeader__content">
        <button
          aria-label="menu"
          @click="toggleMenu"
          :class="['theHeader__toggler', isOpenMenu && 'active']"
        >
          <span :class="['theHeader__toggle', isOpenMenu && 'active']"></span>
        </button>
        <div class="theHeader__navbar" v-show="isOpenMenu">
          <div class="theHeader__navbarInner">
            <ul>
              <li class="theHeader__navbarItem" @click="toggleMenu">
                <nuxt-link to="/" class="theHeader__navbarLink"
                  >Inicio</nuxt-link
                >
              </li>
              <li class="theHeader__navbarItem" @click="toggleMenu">
                <nuxt-link to="/sobre-mi" class="theHeader__navbarLink"
                  >Sobre Mí</nuxt-link
                >
              </li>
              <li class="theHeader__navbarItem" @click="toggleMenu">
                <nuxt-link to="/portafolio" class="theHeader__navbarLink"
                  >Portafolio</nuxt-link
                >
              </li>
              <li class="theHeader__navbarItem" @click="toggleMenu">
                <nuxt-link to="/contacto" class="theHeader__navbarLink"
                  >Contacto</nuxt-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheHeader',
  data() {
    return {
      isOpenMenu: false
    }
  },
  methods: {
    toggleMenu() {
      this.$emit('toggleSection')
      this.isOpenMenu = !this.isOpenMenu
    }
  }
})
</script>

<style lang="scss" scoped>
@import './TheHeader.scss';
</style>
