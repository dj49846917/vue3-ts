import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import '@/assets/css/bootstrap.css'
import '@/assets/css/rt.css'
import '@/assets/css/iconfont.css'
import axios from 'axios'

const app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(router).use(store).use(ElementPlus).mount('#app')
