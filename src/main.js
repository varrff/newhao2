import Vue from 'vue'
import App from './App.vue'
// import '@/assets/styles/font.css'
import lazy from './directives/lazy'
import bacImg from './directives/bacImg'
import '@/assets/icon/iconfont.css'
import {Button,Input,Message,progress} from 'element-ui'
import 'animate.css'
import axios from 'axios'
Vue.config.productionTip = false
Vue.component('el-button',Button)
Vue.component('el-input',Input)
Vue.component('el-progress',progress)
//自定义指令
Vue.directive('lazy',lazy)
Vue.directive('bacImg',bacImg)
Vue.prototype.$message = Message
Vue.prototype.$axios = axios
new Vue({
  render: h => h(App),
}).$mount('#app')
