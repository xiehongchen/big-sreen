import { ref, onMounted, onBeforeUnmount } from 'vue'

export const width = 1920
export const height = 1080

type ResizeType = {
  w?: number
  h?: number
  fullScreen?: boolean
  delay?: number
}

export const useResize = (options: ResizeType = {}) => {
  const {
    w = width,
    h = height,
    fullScreen = false,
    delay = 100
  } = options
  // 缩放元素
  const screenRef = ref<HTMLElement | null>(null)
  // 缩放比例
  const scale = ref(1)
  function resize() {
    // 获取屏幕宽高
    const clientWidth = document.body.clientWidth
    const clientHeight = document.body.clientHeight

    // 计算缩放比例
    const scaleW = clientWidth / w
    const scaleH = clientHeight / h

    if (clientWidth / clientHeight > w / h) {
      // 如果屏幕宽高比大于设计稿宽高比，说明高度不够，就取浏览器和设计稿的高度比
      scale.value = scaleH
    } else {
      // 如果屏幕宽高比小于设计稿宽高比，说明宽度不够，就取浏览器和设计稿的宽度比
      scale.value = scaleW
    }

    if (fullScreen) {
      // 如果不在乎缩放失真，可以设置全屏
      screenRef.value.style.transform = `scale(${scaleW}, ${scaleH})`
    } else {
      // 如果在乎缩放失真，就设置缩放比例
      screenRef.value.style.transform = 'scale(' + scale.value + ')'
    }
  }

  const resizeDelay = debounce(resize, delay)
  onMounted(() => {
    if (screenRef.value) {
      resize()
      window.addEventListener('resize', resizeDelay)
    }
  })
  onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeDelay)
  })

  return {
    screenRef,
    scale
  }
}

function debounce(callback, delay) {
  let timer
  return function(event) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      callback.call(null, event)
      timer = null
    }, delay)
  }
}