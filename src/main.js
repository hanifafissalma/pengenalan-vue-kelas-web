import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/animate.css'
import './assets/css/font-awesome.min.css'
import './assets/css/templatemo-style.css'
import './assets/css/table.css'

createApp(App)
  .use(router)
  .mount('#app')
