import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import Login from '../views/login/Login.vue'
import adminIndex from '../views/admin/index.vue'
import workerIndex from '../views/worker/index.vue'

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
        path: 'addMaintainSheet',
        component: () => import('../views/admin/childCpn/addMaintainSheet.vue') //懒加载组件
      },
      {
        path: 'equipSheet',
        component: () => import('../views/admin/childCpn/equipSheet.vue') //懒加载组件
      },
      {
        path: 'maintainSheet',
        component: () => import('../views/admin/childCpn/maintainSheet.vue') //懒加载组件
      },
      {
        path: 'checkall',
        component: () => import('../views/admin/childCpn/checkall.vue') //懒加载组件
      }
    ]
  },
  {
    path: '/worker',
    component: workerIndex, //懒加载组件,
    children: [
      {
        path: '',
        redirect: '/worker/index'//缺省时候重定向到/home/news
      },
      {
        path: 'index',//子嵌套路由 无须加/
        component: () => import('../views/worker/childCpn/worker1.vue') //懒加载组件
      },
      {
        path: 'worker1',//子嵌套路由 无须加/
        component: () => import('../views/worker/childCpn/worker1.vue') //懒加载组件
      },
      {
        path: 'worker2',
        component: () => import('../views/worker/childCpn/worker2.vue') //懒加载组件
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
