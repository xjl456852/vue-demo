<template>
    <div id="home">
        <v-header></v-header>
        <h2>首页</h2>

        <input type="text" v-model="msg" /><button @click="run()">执行方法</button>

        <br>
        <v-life v-if="life"></v-life>
        
        <button @click="life = !life">挂载或者销毁life</button>
    </div>
</template>


<script>
    import Header from "./Header";
    import Life from "./Life";

    export default {
        data() {
            return  {
                msg: "",
                life:true
            }
        },
        methods: {
          run() {
              alert(this.msg);
          }  
        },
        components:{
            "v-header" : Header,
            "v-life":Life
        }
    }
</script>

<style  >
    /*子组件的样式不应该影响主组件的样式, 这个是应用了id样式的子组件 */
    #id h2{
        background-color: rebeccapurple;
    }
</style>
<!--<style scoped >-->
<!--    /*子组件的样式不应该影响主组件的样式,那么应该用scoped,或者给元素重新定义样式 */-->
<!--    h2{-->
<!--        background-color: rebeccapurple;-->
<!--    }-->
<!--</style>-->