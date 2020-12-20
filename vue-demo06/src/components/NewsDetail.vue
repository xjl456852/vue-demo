<template>
  <div id="newsDetail">
      <h2>{{newsDetail.title}}</h2>
      <div v-html="newsDetail.content" ></div>

  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "NewsDetail",
  data() {
    return {
      msg: "新闻详情",
      newsDetail:"",
    }
  },
  methods:{
    getDetail(aid) {
      let a = 'http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+aid;
      axios.get(a).then(data => {
        this.newsDetail = data.data.result[0];
      })
    }
  },
  mounted() {
    this.getDetail(this.$route.params.id)
  }
}
</script>

<!--需要去掉scoped-->
<style lang="scss" >

#newsDetail {
  padding:1rem;
  line-height:2;
  img {
    max-width:100%;
  }
}

</style>
