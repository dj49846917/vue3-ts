<template>
  <div class="manager_header">
    <div class="container">
      <a href=""><img class="logo" :src="logo_user" /> </a>
      <div class="user_info fr">
        <p class="name"><i class="iconfont icon-dianpu"></i>九一融易资产</p>
        <div class="user_hidden" style="display: none">
          <div class="hide_fill"></div>
          <div class="hide_inner">
            <div class="user_item">
              <div class="user_label">商家编号</div>
              <div class="user_txt">10249326</div>
            </div>
            <div class="user_item">
              <div class="user_label">店铺名称</div>
              <div class="user_txt">九一融易资产</div>
            </div>
            <div class="user_item">
              <div class="user_label">公司名称</div>
              <div class="user_txt">九一融易资产管理有限公司</div>
            </div>
            <div class="info_line"></div>
            <div class="user_item">
              <div class="user_label">客服热线</div>
              <div class="user_txt">4006229068</div>
            </div>
            <div class="user_btns">
              <a class="user_btn" href="">店铺设置</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ENV_ICON } from '@/constant/index'
export default {
  setup() {
    return {
      logo_user: ENV_ICON.logo_user
    };
  },
};
</script>

<style lang="scss" scoped>
</style>