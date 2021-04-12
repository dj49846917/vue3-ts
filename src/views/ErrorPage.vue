<template>
  <div id="wrap">
    <div style="float: left">
      <img :src="no_pic" alt="404.life" width="910" />
    </div>
    <div class="text">
      <p style="color: #0086f0; font-size: 26px; margin-bottom: 6px">很抱歉</p>
      <p style="color: #0086f0; font-size: 22px; margin-bottom: 20px">
        您访问的页面出现错误了
      </p>
      <router-link
        to="/"
        style="color: #f68c22; font-size: 22px; text-decoration: none"
        >点击这里</router-link
      >
      <span style="color: #0086f0; font-size: 22px; margin-left: 15px"
        >返回首页</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ENV_ICON } from '@/constant/index'

export default defineComponent({
  setup() {
    return {
      no_pic: ENV_ICON.no_pic
    };
  },
});
</script>

<style scoped>
@media screen and (min-width: 768px) {
  #wrap {
    width: 1180px;
    height: 407px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -224px;
    margin-left: -590px;
    display: flex;
    align-items: center;
  }

  #wrap .text {
    float: right;
    position: relative;
    left: -125px;
    top: 10px;
  }
}

@media screen and (min-width: 320px) and (max-width: 767px) {
  html,
  body {
    height: 100%;
  }

  body {
    display: flex;
    align-items: center;
  }

  #wrap,
  #wrap img {
    width: 100%;
    margin-bottom: 60px;
  }

  #wrap .text {
    text-align: center;
  }
}
</style>