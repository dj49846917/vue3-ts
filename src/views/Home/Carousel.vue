<template>
  <div id="myCarousel" class="carousel slide banner cy_banner">
    <!-- 轮播（Carousel）指标 -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <!--<li data-target="#myCarousel" data-slide-to="2"></li>-->
    </ol>
    <!-- 轮播（Carousel）项目 -->
    <div class="carousel-inner">
      <div class="item active">
        <img :src="banner" alt="First slide" />
      </div>
      <div class="item">
        <img :src="banner2" alt="Second slide" />
      </div>
    </div>
    <!-- 轮播（Carousel）导航 -->
    <a class="carousel-control left" href="#myCarousel" data-slide="prev"
      >&lsaquo;</a
    >
    <a class="carousel-control right" href="#myCarousel" data-slide="next"
      >&rsaquo;</a
    >
  </div>
</template>

<script>
import { ENV_ICON } from '@/constant/index'
export default {
  setup() {
    return {
      banner: ENV_ICON.banner,
      banner2: ENV_ICON.banner2,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>