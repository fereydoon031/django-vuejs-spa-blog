import { createRouter, createWebHistory } from 'vue-router'
import Store             from '../store'
import HomeView          from '../views/HomeView.vue'
import AboutView         from '../views/AboutView.vue'
import ProfileView       from '../views/ProfileView.vue'
import AddArticleView    from '../views/AddArticleView.vue'
import LoginView         from '../views/LoginView.vue'
import LogoutView        from '../views/LogoutView.vue'
import RegisterationView from '../views/RegisterationView.vue'
import ArticleView       from '../views/ArticleView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/article/:slug',
    name: 'article',
    component: ArticleView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta: { requiresAuth: true }
  },
  {
    path: '/add-article',
    name: 'add-article',
    component: AddArticleView,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: { requiresRedirect: true }
  },
  {
    path: '/logout',
    name: 'logout',
    component: LogoutView,
    meta: { requiresAuth: true }

  },
  {
    path: '/register',
    name: 'register',
    component: RegisterationView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!Store.state.isAuthenticated) {
      next('/login')
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresRedirect)){
    if (Store.state.isAuthenticated) {
      next('/profile')
    } else {
      next()
    }
  }
  else {
    next() // make sure to always call next()!
  }
})
export default router
