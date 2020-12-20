<template>

  <div id="news">
    我是新闻
    <br>
    vuex中的数据:{{this.$store.state.count}}<br>
    <button @click="callMutation(10)">增加数据</button>
    <ul class="list">
      <li v-for="(item,key) in list">
        <router-link :to="'/newsDetail/'+item.aid">{{item.title}}</router-link>
      </li>
    </ul>

  </div>
</template>

<script>
import store from "../vuex/store";
import axios from 'axios';

export default {
  name: "New",
  data() {
    return {
      msg:"news",
      list:[],
    }
  },
  store,
  methods:{
    getAllNew() {
      let api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
      axios.get(api).then(res => {
          this.list = res.data.result;
        this.$store.commit("initList", this.list);
      }).then(err => {
      })
    },
    callMutation(i) {

      this.$store.commit("incCount2", i)
    }
  },
  mounted() {
    let list = this.$store.state.list;
    console.log(list.length)
    if (list.length > 0) {
      this.list = list;
    } else {
      this.getAllNew();
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  li {
    height: 2rem;
    line-height: 2rem;
    font: {
      size: 1rem;
    };
    a {
      color: #666;
      text-decoration: none;
    }
  }
}
</style>
