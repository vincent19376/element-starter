import Vue from 'vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import Another from './Another.vue'

Vue.use(ElementUI)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: App
  },
  {
    path: '/1',
    component: Another
  },
]

const router = new VueRouter({
    routes
})

var vm = new Vue({
  // render: (h) => h(App),
  el: '#app',
  router
})
