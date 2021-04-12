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
      { // 登录
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login/index.vue')
      },
      { // 注册
        path: '/register',
        name: 'Register',
        component: () => import('@/views/Login/Register.vue')
      },
      { // 忘记密码
        path: '/forgetpwd',
        name: 'ForgetPwd',
        component: () => import('@/views/Login/ForgetPwd.vue')
      },
      { // 资产拍卖
        path: '/auction',
        name: 'Auction',
        component: () => import('@/views/AssetAuction/index.vue')
      },
      { // 资产拍卖详情
        path: '/auction/detail',
        name: 'AuctionDetail',
        component: () => import('@/views/AssetAuction/AssetAuctionDetail/index.vue')
      },
      { // 关于我们
        path: '/about',
        name: 'About',
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
          { // 添加银行卡
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
  },
  { // 后台的模板
    path: '/dealer',
    redirect: '/dealer/companyinfo',  
    component: () => import('@/Layout/backLayout/index.vue'), 
    children: [
      { // 公司信息
        path: '/dealer/companyinfo',
        name: 'CompanyInfo',
        component: () => import('@/views/Dealer/CompanyInfo/index.vue')
      },
      { // 公司资质
        path: '/dealer/companyqualification',
        name: 'CompanyQualification',
        component: () => import('@/views/Dealer/CompanyQualification/index.vue')
      },
      { // 联系信息
        path: '/dealer/contactinfo',
        name: 'ContactInfo',
        component: () => import('@/views/Dealer/ContactInfo/index.vue')
      },
      { // 保证金信息
        path: '/dealer/entryinfo',
        name: 'EntryInfo',
        component: () => import('@/views/Dealer/EntryInfo/index.vue')
      },
      { // 标的物管理
        path: '/dealer/projectinfolist',
        name: 'ProjectInfoList',
        component: () => import('@/views/Dealer/ProjectInfoList/index.vue')
      },
      { // 标的物增加
        path: '/dealer/projectinfoadd',
        name: 'ProjectInfoAdd',
        component: () => import('@/views/Dealer/ProjectInfoAdd/index.vue')
      },
      { // 公告信息
        path: '/dealer/noticeinfo',
        name: 'NoticeInfo',
        component: () => import('@/views/Dealer/NoticeInfo/index.vue')
      },
    ]
  },
  { // 设置404页面
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('@/views/ErrorPage.vue')
  },
]

export default routes