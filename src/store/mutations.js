import { GET_COLLECTIONS, GET_DATA_SOURCE } from './mutation-types'


export default {
    [GET_COLLECTIONS](state) {
        console.log(state);
    },

    [GET_DATA_SOURCE](state) {
        console.log(state);
        console.log("11111");
    }
}