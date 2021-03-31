const routes = [
  {
    path: '/',
    component: () => import('@/Layout/frontLayout/index.vue'), //路由懒加载
    children: [ // 首页
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home/index.vue')
      },
    ]
  }
]

export default routes