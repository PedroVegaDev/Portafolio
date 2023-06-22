<script setup lang="ts">
import { DataInfo } from '@/models/DataInfo'

interface Props {
  data?: DataInfo[]
}

defineProps<Props>()
</script>

<template>
  <div class="tabContent">
    <div class="tabContent__timeLine">
      <TimeLineItem
        :key="index"
        :dataItem="dataItem"
        v-for="(dataItem, index) of data"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use './TabContent.scss';
</style>
