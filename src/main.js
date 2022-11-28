import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Work from './pages/Work.vue'
import Harrods from './pages/Harrods.vue'
import ASOS from './pages/ASOS.vue'
import Maris from './pages/Maris.vue'
import Made from './pages/Made.vue'
import Sani from './pages/Sani.vue'
import Soho from './pages/Soho.vue'
import Sivvi from './pages/Sivvi.vue'
import Apes from './pages/Apes.vue'
import NotFound from './pages/404.vue'
import App from './App.vue'

Vue.use(VueRouter);

const routes=[
  {path: '/', component: Home},
  {path: '/about', component: About},
  {path: '/work', component: Work},
  {path: '/harrods', component: Harrods},
  {path: '/asos', component: ASOS},
  {path: '/d-maris-bay', component: Maris},
  {path: '/made', component: Made},
  {path: '/sani-resorts', component: Sani},
  {path: '/soho-house', component: Soho},
  {path: '/sivvi', component: Sivvi},
  {path: '/apes-hill', component: Apes},
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

