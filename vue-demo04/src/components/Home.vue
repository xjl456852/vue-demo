<template>
  <div id="home">
    <input type="button" value="先调用本地方法,再调用其他组件方法" @click="runMyMethod(' from home')"></input>
  </div>
</template>

<script>
import infoEmit from "../module/InfoEmit";
export default {
  name: "Home",
  data() {
    return {
      msg:"home"
    }
  },
  methods:{
    runMyMethod(info) {
      console.log("home-runMyMethod");
      infoEmit.$emit("to-news", info)
    },
    callFromNew(info) {
      alert("home method " + info);
    }
  },
  mounted() {
    let that = this;
    infoEmit.$on("to-home", function(data) {
      that.callFromNew(data);
    })
  }
}
</script>

<style scoped>

</style>
