import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/tareas-crud',
      name: 'tareas-crud',
      component: () => import(/* webpackChunkName: "tareas-crud" */ './views/Tareas-crud.vue')
    },
    {
      path: '*',
      name: '404',
      component: () => import(/* webpackChunkName: "404" */ './views/404.vue')

    }
  ]
})
