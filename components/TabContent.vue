<template>
  <div class="tabContent">
    <div class="tabContent__timeLine">
      <TimeLineItem
        v-for="dataItem of data"
        :key="dataItem.id"
        :dataItem="dataItem"
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