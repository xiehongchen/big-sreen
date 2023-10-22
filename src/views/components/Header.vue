<template>
  <div class="screen-header">
    <h1 class="screen-logo">
      <span>Big Screen</span>
    </h1>
    <div class="screen-header-title">{{ store.title }}</div>
    <div class="screen-header-right">
      <img :src="githubIcon" alt="">
      <img :src="icon" class="theme-change" @click="handleChangeTheme"/>
      <span class="dateTime">{{ currentTime }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onBeforeUnmount } from 'vue'
import { useScreenStore } from '@/store'
import dayjs from 'dayjs'
import darkIcon from '@/assets/images/screen/qiehuan_dark.png'
import lightIcon from '@/assets/images/screen/qiehuan_light.png'
import githubIconDark from '@/assets/images/screen/github_dark.svg'
import githubIconLight from '@/assets/images/screen/github_light.svg'

const store = useScreenStore()
const icon = computed(() => (store.theme === 'dark' ? darkIcon : lightIcon))
const githubIcon = computed(() => (store.theme === 'dark' ? githubIconDark : githubIconLight))
const currentTime = ref('')
const timeId = ref()
function handleChangeTheme() {
  store.$patch({ theme: store.theme === 'dark' ? 'light' : 'dark' })
}

function startTime() {
  timeId.value = setTimeout(() => {
    currentTime.value = dayjs().format('YYYY-MM-DD HH:mm:ss')
    startTime()
  }, 1000)
}

onBeforeUnmount(() => {
  clearTimeout(timeId.value)
})
startTime()

</script>

<style lang="scss" scoped>
.screen-header {
  position: relative;
  width: 100%;
  height: var(--screen-header-height);
  background-image: url('@/assets/images/screen/header_border_dark.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  animation: fade 3s;
  &-title {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 487px;
    height: var(--screen-header-height);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: 500;
    letter-spacing: 7px;
    text-shadow: 0px 2px 20px rgba(222, 171, 155, 0.6);
  }
  .screen-logo {
    display: flex;
    align-items: center;
    height: calc(var(--screen-header-height) - 20px);
  }
  &-right {
    display: flex;
    align-items: center;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-80%);
    img {
      width: 30px;
      margin-right: 16px;
      cursor: pointer;
      transition: .3s cubic-bezier(.175, .885, .32, 1.275);
      &:hover {
        transform: scale(1.2);
      }
    }
  }
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>