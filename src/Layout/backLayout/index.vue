<template>
  <back-header :isLogin="isLogin" :userInfo="userInfo" />
  <back-title />
  <div class="container mb25">
    <!-- 面包屑 -->
    <p class="mt20">
      <a class="gray6" href="">首页</a> > <a href="" class="gray6">商家后台</a> > <a href="">公司信息</a> 
    </p>
    <div class="container mt20">
      <back-menu />
      <router-view />
    </div>
  </div>
  <back-footer />
</template>

<script lang="ts">
import BackHeader from '@/components/Header.vue'
import BackTitle from '@/Layout/backLayout/Title.vue'
import BackMenu from '@/Layout/backLayout/Menu.vue'
import BackFooter from '@/components/Footer.vue'
import { defineComponent, reactive, ref } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import { UserInfo } from '@/types/types'
import Cookies from 'js-cookie'
import { CookieConfig } from '@/constant/config'

export default defineComponent({
  components: {
    BackHeader,
    BackTitle,
    BackMenu,
    BackFooter
  },
  setup() {
    const route = useRoute();
    const isLogin = ref(false)
    let userInfo: UserInfo = reactive({
      DealerInfo: null,
      LoginUserInfo: {},
    });
    if(route.path === "/login" || route.path === "/register") {
      isLogin.value = true
    } else {
      isLogin.value = false
    }

    try {
      if(Cookies.get(CookieConfig.USER_INFO)) {
        userInfo = JSON.parse(Cookies.get(CookieConfig.USER_INFO) as string);
      }
    } catch (error) {
      console.log("error", error);
    }


    // 监听路由值得变化
    onBeforeRouteUpdate((to): void => {
      console.log("to.path", to.path)
      if(to.path === "/login" || to.path === "/register") {
        isLogin.value = true
      } else {
        isLogin.value = false
      }
    });
    return {
      isLogin,
      userInfo
    };
  },
});
</script>

<style lang="scss" scoped>
</style>