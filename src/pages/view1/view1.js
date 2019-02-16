//引入共享对象
require("../../global/GlobalShare")
import Vue from 'vue'
import App from './view1.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false;
import CusTool from '../../global/custool'
console.log(CusTool.popup)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#view1');    