import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import {
  routes
} from './router'
import store from './index';

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  console.log('global beforeEach');
  next();
});

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
