<script setup lang="ts">
const isOpenMenu = ref(false)

const emit = defineEmits<{
  (e: 'toggleSection'): void
}>()

const toggleMenu = () => {
  emit('toggleSection')
  isOpenMenu.value = !isOpenMenu.value
}
</script>

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
                <NuxtLink to="/" class="theHeader__navbarLink">Inicio</NuxtLink>
              </li>
              <li class="theHeader__navbarItem" @click="toggleMenu">
                <NuxtLink to="/sobre-mi" class="theHeader__navbarLink">
                  Sobre Mí
                </NuxtLink>
              </li>
              <li class="theHeader__navbarItem" @click="toggleMenu">
                <NuxtLink to="/portafolio" class="theHeader__navbarLink">
                  Portafolio
                </NuxtLink>
              </li>
              <li class="theHeader__navbarItem" @click="toggleMenu">
                <NuxtLink to="/contacto" class="theHeader__navbarLink">
                  Contacto
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use './TheHeader.scss';
</style>
