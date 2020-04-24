// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Router from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import lazyload from 'vue-lazyload'
import infiniteScroll from 'vue-infinite-scroll'
import 'swiper/dist/css/swiper.css'
import './assets/css/reset.css'
import './assets/css/border.css'
import './assets/css/iconfont.css'
import store from './store'
Vue.use(VueAwesomeSwiper)
Vue.use(lazyload, {
  loading: 'static/images/morentu.jpg',
  attempt: 2
})
Vue.use(infiniteScroll)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.title || sessionStorage.getItem('userinfo')) {
    document.title = to.meta.title
  }
  const requireAuth = to.meta.requireAuth
  // 判断该路由是否需要登录权限
  if (requireAuth) {
    if (window.localStorage.getItem('userinfo') || to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
// 解决【vue-router】"Uncaught (in promise) undefined"问题 先引入vue-router
const routerMethods = ['push', 'replace']
routerMethods.forEach(method => {
  const originalCall = Router.prototype[method]
  Router.prototype[method] = function (location, onResolve, onReject) {
    if (onResolve || onReject) {
      return originalCall.call(this, location, onResolve, onReject)
    }
    return originalCall.call(this, location).catch(err => err)
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
