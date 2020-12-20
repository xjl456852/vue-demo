<template>
    <div id="son">
        子组件--{{msg}}
        <br/>
        <button @click="method('123')">执行父组件的方法</button>
        <br/>
        <button @click="printFatherObj()">打印父对象</button>
        
        子组件接收父组件,没有值的情况下的默认值:{{son}}

        <input type="button" value="主动调用父组件方式2" @click="callFa(123)">
    </div>
</template>

<script>
    export default {
        name: "Son",
        data() {
          return {
            info:"xjl01"
          }
        },
        //方法一:
        // props: ["msg","method"],
        //方法二:
        methods:{
            printFatherObj() {
              console.log(this.obj);
              console.log(this.$parent.father_info);
            },
          callFa(sonMsg) {
              this.$emit('fatherInfo',sonMsg)
          }
        },
        props:{
            "msg":String,
            "method":Function,
            "obj":Object,
            "son":{
                type:String,
                default: "hah"
            },
        },
    }
</script>

<style scoped>

</style>