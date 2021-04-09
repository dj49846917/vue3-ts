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
          <div class="form_value">
            <span>{{ DealerInfo.CompanyName }}</span>
          </div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">店铺名称：</label>
          <div class="form_value">
            <span>{{ DealerInfo.DealerName }}</span>
          </div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">商家编号：</label>
          <div class="form_value">
            <span>{{ DealerInfo.DealerCode }}</span>
          </div>
        </div>
      </form>
    </div>
    <div class="manager_main manager_main2 line_none">
      <span class="tip_text">结算银行信息</span>
      <form class="mt10">
        <div class="form_item ofw">
          <label class="form_name">开户名：</label>
          <div class="form_value">
            <span>{{ DealerInfo.BankAccountName }}</span>
          </div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">开户行支行名称：</label>
          <div class="form_value">
            <span>{{ DealerInfo.OpenSubBankName }}</span>
          </div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">开户银行支行所在地：</label>
          <div class="form_value">
            <span>{{ DealerInfo.OpenSubBankAddress }}</span>
          </div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">银行账号：</label>
          <div class="form_value">
            <span>{{ DealerInfo.BankAccountNo }}</span>
          </div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">银行支行联行号：</label>
          <div class="form_value">
            <span>{{ DealerInfo.SubBankNo }}</span>
          </div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">银行开户许可证：</label>
          <div class="form_value">
            <div class="ofw">
              <ul class="updateP_list ofw">
                <li class="fl" v-for="(item, index) in BankOpenLicence" :key="index">
                  <img :src="item.FilePath" style="width: 100%" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { CookieConfig } from "@/constant/config";
import Cookies from "js-cookie";
import { UserInfo } from "@/types/types";
import { defineComponent, toRefs } from "vue";
export default defineComponent({
  setup() {
    let userInfo: UserInfo = {
      DealerInfo: null,
      LoginUserInfo: {},
    };
    try {
      userInfo = JSON.parse(Cookies.get(CookieConfig.USER_INFO) as string);
    } catch (error) {
      console.log("error", error);
    }
    let BankOpenLicence = [];
    try {
      BankOpenLicence = JSON.parse(userInfo.DealerInfo?.BankOpenLicence);
    } catch (error) {
      console.log("error2", error);
    }
    return {
      ...toRefs(userInfo),
      BankOpenLicence,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>