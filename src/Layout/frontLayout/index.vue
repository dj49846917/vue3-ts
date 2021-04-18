<template>
  <front-header :isLogin="isLogin" :userInfo="userInfo" />
  <front-search />
  <front-nav v-if="!isLogin" />
  <router-view />
  <front-footer />
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import FrontHeader from "@/components/Header.vue";
import FrontSearch from "@/Layout/frontLayout/Search.vue";
import FrontNav from "@/Layout/frontLayout/Nav.vue";
import FrontFooter from "@/components/Footer.vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { UserInfo } from "@/types/types";
import Cookies from "js-cookie";
import { CookieConfig } from "@/constant/config";
export default defineComponent({
  components: {
    FrontHeader,
    FrontSearch,
    FrontNav,
    FrontFooter,
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

<style scoped>
</style>