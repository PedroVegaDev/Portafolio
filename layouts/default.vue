<script setup lang="ts">
const showSection = ref(true)

const { data, isPopup, togglePopup } = useTogglePopup()

const toggleSection = () => {
  showSection.value = !showSection.value
}
</script>

<template>
  <div>
    <main v-show="!isPopup">
      <TheHeader @toggleSection="toggleSection" />
      <slot v-if="showSection" @toggleModal="togglePopup" />
    </main>
    <pop-up v-show="isPopup" @closePopup="togglePopup" :data="data" />
  </div>
</template>

<style lang="scss">
@use '../scss/styles.scss';
</style>
