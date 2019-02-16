//引入共享对象
require("../../global/GlobalShare")
import Vue from 'vue'
import App from './index.vue'
import router from './router'
import store from './store'
// import store from '../../global/store'
import CusTool from '../../global/custool'
Vue.config.productionTip = false;
CusTool.popup = 2;
console.log(CusTool.popup)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#index');