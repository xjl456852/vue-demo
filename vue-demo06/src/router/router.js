import Vue from 'vue'
//全量引入
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
//
// Vue.use(ElementUI);

//按需引入:
import { Button, Select,Rate,Input } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Button)
Vue.use(Select)
Vue.use(Rate)
Vue.use(Input)



import VueRouter from 'vue-router'
Vue.use(VueRouter)
// import "normalize.css"
import "../assets/css/base.scss"

import News from "../components/News";
import Home from "../components/Home";
import NewsDetail from "../components/NewsDetail";
import HomeDetail from "../components/HomeDetail";
import User  from "../components/User";
import UserAdd from "../components/user/UserAdd";
import UserList from "../components/user/UserList";

const routes = [
  {path:"/home", component:Home},
  {path:"/news", component: News},
  {path:"/newsDetail/:id", component: NewsDetail, name:"name_news_detail"},
  {path:"/homeDetail/", component: HomeDetail},
  {path: "/user", component: User,children:[
      {path:"userAdd", component:UserAdd},
      {path: "userList", component: UserList}
    ]},
  {path:"*", component: Home} //默认挂载主页
]

const router = new VueRouter({
  // mode:"history",
  routes
})

export default router;

