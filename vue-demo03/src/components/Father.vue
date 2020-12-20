<template>
    <div id="father">
        
        <v-son :msg="msg" :method="run" :obj="this" ref="sonref"></v-son>

      <input type="button" @click="callSon()" value="主动获取子组件对象">
<!--      子组件主动调用父组件的方式二-->
      <v-son @fatherInfo="faMethod"></v-son>
    </div>
</template>

<script>
    /*
    父组件给子组件传值

    1.父组件调用子组件的时候 绑定动态属性
        <v-header :title="title"></v-header>
        传递语法:
        :形参="实参"
    2、在子组件里面通过 props接收父组件传过来的数据
    props中接受的为形参名
     */
    import Son from "./Son"
    export default {
        name: "Father",
        data() {
            return{
                msg:"父组件信息",
                father_info:"xiejl"
            }
        },
        methods:{
            run(s){
                alert("父组件方法"+s)
            },
            callSon() {
              alert(this.$refs.sonref.info);
              this.$refs.sonref.printFatherObj();
            },
          faMethod(sonM) {
              alert("faMethod info!"+sonM)
          }
        },
        components:{
            "v-son":Son
        }
    }
</script>

<style scoped>

</style>