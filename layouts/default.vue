<template>
  <div>
    <main v-show="!isPopup">
      <TheHeader @toggleSection="toggleSection" />
      <Nuxt v-show="showSection" @toggleModal="togglePopup" />
    </main>
    <pop-up v-show="isPopup" @closePopup="togglePopup" :data="data" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSection: true,
      isPopup: false,
      data: {
        name: '',
        thumbnail: '',
        image: '',
        repositorie: '',
        description: '',
        tech: '',
        url: ''
      }
    }
  },
  methods: {
    toggleSection() {
      this.showSection = !this.showSection
    },
    togglePopup() {
      this.isPopup = !this.isPopup
    }
  },
  created() {
    this.$nuxt.$on('togglePopup', data => {
      this.togglePopup()
      this.data = data
    })
  }
}
</script>

<style lang="scss">
@import '../scss/styles.scss';
</style>
