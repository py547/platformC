import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import * as ElIcons from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import router from './router'
import store from './store'
import i18n from "./i18n/i18n.js";

const app = createApp(App)
for (const name in ElIcons) {
    app.component(name, (ElIcons)[name])
}

app.use(ElementPlus).use(router).use(store).use(i18n).mount('#app')