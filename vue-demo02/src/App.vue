<template>
  <!--vue 模版里面所有的内容要被根节点包含起来-->
  <div id="app">
    <!-- 基础语法 -->
   {{msg}}
   <br/>
   {{obj.name}} &nbsp {{obj.age}}

   <br/>
   <ul>
     <li v-for="item in list">
      {{item}}
     </li>
   </ul>
   <ul>
     <li v-for="item in list1">
      {{item.name}} &nbsp {{item.age}}
     </li>
   </ul>
    <ul>
      <li v-for="item in list2">
        {{item.category}}
        <ol>
          <li v-for="i in item.orders">
            {{i.id}} &nbsp {{i.amount}}
          </li>
        </ol>
      </li>
    </ul>
<!-- 绑定数据,属性必须用这种方式绑定 -->
<!-- v-bind:属性名 和 使用 :属性名  效果是一样的,后面的是简写 -->
    <div v-bind:title="ti">鼠标移动到这里</div>
    <div :title="ti">鼠标移动到这里</div>

    <img :src="url" alt="">

    <!-- 绑定html标签,如果用text则无法解析html标签 -->
    <div v-html="html"></div>
    <div v-text="html"></div>


    <!--样式绑定, :class 和:style 内部都是对象,必须用{},即使是函数返回的也是对象,也可以是数组 -->
    <div v-bind:class="{'red':color,'blue':!color}">

      颜色
    </div>
    <div v-bind:class="{'red':color,'font':!co}">
      颜色2
    </div>

    <ul>
      <li v-for="(item,key) in list">
        {{key}}  --  {{item}}
      </li>
    </ul>

    <ul>
      <li v-for="(item,key) in list" :class="{'red':key==0,'font':key==1}">
        {{key}}  --  {{item}}
      </li>
    </ul>
    <div class="box" :style="{'width':boxSize+'px'}">人为</div>


    <!--双向数据绑定-->
    <h1></h1>
    {{msg}}
    <br/>
    <input type="text" v-model="msg">

    <button v-on:click="getMsg()">获取msg</button>
    <button v-on:click="setMsg()">设置</button>

    <!--操作原生dom节点-->
    <br/>
    <input type="text" ref="userInfo">
    <br/>
    <div ref="userDiv">阿撒的发生地方</div>

    <button @click="operate()">操作 </button>


    <!--事件-->
    <!--事件两种写法-->
    <br/>
    <input v-on:click="method01(ti)" value="写法一"  type="button"/>
    <input @click="method02()" value="写法2"  type="button"/>
    <br/>
    <input @click="method03()" value="填充"  type="button"/>


    <ol >
      <li v-for="(item, key) in data">
        <span v-text="key"></span> &nbsp;&nbsp;<span v-text="item"></span>
        <!--两种写法-->
        <!--{{key}} &#45;&#45; {{item}}-->
      </li>
    </ol>

    <button @click="method04('123')">普通参数</button>

    <br/>
<!--传入事件参数, 自定义属性-->
    <input type="button" value="事件" data-xjl="xiejl" @click="method05($event)" >



  </div>




</template>

<script>
  // export default 表示要将其暴露出去
export default {
  /*
  双向数据绑定   MVVM   vue就是一个MVVM的框架。
  M  model
  V  view
  MVVM：  model改变会影响视图view，view视图改变反过来影响model
  */

  //定义的数据
  data () {
    return {
      msg: 'hi,xjl',
      obj:{"name":"xjl","age":10},
      list:["xj",32,"ssd","sd"],
      list1:[{"name":"xiejl","age":14},{"name":"hh","age":20}],
      list2:[
        {"category":"inner",
          "orders":[
            {"id":213, "amount":2323},
            {"id":214, "amount":10}
          ]
          }
      ],
      ti:"小标题",
      url:"https://cn.vuejs.org/images/logo.png",
      html:"<h1>大标题</h1>",
      color:true,
      co:false,
      boxSize:100,
      data:[]
    }
  },
  methods:{
    getMsg() {
      alert(this.msg);
    },
    setMsg() {
      this.msg = 'test hah';
    },
    //操作原生dom节点
    operate() {
      console.log(this.$refs.userInfo.value);
      this.$refs.userDiv.style.background = 'red';

    },
    //写法1
    method01:function (v1) {
      alert(this.msg)
      console.log(v1)
    },
    method02() {
      alert(this.msg)
    },
    method03() {
      for(let i=0; i<10; i++) {
        this.data.push("数据" + i);
      }
    },
    method04(a) {
      alert(a)
    },
    method05(e) {
      console.log(e)
      e.srcElement.style.backgroundColor= 'red'
      console.log(e.srcElement.dataset.xjl);
    }
  }
}
</script>

<style>
.red{
  color: red;
}
.blue{
  color:blue;
}
.font{
  font-size: 20px;
}
.box{
  height: 200px;
  width: 100px;
  background-color: red;
}
</style>
