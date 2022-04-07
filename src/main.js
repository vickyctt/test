import Vue from 'vue'
import App from './App.vue'
// 三级联动组件------全局组件
import TypeNav from "@/pages/Home/TypeNav"
Vue.component(TypeNav.name,TypeNav)
// 引入路由
import router from "@/router"

// 测试
import { reqCategoryList } from './api'
reqCategoryList()

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
