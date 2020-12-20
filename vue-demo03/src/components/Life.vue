<template>
    <div id="life">
        值:{{msg}}
        <button @click="setMsg()">设置值</button>
        
    </div>
</template>

<script>
    /**
     * 生命周期函数/生命周期钩子：

     组件挂载、以及组件更新、组件销毁、的时候触发的一系列的方法  这些方法就叫做生命周期函数

     */
    export default {
        data(){
            return{
                msg:""
            }
        },
        methods:{
          setMsg() {
              this.msg = "xiejl"
          }  
        },
        beforeCreate() {
            console.log("1 实例创建之前")
        },
        created() {
            console.log("2 实例创建之后")
        },
        beforeMount() {
            console.log("3 挂载之前")
        },
        mounted() {
            console.log("4 挂载之后")
        },
        beforeUpdate() {
            console.log("5 更新之前")
        },
        updated() {
            console.log("6 更新之后")
        },
        beforeDestroy() {
            console.log("7 销毁之前")
        },
        destroyed() {
            console.log("8 销毁之后")
        }
    }
</script>