<template>
  <!--banner-->
  <div id="myCarousel" class="carousel slide banner cy_banner">
    <!-- 轮播（Carousel）项目 -->
    <div class="carousel-inner">
      <div class="item active">
        <img :src="banner3" alt="First slide" />
      </div>
    </div>
  </div>
  <!--公司简介-->
  <p class="text-center f18 about_title">公司简介</p>
  <div class="container">
    <p class="text-center mt20 gray6 about_intro">
      重庆荣投房地产经纪有限公司成立于2014年5月12日，注册资金5000万，以资产管理、房屋销售、网络营销策划等业务为主，着力
      “资产处置+互联网”
      ，通过资产交易、资产管理、资产处置及运营相结合，通过资源整合和专业化优势，有效整合产业链中各类要素，打造一站式
      资产处置交易平台。
    </p>
  </div>
  <div class="about_bg">
    <p class="text-center f18 about_title">企业文化</p>
    <div class="container">
      <img :src="about_info" width="90%" />
    </div>
  </div>
  <p class="text-center f18 about_title" style="display: none">员工风采</p>
  <div class="container about_staff" style="display: none">
    <div class="main ofw">
      <div class="top col-lg-12">
        <div class="col-lg-6 fl"></div>
        <div class="col-lg-6 fr"></div>
      </div>
      <ul class="ofw col-lg-12 staff">
        <li class="col-md-2 col-xs-4 mt20">
          <div class="border">
            <img :src="liuli" width="100%" />
            <span class="textC">客户经理 刘利</span>
          </div>
        </li>
        <li class="col-md-2 col-xs-4 mt20">
          <div class="border">
            <img :src="about_info" width="100%" />
            <span class="textC">客户经理 刘利</span>
          </div>
        </li>
        <li class="col-md-2 col-xs-4 mt20">
          <div class="border">
            <img :src="about_info" width="100%" />
            <span class="textC">客户经理 刘利</span>
          </div>
        </li>
        <li class="col-md-2 col-xs-4 mt20">
          <div class="border">
            <img :src="about_info" width="100%" />
            <span class="textC">客户经理 刘利</span>
          </div>
        </li>
        <li class="col-md-2 col-xs-4 mt20">
          <div class="border">
            <img :src="about_info" width="100%" />
            <span class="textC">客户经理 刘利</span>
          </div>
        </li>
        <li class="col-md-2 col-xs-4 mt20">
          <div class="border">
            <img :src="about_info" width="100%" />
            <span class="textC">客户经理 刘利</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ENV_ICON } from '@/constant/index'
export default {
  setup() {
    return {
      banner3: ENV_ICON.banner3,
      about_info: ENV_ICON.about_info,
      liuli: ENV_ICON.liuli,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>