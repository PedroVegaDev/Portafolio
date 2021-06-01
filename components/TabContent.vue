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

<script lang="ts">
import Vue, { PropType } from 'vue'
import { DataInfo } from '@/models/DataInfo'

export default Vue.extend({
  name: 'tabContent',
  props: {
    data: {
      type: Array as () => PropType<DataInfo>,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
@import './TabContent.scss';
</style>