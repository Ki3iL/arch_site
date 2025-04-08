import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { initSmoothScroll } from './utils/scroll.js'

// Инициализация плавной прокрутки
initSmoothScroll(80)

createApp(App).mount('#app') 