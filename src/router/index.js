import Vue from 'vue'
import Router from 'vue-router'
import puji from '@/components/puji'
import mangu from '@/components/mangu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'puji',
      component: puji
    },
     {
      path: '/mangu',
      name: 'mangu',
      component: mangu
    },
  ]
})
