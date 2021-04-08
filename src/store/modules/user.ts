interface stateProp {
  userInfo: {
    DealerInfo: null | object,
    LoginUserInfo: null | {
      [propName: string]: any
    }
  }
  
}

const state:stateProp = {
  userInfo: {
    DealerInfo: {},
    LoginUserInfo: null
  }
}

const mutations = {
  setUser: (state: { userInfo: stateProp }, userInfo: any) => {
    state.userInfo = userInfo
  },
}

const actions = {
  login({ commit }: any, data: { data: { user: object } }) {
    console.log("data", data)
    commit('setUser', data.data.user)
  }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
  }