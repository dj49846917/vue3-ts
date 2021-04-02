<template>
  <div class="container mb25">
    <!-- 面包屑 -->
    <p class="mt20">
      <a class="gray6" href="">首页</a> >
      <a href="" class="gray6">资产竞拍</a> > <a href="">资产竞拍详情</a>
    </p>
    <!-- 中间内容区域 -->
    <div class="pm_stage ofw">
      <div class="fl col-lg-10 pm_detail">
        <h1 class="title">
          <span class="g_tips">第一次</span
          >抚顺市开发区沈抚路亿丰中心69-19号-1-25房产
        </h1>
        <!-- 左上轮播 -->
        <asset-auction-detail-carousel />
        <!-- 中间根据不同的状态展示不同的数据 -->
        <asset-auction-detail-status-show />
      </div>
      <!-- 右边商家区域 -->
      <div class="fl col-lg-2 pm_sub">
        <p class="mt20">
          处置单位：<a href="" class="black">北京金铂顺昌拍卖有限公司</a>
        </p>
        <p class="mt10">联系方式：<a href="" class="black">01065246006</a></p>
        <p class="mt10">
          在线咨询：<a href="" class="btn-danger btn_sj">和我联系</a>
        </p>
      </div>
    </div>
    <!--拍卖流程-->
    <img class="mt20" :src="pro" style="width: 100%">
    <!-- 底部选项卡区域 -->
    <asset-auction-detail-tab />
  </div>
</template>

<script>
import { ENV_ICON } from '@/constant/index'
import AssetAuctionDetailCarousel from "@/views/AssetAuction/AssetAuctionDetail/Carousel.vue";
import AssetAuctionDetailStatusShow from "@/views/AssetAuction/AssetAuctionDetail/StatusShow.vue";
import AssetAuctionDetailTab from "@/views/AssetAuction/AssetAuctionDetail/Tab.vue";
export default {
  components: {
    AssetAuctionDetailCarousel,
    AssetAuctionDetailStatusShow,
    AssetAuctionDetailTab,
  },
  setup() {
    return {
      pro: ENV_ICON.pro
    };
  },
};
</script>

<style lang="scss" scoped>
</style>