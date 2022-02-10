import VueI18n from 'vue-i18n'

import zh from './langs/zh'
import en from './langs/en'
import Vue from 'vue'

Vue.use(VueI18n)
const messages = {
    EN: en,
    ZH: zh
}


export default new VueI18n({
    locale: localStorage.getItem("language") || 'ZH',
    messages
})