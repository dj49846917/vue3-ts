<template>
  <div class="manager_content">
    <div class="manager_step">
      <span class="title">公司资质</span>
    </div>
    <div class="manager_main manager_main2 line_none">
      <form class="mt10">
        <div class="form_item ofw">
          <label class="form_name">公司名称：</label>
          <div class="form_value">
            <span>{{ DealerInfo.CompanyName }}</span>
          </div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">注册号(营业执照号)：</label>
          <div class="form_value">
            <span> {{ DealerInfo.BusinessLicense }}</span>
          </div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">法定代表人姓名：</label>
          <div class="form_value">
            <span>{{ DealerInfo.LegalPersonName }}</span>
          </div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">法定代表人证件类型：</label>
          <div class="form_value">
            <span>{{ LegalPersonCertificateType }}</span>
          </div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">证件号码：</label>
          <div class="form_value">
            <span>{{ DealerInfo.LegalPersonCertificateNumber }}</span>
          </div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">有效期：</label>
          <div class="form_value">
            <span>{{ CertificateExpiryDate }}</span>
          </div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">法人身份证电子版：</label>
          <div class="form_value">
            <div class="ofw">
              <ul class="updateP_list ofw">
                <li
                  class="fl"
                  v-for="(item, index) in BankOpenLicence"
                  :key="index"
                >
                  <img :src="item.FilePath" style="width: 100%" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">注册所在地：</label>
          <div class="form_value">
            <span>{{ DealerInfo.RegisteredAddress }}</span>
          </div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">成立日期：</label>
          <div class="form_value">
            <span>{{ RegisteredDate }}</span>
          </div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">营业期限：</label>
          <div class="form_value">
            <span>{{ BusinessExpiryDate }}</span>
          </div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">注册资本：</label>
          <div class="form_value">
            <span>{{ RegisteredCapital }}万元</span>
          </div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">经营范围：</label>
          <div class="form_value">
            <span>{{ DealerInfo.BusinessScope }}</span>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Cookies from "js-cookie";
import { CookieConfig } from "@/constant/config";
import { UserInfo } from "@/types/types";
import {
  computed,
  ComputedRef,
  defineComponent,
  onMounted,
  reactive,
  toRefs,
} from "vue";
import { dicCodeToDicName, parseDate } from "@/utils/utils";
import { getDicList } from "@/service/common";
import moment from "moment";

export default defineComponent({
  setup() {
    let userInfo: UserInfo = reactive({
      DealerInfo: null,
      LoginUserInfo: {},
    });
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

    let state = reactive({
      dicList: [],
      LegalPersonCertificateType: ""
    });
    // 初始化
    onMounted(async () => {
      try {
        const params = {
          SubTypeCode: "2067"
        }
        const res = await getDicList(params);
        state.dicList = res.data.data;
        // 证件类型
        state.LegalPersonCertificateType = dicCodeToDicName(res.data.data, userInfo.DealerInfo?.LegalPersonCertificateType)
      } catch (error) {
        console.log("error", error);
      }
    });

    // 有效期
    let CertificateExpiryDate: ComputedRef<string> = computed(() => {
      let end = userInfo.DealerInfo?.CertificateExpiryDate
        ? moment(
            Number(parseDate(userInfo.DealerInfo?.CertificateExpiryDate))
          ).format("YYYY-MM-DD")
        : "长期";
      let start = userInfo.DealerInfo?.CertificateStartDate
        ? moment(
            Number(parseDate(userInfo.DealerInfo?.CertificateStartDate))
          ).format("YYYY-MM-DD")
        : "";
      return `${start} 至 ${end}`;
    });
    // 成立日期
    let RegisteredDate: ComputedRef<string> = computed(() => {
      return moment(
        Number(parseDate(userInfo.DealerInfo?.RegisteredDate))
      ).format("YYYY-MM-DD");
    });
    // 营业期限
    let BusinessExpiryDate: ComputedRef<string> = computed(() => {
      let end = userInfo.DealerInfo?.BusinessExpiryDate
        ? moment(
            Number(parseDate(userInfo.DealerInfo?.BusinessExpiryDate))
          ).format("YYYY-MM-DD")
        : "长期";
      let start = userInfo.DealerInfo?.BusinessStartDate
        ? moment(
            Number(parseDate(userInfo.DealerInfo?.BusinessStartDate))
          ).format("YYYY-MM-DD")
        : "";
      return `${start} 至 ${end}`;
    });
    // 注册资本
    let RegisteredCapital: ComputedRef<string> = computed(() => {
      return `${Number(userInfo.DealerInfo?.RegisteredCapital) / 10000}`;
    });

    return {
      ...toRefs(userInfo),
      BankOpenLicence,
      RegisteredDate,
      BusinessExpiryDate,
      CertificateExpiryDate,
      RegisteredCapital,
      ...toRefs(state)
    };
  },
});
</script>

<style lang="scss" scoped>
</style>