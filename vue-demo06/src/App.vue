<template>
  <div id="app">
    <header class="header">

      <router-link to="/news">新闻</router-link>
      <router-link to="/home">首页</router-link>
      <router-link to="/user/userAdd">用户</router-link>
    </header>
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
  .header {
    font: {
      size: 1.5rem;
    };
    color: #eee;
    line-height: 2rem;
    text-align: center;
    background: #000;
    a {
      color: #fff;
      padding: 0 2rem;
    }
  }
</style>
