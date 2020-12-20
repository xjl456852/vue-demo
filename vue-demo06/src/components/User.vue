<template>
  <div id="user">
    <div class="left">
      <ul>
        <li><router-link to="/user/userAdd">增加用户</router-link></li>
        <li><router-link to="/user/userList">用户列表</router-link></li>
      </ul>


    </div>
    <div  class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
name: "User"
}
</script>

<style lang="scss">
#user {
  display: flex;
  .left{
    width: 20rem;
    min-height: 400rem;
    border: 1rem solid #eee;
  }
  .right{
    flex: 1;
  }
}

</style>
