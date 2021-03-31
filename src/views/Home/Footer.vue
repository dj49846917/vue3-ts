<template>
  <ul class="ofw container icon_list mt35">
    <li class="col-lg-4 col-xs-4">
      <img class="fl" :src="icon1" />
      <div class="fl">
        <p class="f16">如实描述承诺</p>
        <p class="">发拍品时会履行实物描述义务</p>
      </div>
    </li>
    <li class="col-lg-4 col-xs-4">
      <img class="fl" :src="icon2" />
      <div class="fl">
        <p class="f16">保证金保障</p>
        <p class="">缴纳足额保证金来确保安全</p>
      </div>
    </li>
    <li class="col-lg-4 col-xs-4">
      <img class="fl" :src="icon3" />
      <div class="fl">
        <p class="f16">售后服务保障</p>
        <p class="">资深行业专家，提供深度服务，专业解答咨询</p>
      </div>
    </li>
  </ul>
</template>

<script>
import { ENV_ICON } from "@/constant/index";
export default {
  setup() {
    return {
      icon1: ENV_ICON.icon1,
      icon2: ENV_ICON.icon2,
      icon3: ENV_ICON.icon3
    };
  },
};
</script>

<style lang="scss" scoped>
</style>