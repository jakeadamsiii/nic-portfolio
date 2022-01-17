import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Work from './pages/Work.vue'
import Contact from './pages/Contact.vue'
import App from './App.vue'

Vue.use(VueRouter);

const routes=[
  {path: '/', component: Home},
  {path: '/about', component: About},
  {path: '/work', component: Work},
  {path: '/contact', component: Contact},
  
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

