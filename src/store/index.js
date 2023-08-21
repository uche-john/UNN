import { createStore } from 'vuex'

export default createStore({
  state: {
    show: false,
    HomeVisibility:true
  },
  getters: {
  },
  mutations: {
    toggleShow(state){
        state.show =!state.show
    }
  },
  actions: {
  },
  modules: {
  }
})
