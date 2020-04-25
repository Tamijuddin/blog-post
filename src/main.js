import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes.js'
import { IconsPlugin , BootstrapVue,BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false

const route = new VueRouter({
routes: Routes ,
mode:'history'
});


new Vue({
  render: h => h(App),
  router:route
}).$mount('#app')
