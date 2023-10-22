<template>
  <div :class="['screen-container', store.theme]">
    <div ref="screenRef" class="screen">
      <Header></Header>
      <div class="screen-main">
        <div class="screen-left">
          <Left />
        </div>
        <div class="screen-center">
					<Center />
				</div>
        <div class="screen-right">
					<Right />
				</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import { useScreenStore } from '@/store'
import { useResize } from '@/utils/useResize'
import Left from './components/Left/index.vue'
import Right from './components/Right/index.vue'
import Center from './components/Center/index.vue'
const store = useScreenStore()
const { screenRef } = useResize()
</script>

<style lang="scss">
.screen-container {
  --screen-width: 1920px;
  --screen-height: 1080px;
  --screen-header-height: 72px;
  --screen-block-bg: #222733;
  --screen-bg: rgb(22, 21, 34);
  --screen-text-color: #fff;
  position: relative;
  margin: 0;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  overflow: hidden;
  background-color: var(--screen-bg);
  color: var(--screen-text-color);
  .screen {
    position: absolute;
    user-select: none;
    top: 50%;
    left: 50%;
    width: var(--screen-width);
    height: var(--screen-height);
    margin-left: calc(var(--screen-width) * 0.5 - var(--screen-width));
    margin-top: calc(var(--screen-height) * 0.5 - var(--screen-height));
    background-size: 100% 100%;
    padding: 0 20px;
    &-main {
      position: relative;
      display: flex;
      height: calc(100% - var(--screen-header-height));
    }
    &-center {
      flex: 1;
      width: calc(var(--screen-width) - 1000px);
    }
    &-right, &-left {
      width: 460px;
    }
  }
}
.light {
  --screen-bg: rgb(238, 238, 238);
  --screen-block-bg: #fff;
  --screen-text-color: rgb(22, 21, 34);
}
</style>