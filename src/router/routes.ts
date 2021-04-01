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
      { // 资产拍卖
        path: '/auction',
        name: 'auction',
        component: () => import('@/views/AssetAuction/index.vue')
      },
      { // 关于我们
        path: '/about',
        name: 'about',
        component: () => import('@/views/About/index.vue')
      },
      { // 个人中心
        path: '/personal',
        redirect: '/personal/projectbynopayentry',  
        component: () => import('@/Layout/frontPersonalLayout/index.vue'),
        children: [ 
          { // 待交保
            path: '/personal/projectbynopayentry',
            name: 'ProjectByNoPayEntry',
            component: () => import('@/views/Personal/ProjectByNoPayEntry/index.vue')
          },
          { // 我的参拍
            path: '/personal/projectbymy',
            name: 'ProjectByMy',
            component: () => import('@/views/Personal/ProjectByMy/index.vue')
          },
          { // 已拍下
            path: '/personal/projectbyok',
            name: 'ProjectByOK',
            component: () => import('@/views/Personal/ProjectByOK/index.vue')
          },
          { // 保证金
            path: '/personal/entrylist',
            name: 'EntryList',
            component: () => import('@/views/Personal/EntryList/index.vue')
          },
          { // 保证金详情
            path: '/personal/entrydetail',
            name: 'EntryDetail',
            component: () => import('@/views/Personal/EntryList/EntryDetail.vue')
          },
          { // 我的关注
            path: '/personal/noticelist',
            name: 'NoticeList',
            component: () => import('@/views/Personal/NoticeList/index.vue')
          },
          { // 实名认证
            path: '/personal/authentication',
            name: 'Authentication',
            component: () => import('@/views/Personal/Authentication/index.vue')
          },
          { // 银行卡
            path: '/personal/banklist',
            name: 'BankList',
            component: () => import('@/views/Personal/BankList/index.vue')
          },
          { // 银行卡
            path: '/personal/addbank',
            name: 'AddBank',
            component: () => import('@/views/Personal/BankList/AddBank.vue')
          },
          { // 完善信息
            path: '/personal/personalinfo',
            name: 'PersonalInfo',
            component: () => import('@/views/Personal/PersonalInfo/index.vue')
          },
          { // 密码修改
            path: '/personal/changepwd',
            name: 'ChangePwd',
            component: () => import('@/views/Personal/ChangePwd/index.vue')
          },
        ]
      },
    ]
  }
]

export default routes