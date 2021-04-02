<template>
  <div class="manager_content">
    <div class="manager_step">
      <span class="title">公司信息</span>
    </div>
    <div class="manager_main manager_main2">
      <span class="tip_text">商家信息</span>
      <form class="mt10">
        <div class="form_item ofw">
          <label class="form_name">公司名称：</label>
          <div class="form_value"><span>九一融易资产管理有限公司</span></div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">店铺名称：</label>
          <div class="form_value"><span>九一融易</span></div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">商家编号：</label>
          <div class="form_value"><span>10249326</span></div>
        </div>
      </form>
    </div>
    <div class="manager_main manager_main2 line_none">
      <span class="tip_text">结算银行信息</span>
      <form class="mt10">
        <div class="form_item ofw">
          <label class="form_name">开户名：</label>
          <div class="form_value"><span>九一融易资产管理有限公司</span></div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">开户行支行名称：</label>
          <div class="form_value">
            <span>中国光大银行重庆分行星光支行</span>
          </div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">开户银行支行所在地：</label>
          <div class="form_value"><span>重庆渝北区天宫殿街道</span></div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">银行账号：</label>
          <div class="form_value"><span>78490188000189385</span></div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">银行支行联行号：</label>
          <div class="form_value"><span>303653000146</span></div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">银行开户许可证：</label>
          <div class="form_value">
            <div class="ofw">
              <ul class="updateP_list ofw">
                <li class="fl">
                  <img :src="uploads2" style="width: 100%" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ENV_ICON } from '@/constant/index'

export default {
  setup() {
    return {
      uploads2: ENV_ICON.uploads2
    };
  },
};
</script>

<style lang="scss" scoped>
</style>