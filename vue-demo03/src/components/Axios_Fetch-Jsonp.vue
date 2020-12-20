<template>
    <div id="resource">
        <button @click="getData()">获取数据</button>

        <ul>
            <li v-for="(item, index) in list" :key="index">{{item.title}}</li>
        </ul>
    </div>
</template>

<script>
    /*
    axios 为异步请求数据插件,最好的异步请求.
    1.安装axios
    在项目的目录中执行命令:
    cnpm install axios --save
    必须用--save,将依赖写入package.json,否则项目移植不正常.
    2. 在那个项目中使用,就在那个项目中引用.在vue文件中引用
    import axios from "axios"
    4.在项目中使用它.
    最好用这种写法,避免this指向问题.
    写法:
    axios.get(api).then((res) =>{
                    //请求成功
                    console.log(res)
                    this.list = res.data.result;
                }).then((err) =>{
                    //请求异常
                    console.log(err)
                }).then( ()=> {
                    // always executed
                    console.log("always")
                });
    
     */
    import axios from "axios"
    //暂无jsonp地址,暂不测试
    // import fj  from "fetch-jsonp"
    export default {
        data() {
            return{
                list:[]
            }
        },
        methods:{
            getData() {
                var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
                axios.get(api).then((res) =>{
                    //请求成功
                    console.log(res)
                    this.list = res.data.result;
                }).then((err) =>{
                    //请求异常
                    console.log(err)
                }).then( ()=> {
                    // always executed
                    console.log("always")
                });
                
               
            }
            
        },
        mounted() {
            this.getData();
        }
    }
</script>