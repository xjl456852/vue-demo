<template>

  <div id="news">
    我是新闻
    <ul>
      <li v-for="(item,key ) in list">
        <router-link :to="'/newsDetail/'+key+'/'+item">{{item}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "New",
  data() {
    return {
      msg:"news",
      list:["123","234","13"],
    }
  },
  methods:{
  },
}
</script>

<style scoped>

</style>
