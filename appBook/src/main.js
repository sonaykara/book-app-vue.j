import { createApp } from 'vue'

import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { createRouter, createWebHistory } from 'vue-router'
import İnputArea from './components/InputArea.vue'
import Detail from './components/BookDetail.vue'
const app = createApp(App)

const router = new createRouter({
    history: createWebHistory(),
    routes: [
      { path: '', component: İnputArea},
      { path: '/book/:id/detail', component: Detail},
    
    
    ]
  })
  app.use(router)
  app.mount('#app')
