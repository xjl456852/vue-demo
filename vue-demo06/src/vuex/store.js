import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var state={
  count:1,
  list:[]
}

var mutations={
  //不传参数
  incCount(){
    state.count++;
  },
  //传一个参数,第一个就是state,第二个参数才是真正的参数,
  incCount2(state, param){
    console.log("参数:"+param);
    state.count = state.count+param;
  },

//传多个参数,第一个就是state,第二个参数才是真正的参数,多个参数时是对象
  incCount3(state, param){
    console.log(param);
    state.count = state.count+param.inter;
  },
  initList(state, list) {
    state.list = list;
  }
}

//getters类似于vue的计算属性.
//改变state里面的数据时,会触发getters里面的方法,获取新的值.
var getters = {
  computerStateCount () {
    return state.count*2;
  }
}

//
var actions = {
  callMutationsMethod (context, param) {
    context.commit("incCount2", param)
  }
}
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

export default store;
