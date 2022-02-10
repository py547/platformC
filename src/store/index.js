import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {

    dataSource: "opensea"//数据源

}

export default new Vuex.Store({
    state,
    actions,
    mutations
})