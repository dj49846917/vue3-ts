const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/Layout/frontLayout.vue'), //路由懒加载
  }
]

export default routes