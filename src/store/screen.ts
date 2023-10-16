import { defineStore } from "pinia"

interface SreenState {
  title: string
  theme: 'light' | 'dark'
}

export const useScreenStore = defineStore({
  id: 'screen',
  state: (): SreenState => ({
    title: 'Pinia',
    theme: 'light'
  })
})