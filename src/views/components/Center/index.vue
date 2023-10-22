<template>
  <div class="center">
    <!-- <div class="center-top">
      <Map />
    </div>
    <Bottom /> -->
    <AMap />
  </div>
</template>

<script setup lang="ts">
import Map from './map.vue'
import Bottom from './Bottom.vue'
import AMap from './AMap.vue'
</script>

<style lang="scss" scoped>
.center {
  position: relative;
  height: 1000px;
  padding: 0 16px;
  animation: slideAndFade 1.5s;
  .center-top {
    height: calc(100% - 150px);
  }
}

@keyframes slideAndFade {
  0% {
    opacity: 0;
    transform: translateY(218px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>