<template>

  <div id="news">
    <input type="button" value="从news调用home方法" @click="callHome('haha1')">
  </div>
</template>

<script>
import ie from "../module/InfoEmit";
export default {
  name: "New",
  data() {
    return {
      msg:"news"
    }
  },
  methods:{
    callThis(info) {
      alert("news"+info)
    },
    callHome(info) {
      ie.$emit("to-home", info);
    }
  },
  mounted () {
    let that = this;
    ie.$on("to-news",function(data) {
      that.callThis(data);
    })
  }
}
</script>

<style scoped>

</style>
