import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import Login from '../views/login/Login.vue'
import adminIndex from '../views/admin/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/login/Register.vue') //懒加载组件
  },
  {
    path: '/admin',
    component: adminIndex,
    children: [
      {
        path: '',
        redirect: '/admin/index'//缺省时候重定向到/home/news
      },
      {
        path: 'index',//子嵌套路由 无须加/
        component: () => import('../views/admin/childCpn/index.vue') //懒加载组件
      },
      {
        path: 'addEquipSheet',
        component: () => import('../views/admin/childCpn/addEquipSheet.vue') //懒加载组件
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
