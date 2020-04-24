import Vue from 'vue'
import Router from 'vue-router'
import shouye from '@/pages/shouye/shouye'
import mianfei from '@/pages/mianfei/mianfei'
import chaojifan from '@/pages/chaojifan/chaojifan'
import order from '@/pages/order/order'
import login from '@/pages/login/login'
import wode from '@/pages/wode/wode'
import huodongxiangqing from '@/pages/huodongxiangqing/huodongxiangqing'
import shiyongxiangqing from '@/pages/shiyongxiangqing/shiyongxiangqing'
import search from '@/pages/search/search'
import wodeshoucang from '@/pages/wodeshoucang/wodeshoucang'
import shezhi from '@/pages/shezhi/shezhi'
import xiaoxizhongxin from '@/pages/xiaoxizhongxin/xiaoxizhongxin'
import zhuce from '@/pages/zhuce/zhuce'
import bangzhuzhongxin from '@/pages/bangzhuzhongxin/bangzhuzhongxin'
import qianggoudingdan from '@/pages/qianggoudingdan/qianggoudingdan'
import shangxinyugao from '@/pages/shangxinyugao/shangxinyugao'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shouye',
      component: shouye
    },
    {
      path: '/mianfei',
      name: 'mianfei',
      component: mianfei
    },
    {
      path: '/chaojifan',
      name: 'chaojifan',
      component: chaojifan
    },
    {
      path: '/order',
      name: 'order',
      component: order,
      meta: {
        title: '我的订单',
        requireAuth: true // 是否需要判断是否登录
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/wode',
      name: 'wode',
      component: wode
    },
    {
      path: '/huodongxiangqing/:id',
      name: 'huodongxiangqing',
      component: huodongxiangqing
    },
    {
      path: '/shiyongxiangqing/:id',
      name: 'shiyongxiangqing',
      component: shiyongxiangqing
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/wodeshoucang',
      name: 'wodeshoucang',
      component: wodeshoucang
    },
    {
      path: '/shezhi',
      name: 'shezhi',
      component: shezhi
    },
    {
      path: '/xiaoxizhongxin',
      name: 'xiaoxizhongxin',
      component: xiaoxizhongxin
    },
    {
      path: '/zhuce',
      name: 'zhuce',
      component: zhuce
    },
    {
      path: '/bangzhuzhongxin',
      name: 'bangzhuzhongxin',
      component: bangzhuzhongxin
    },
    {
      path: '/qianggoudingdan',
      name: 'qianggoudingdan',
      component: qianggoudingdan
    },
    {
      path: '/shangxinyugao',
      name: 'shangxinyugao',
      component: shangxinyugao
    }
  ],
  // 每次路由跳转都回到页面顶部：
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
