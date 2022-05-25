import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import NotFound from '@/components/NotFound'

const routes = [
  {
    path: '/',
    component: HelloWorld
  },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
  { path: '/:pathMatch(.*)', name: 'bad-not-found', component: NotFound }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

const vue = createApp(App)

vue.use(router)
vue.mount('#app')
