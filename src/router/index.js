import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import History from '../views/History.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Draw from '../views/Draw.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresLogin: false }
  },
  {
    path: '/history',
    name: 'History',
    component: History,
    meta: { requiresLogin: true }

  },
  {
    path: '/draw',
    name: 'Draw',
    component: Draw,
    meta: { requiresLogin: true }

  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresLogin: false }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { requiresLogin: false }

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  if (to.meta.requiresLogin) {
    // console.log(store.state.user)
    if (!store.state.isAuthenticated) {
      next({ name: 'Login' });
    } else {
      next();
    }
  } else if (store.state.isAuthenticated) {
    if (to.name == 'Login' || to.name == 'Register') {
      next({ name: 'Home' });
    } else {
      next();
    }
  }
  else {
    next();
  }
});
export default router
