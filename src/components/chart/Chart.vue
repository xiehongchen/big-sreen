<template>
  <div ref="chartRef" class="chart"></div>
</template>

<script setup lang="ts">
import { PropType, shallowRef, watch, onMounted } from 'vue'
import * as echarts from 'echarts'
import { ECharts, EChartsCoreOption } from 'echarts'

const props = defineProps({
  option: {
    type: Object as PropType<EChartsCoreOption>,
    required: true,
    default: () => ({})
  },
  loading: {
    type: Boolean,
    default: false
  }
})
const chartRef = shallowRef<HTMLElement | null>(null)
const chart = shallowRef<ECharts | null>(null)

function init() {
  if (props.option) {
    chart.value = echarts.init(chartRef.value!)
    setOption(props.option)
  }
}
function setOption(option: any, notMerge?: boolean, lazyUpdate?: boolean) {
  chart.value!.setOption(option, notMerge, lazyUpdate)
}
function resize() {
  chart.value!.resize()
}
watch(() => props.loading, (val) => {
  if (!chart.value) return
  if (val) {
    chart.value.showLoading()
  } else {
    chart.value.hideLoading()
  }
})
onMounted(() => {
  init()
})
defineExpose({
  chart,
  setOption,
  resize
})
</script>

<style lang="scss" scoped>
.chart {
  width: 100%;
  height: 100%;
}
</style>