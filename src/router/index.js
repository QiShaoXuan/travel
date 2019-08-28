import Vue from 'vue'
import Router from 'vue-router'
import puji from '@/components/puji'
import mangu from '@/components/mangu'

Vue.use(Router)

export const routes = [
  // {
  //   path: '/',
  //   name: 'puji',
  //   component: puji
  // },
  {
    path: '/',
    name: 'mangu',
    label:'曼谷',
    component: mangu
  },
]

export default new Router({
  routes
})
