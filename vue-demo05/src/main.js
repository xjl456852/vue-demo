import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import News from "./components/News";
import Home from "./components/Home";
import NewsDetail from "./components/NewsDetail";
import HomeDetail from "./components/HomeDetail";

const routes = [
  {path:"/home", component:Home},
  {path:"/news", component: News},
  {path:"/newsDetail/:id/:info", component: NewsDetail},
  {path:"/homeDetail/", component: HomeDetail},
  {path:"*", component: Home} //默认挂载主页
]

const router = new VueRouter({
  routes
})


new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
