<template>
  <div id="newsDetail">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: "NewsDetail",
  data() {
    return {
      msg: "新闻详情"
    }
  },
  mounted() {
    console.log(this.$route.params);
  }
}
</script>

<style scoped>

</style>
