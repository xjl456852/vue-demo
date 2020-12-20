<template id="tem">
  <div id="app">
        <v-header></v-header>
      
      <v-home></v-home>
      <h2>--------------</h2>
      
      <v-news></v-news>
      
      <hr>
      <v-vueResource></v-vueResource>
      <v-af></v-af>
      <br>
      <v-father></v-father>
  </div>
</template>

<script>
    /**
     * 1.引入组件
     * 2.挂载组件
     * 3.使用组件
     */
    import Header from "./components/Header";
    import Home from "./components/Home";
    import New from "./components/New";
    import VueResource from "./components/VueResource";
    import af from "./components/Axios_Fetch-Jsonp"
    import Father from "./components/Father";
  
  export default {
    data() {
      return {
        msg: ""
      }
    },
    components: {
        'v-header':Header,
        "v-home":Home,
        "v-news":New,
        "v-vueResource":VueResource,
        "v-af":af,
        "v-father":Father
    },
    mounted() {
      console.log("111xjl")
    }
  }
</script>

<style>

</style>
