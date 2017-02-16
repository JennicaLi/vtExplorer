// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import  vueResource from 'vue-resource'
Vue.use(vueResource);
// import store from './vuex/store'

import routes from './routes'

const router=new VueRouter({routes})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App },

})
