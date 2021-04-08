import router from '@/router/index'
import Cookie from 'js-cookie'

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // 说明登录
  const user = Cookie.get("userInfo")
  if (user) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      if(to.path !== '/') {
        next(`/login?redirect=${to.path}`)
      } else {
        next(`/login`)
      }
    }
  }
})