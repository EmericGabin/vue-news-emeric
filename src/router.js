import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import Single from './pages/Single.vue'
import About from './pages/About.vue'
Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/single/:id', component: Single },
    { path: '/about', component: About }
]

const router = new VueRouter({
    mode: 'history',
    hash: false,
    routes // raccourci pour `routes: routes`
  })

export default router