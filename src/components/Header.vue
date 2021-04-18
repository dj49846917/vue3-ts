<template>
  <header class="top">
    <div class="container">
      <p class="fl gray9 time">早上好，欢迎来到荣投地产！</p>
      <p class="fr">
        <span class="yellow tell">服务热线：023-63080760</span>&emsp;&emsp;
        <span v-if="!isLogin">
          <span>{{ userInfo.LoginUserInfo.NickName }}</span>
          &emsp;| &emsp;
          <span @click="closeApp()" class="offBtn">退出</span>
        </span>
        <span v-else>
          <a href="#"><span>立即登录</span></a>
          &emsp;| &emsp;
          <a href="#"><span>免费注册</span></a>
        </span>
      </p>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Cookies from "js-cookie";
import { CookieConfig } from '@/constant/config';
import router from '@/router';
export default defineComponent({
  props: ['isLogin', 'userInfo'],
  setup() {
    // 退出
    const closeApp = () => {
      Cookies.remove(CookieConfig.USER_INFO)
      router.push("/login")
    }
    
    return {
      closeApp
    };
  },
});
</script>

<style lang="scss" scoped>
.offBtn {
  cursor: pointer;
}
</style>