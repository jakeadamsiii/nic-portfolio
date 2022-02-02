import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Work from './pages/Work.vue'
import Harrods from './pages/Harrods.vue'
import ASOS from './pages/ASOS.vue'
import NotFound from './pages/404.vue'
import App from './App.vue'

Vue.use(VueRouter);

const routes=[
  {path: '/', component: Home},
  {path: '/about', component: About},
  {path: '/work', component: Work},
  {path: '/harrods', component: Harrods},
  {path: '/asos', component: ASOS},
  {path: '*', component: NotFound}
];

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

const app = new Vue({
  el: '#app',
  router,
  render (h) {
    return h(App)
  }
})

