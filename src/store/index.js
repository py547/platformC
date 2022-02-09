import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'

import action from './action'

Vue.use(Vuex)

const state = {
    //变量
    dataSource: "opensea"

}

export default new Vuex.Store({
    state,
    action,
    mutations
})