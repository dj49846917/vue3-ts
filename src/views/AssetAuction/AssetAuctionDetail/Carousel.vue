<template>
  <div class="fl gPic_l col-lg-5">
    <div class="pic_center">
      <img :src="uploads5" />
    </div>
    <ul class="ofw mt10 mb10 pic_box">
      <li class="fl col-lg-3 col-xs-3 active">
        <a href=""><img :src="uploads1" /> </a>
      </li>
      <li class="fl col-lg-3 col-xs-3">
        <a href=""><img :src="uploads2" /> </a>
      </li>
      <li class="fl col-lg-3 col-xs-3">
        <a href=""><img :src="uploads3" /> </a>
      </li>
      <li class="fl col-lg-3 col-xs-3">
        <a href=""><img :src="uploads4" /> </a>
      </li>
    </ul>
    <div class="bg_pink">
      <p>
        <i class="iconfont icon-wallet"></i>成交后，需另付0.5%的软件服务费<a
          href=""
          >查看更多>></a
        >
      </p>
      <p>
        <i class="iconfont icon-wallet"></i>成交后，需另付5%的佣金<a href=""
          >查看更多>></a
        >
      </p>
    </div>
  </div>
</template>

<script>
import { ENV_ICON } from '@/constant/index'
export default {
  setup() {
    return {
      uploads1: ENV_ICON.uploads1,
      uploads2: ENV_ICON.uploads2,
      uploads3: ENV_ICON.uploads3,
      uploads4: ENV_ICON.uploads4,
      uploads5: ENV_ICON.uploads5,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>