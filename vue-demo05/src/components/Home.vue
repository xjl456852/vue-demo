<template>
  <div id="home">
    我是主页
    <ul>
      <li v-for="(item,key) in list">
        <router-link :to="'/homeDetail?id='+key+'&info='+item">{{item}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
;
export default {
  name: "Home",
  data() {
    return {
      msg:"home",
      list:["12","123","1234"]
    }
  },
  methods:{

  },
}
</script>

<style scoped>

</style>
