<template>
  <div class="container mb25">
    <!-- 面包屑 -->
    <p class="mt20">
      <a class="gray6" href="">首页</a> >
      <a href="" class="gray6">个人中心</a> > <a href="">实名认证</a>
    </p>
    <div class="container mt20">
      <!-- 菜单区域 -->
      <front-personal-layout-menu />
      <!-- 内容区域 -->
      <router-view />
    </div>
  </div>
</template>

<script>
import FrontPersonalLayoutMenu from '@/Layout/frontPersonalLayout/Menu.vue'
export default {
  components: {
    FrontPersonalLayoutMenu
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>