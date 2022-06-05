import { createApp } from 'vue'
import App from './views/home/IndexView.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
// My Css Style
import '../src/assets/css/material-dashboard.css?v=3.0.2'
import '../src/assets/css/material-dashboard.min.css'
import '../src/assets/css/nucleo-icons.css'
import '../src/assets/css/nucleo-svg.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'material-icons/iconfont/material-icons.css'
import 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

createApp(App).use(router).mount('#app')
