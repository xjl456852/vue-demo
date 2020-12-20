<template>
  <div id="home">
    我是主页
    <ul>
      <li v-for="(item,key) in list">
        <router-link :to="'/homeDetail?id='+key+'&info='+item">{{item}}</router-link>
      </li>
      <button @click="toNews()">到新闻</button>
    </ul>

    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>

    <i style="font-size: 50px" class="el-icon-s-tools"></i>
    <el-input v-model="input" placeholder="请输入内容"></el-input>

    <el-rate v-model="value1"></el-rate>
    {{value1}}
<br>
    vuex的state变量数据:<span v-text="this.$store.state.count"></span>-----------
    <span v-text="this.$store.getters.computerStateCount"></span>
    <br>
    <button @click="changeVuex(3)">修改vuex中的变量</button>
    <button @click="changeVuexByActions(10)">修改vuex中的变量,通过Vuex中的actions</button>
  </div>
</template>

<script>
import VueRouter from "vue-router";
import store from "../vuex/store";

export default {
  name: "Home",
  data() {
    return {
      msg:"home",
      list:["12","123","1234"],
      value1:null,
      input:null
    }
  },
  store,
  methods:{
    toNews() {
      //方式一:
      //字符串
      // this.$router.push("news");
      //对象
      // this.$router.push({path:"news"});
      //跳转到带参数的地址
      this.$router.push({path:"/newsDetail/499"});

      //方式二:命令路由
      //命名路由,在main.js中,路由定义中增加name属性 {path:"/newsDetail/:id", component: NewsDetail, name:"name_news_detail"},
      // this.$router.push({name:"name_news_detail", params:{"id":"499"}});

      //history方式定义链接,url没有#号.
      //在main.js中修改,增加  mode:"history",,将默认的hash模式改为history模式,这样做需要后端额外配置一下才能真正投入生产.否则可能有访问出现404的情况.
      // 如下:
      // const router = new VueRouter({
      //   mode:history,
      //   routes
      // })


    },
    changeVuex(interval) {
      this.$store.commit("incCount3",{inter:interval})

    },
    changeVuexByActions(interval) {
      this.$store.dispatch("callMutationsMethod",interval)
    }
  },
}
</script>

<style scoped>

</style>
