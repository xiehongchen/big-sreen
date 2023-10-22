import { defineStore } from "pinia"

interface SreenState {
  title: string
  theme: 'light' | 'dark'
}

export const useScreenStore = defineStore({
  id: 'screen',
  state: (): SreenState => ({
    title: '可视化大屏',
    theme: 'light'
  })
})