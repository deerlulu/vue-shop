import { reqCategoryList } from '@/api'
//home小仓库
const state = {
  //state中的数据的不能随便定义，要根据服务器返回的值去定义
  categoryList: []
}
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList
  }
}
const actions = {
  //通过api里面的接口函数调用，向服务器发请求，获取服务器的数据
  async categoryList({commit}) {
    let res = await reqCategoryList()
    if(res.code == 200) {
      commit('CATEGORYLIST', res.data)
    }
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}