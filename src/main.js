import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Work from './pages/Work.vue'
import NotFound from './pages/404.vue'
import App from './App.vue'

Vue.use(VueRouter);

const routes=[
  {path: '/', component: Home},
  {path: '/about', component: About},
  {path: '/work', component: Work},
  {path: '*', component: NotFound}
  
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

const app = new Vue({
  el: '#app',
  router,
  render (h) {
    return h(App)
  }
})

