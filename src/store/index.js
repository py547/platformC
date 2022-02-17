import { createStore } from 'vuex'
import mutations from './mutations'
import actions from './actions'

const state = {

    dataSource: "opensea",
    language: "EN",
    lineData: []
}

export default createStore({
    state,
    actions,
    mutations
})