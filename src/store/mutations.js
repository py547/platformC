import { GET_COLLECTIONS, GET_DATA_SOURCE, SET_DATA_SOURCE } from './mutation-types'
import { setStore, getStore } from '../utils/storage';

export default {
    [GET_COLLECTIONS](state) {
        console.log(state);
    },

    [GET_DATA_SOURCE](state) {
        state.dataSource = getStore("data_source") ? getStore("data_source") : 'openSea';

    },
    [SET_DATA_SOURCE](state, dataSource) {
        state.dataSource = dataSource;
        setStore("data_source", dataSource)
    }
}