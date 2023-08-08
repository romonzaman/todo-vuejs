// import './assets/main.css'

import { createApp, markRaw } from 'vue'
import router from './router'
import { createPinia } from 'pinia'
import piniaPluginPersistestate from 'pinia-plugin-persistedstate'

import App from './App.vue'

const app = createApp(App)

const pinia = createPinia()
pinia.use(({ store }) => {
  store.router = markRaw(router)
})
pinia.use(piniaPluginPersistestate)

app.use(pinia)
app.use(router)

app.mount('#app')
