<script setup lang="ts">
import { DataInfo } from '@/models/DataInfo'

interface Props {
  dataItem: DataInfo
}

defineProps<Props>()
</script>

<template>
  <div class="timeLineItem">
    <span class="timeLineItem__date">{{ dataItem.date }}</span>
    <h4 class="timeLineItem__title">
      {{ dataItem.info }} - <span>{{ dataItem.entity }}</span>
    </h4>
    <p>{{ dataItem.description }}</p>
  </div>
</template>

<style lang="scss" scoped>
@use './TimeLineItem.scss';
</style>
