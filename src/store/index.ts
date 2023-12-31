import { type App } from 'vue'
import { createPinia } from 'pinia'

export * from './screen'

export const install = (app: App) => {
  const pinia = createPinia()
  app.use(pinia)
}