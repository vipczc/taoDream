import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import register from '@/components/register'
import userIndex from '@/components/User/userIndex'
import userinfo from '@/components/User/userinfo'
import userList from '@/components/User/userList'
import bIndex from '@/components/Business/index'
import cIndex from '@/components/Clerk/index'

Vue.use(Router)

export default new Router({
  routes: [
    // 主入口
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    // 用户部分
    {
      path: '/user',
      name: 'userIndex',
      component: userIndex,
      children:[
        {
          path: '/',
          component: userinfo
        },
        {
          path: '/userList',
          component: userList
        }
      ]
    },
    //商家部分
    {
      path: '/bussiness',
      name: 'bIndex',
      component: bIndex
    },
    // 业务员部分
    {
      path: '/clerk',
      name: 'cIndex',
      component: cIndex
    }
  ]
})
