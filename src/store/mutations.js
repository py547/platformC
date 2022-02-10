import { GET_COLLECTIONS, GET_DATA_SOURCE, SET_DATA_SOURCE, SET_LANGUAGE, SET_LINE_DATA } from './mutation-types'
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
    },
    [SET_LANGUAGE](state, language) {
        setStore("language", language)
        state.language = language
    },
    [SET_LINE_DATA](state, lineData) {
        state.lineData = lineData;
    },
}