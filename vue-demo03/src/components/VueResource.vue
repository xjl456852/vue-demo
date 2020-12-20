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
    vue-resource 为异步请求数据插件,百合天使中已使用.
    1.安装vue-resource
    在项目的目录中执行命令:
    cnpm install vue-resource --save
    必须用--save,将依赖写入package.json,否则项目移植不正常.
    2. 在项目中的main.js引入vue-resource
    
    import VueResource from "vue-resource"
    3. 在main中使用它
    Vue.use(VueResource);
    4.在项目中使用它.
    写法一:
    this.$http.get(url).then(function(res){
    }, function(err) {
    })
    写法二:
    this.$http.get(url).then(res => {
    }, err =>{
    })
     */
    
    export default {
        data() {
            return{
                list:[]
            }
        },
        methods:{
            getData() {
                var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
                this.$http.get(api).then(function(res){
                    //请求成功
                    console.log(res)
                    this.list = res.data.result;
                },function (err) {
                    //请求异常
                    console.log(err)
                })

            }
        },
        mounted() {
            this.getData();
        }
    }
</script>