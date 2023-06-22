<script setup lang="ts">
useHead({
  titleTemplate: title => {
    return title ? `${title} - Pedro Vega` : 'Pedro Vega'
  }
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
