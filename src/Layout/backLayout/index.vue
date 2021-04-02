<template>
  <back-header />
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

<script>
import BackHeader from '@/components/Header.vue'
import BackTitle from '@/Layout/backLayout/Title.vue'
import BackMenu from '@/Layout/backLayout/Menu.vue'
import BackFooter from '@/components/Footer.vue'
export default {
  components: {
    BackHeader,
    BackTitle,
    BackMenu,
    BackFooter
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>