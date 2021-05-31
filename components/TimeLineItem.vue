<template>
  <div class="timeLineItem">
    <span class="timeLineItem__date">{{ dataItem.date }}</span>
    <h4 class="timeLineItem__title">
      {{ dataItem.info }} - <span>{{ dataItem.entity }}</span>
    </h4>
    <p>{{ dataItem.description }}</p>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { DataInfo } from '@/models/DataInfo'

export default Vue.extend({
  name: 'TimeLineItem',
  props: {
    dataItem: {
      type: Object as () => PropType<DataInfo>,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
@import './TimeLineItem.scss';
</style>