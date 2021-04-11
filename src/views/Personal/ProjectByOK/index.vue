<template>
  <div class="manager_content">
    <div class="manager_step">
      <span class="title block">已拍下</span>
    </div>
    <div class="manager_list">
      <table class="mt20 line_none">
        <thead>
          <tr>
            <th width="35%">竞拍详情</th>
            <th width="20%">价格</th>
            <th width="15%">状态</th>
            <th width="20%">操作</th>
          </tr>
        </thead>
      </table>
      <table class="mt20" width="100%" v-for="item in list" :key="item.AuctionProjectID">
        <thead>
          <tr>
            <th class="textL" width="100%" colspan="5">结束时间：<span class="endTime">{{ item.ActualBidEndDateParse }}</span></th>
          </tr>
        </thead>
        <tbody>
          <tr class="top">
            <td class="v-m" width="35%" rowspan="3">
              <router-link :to="'/auction/detail?ID=' + item.AuctionProjectID">
                <img
                  class="p-img mr10 fl col-lg-4"
                  :src="item.Image"
                  width="120"
                  alt=""
                />
                <p class="block textL fl title col-lg-8" target="_blank">
                  {{ item.NoticeTitle }}
                </p>
              </router-link>
            </td>
            <td class="v-m" width="20%">
              <div class="t-l title textL">
                房价：<span class="p-price">{{ item.MaxBidMoneyParse }}</span>元
              </div>
            </td>
            <td class="v-m red" width="15%">待支付</td>
            <td class="v-m operate" width="20%">
              <span class="btn btn-default" href="">线下支付</span>
            </td>
          </tr>
          <tr class="top">
            <td class="v-m" width="15%">
              <div class="t-l title textL">
                佣金：<span class="p-price">{{ item.CommissionMoneyParse }}</span>元
              </div>
            </td>
            <td class="v-m" width="15%">
              <span class="red" v-if="item.IsPayCommission === 0">待支付</span>
              <span class="red" v-else>已支付</span>
            </td>
            <td class="v-m operate" width="20%">
              <router-link v-if="item.IsPayCommission === 0" class="btn btn-danger" :to="'/auction/payByCommission?TransactionID=' + item.TransactionID + '&AuctionProjectID=' + item.AuctionProjectID + '&Money=' + item.PlatformServiceFee">立即付款</router-link>
            </td>
          </tr>
          <tr class="top">
            <td class="v-m" width="15%">
              <div class="t-l title textL">
                软件服务费：<span class="p-price">{{ item.PlatformServiceFeeParse }}</span>元
              </div>
            </td>
            <td class="v-m" width="15%">
              <span class="red" v-if="item.IsPayPlatformServiceFee === 0">待支付</span>
              <span class="red" v-else>已支付</span>
            </td>
            <td class="v-m operate" width="20%">
              <router-link v-if="item.IsPayCommission === 0" class="btn btn-danger" :to="'/auction/payByPlatformServiceFee?TransactionID=' + item.TransactionID + '&AuctionProjectID=' + item.AuctionProjectID + '&Money=' + item.PlatformServiceFee">立即付款</router-link>
            </td>
          </tr>
          <tr class="bottom">
            <td class="v-m line_none" colspan="2" width="65%">
              <div class="t-l col-lg-4 fl title textL">保证金：{{ item.EnteryFeeParse }}元</div>
            </td>
            <td class="v-m line_none" width="15%">{{ item.PayDate ? "已支付" : "未支付" }}</td>
            <td class="v-m operate" width="15%" style="border-left: none"></td>
          </tr>
        </tbody>
      </table>
      <div class="page-wrap">
        <div class="ui-pager">
          <a class="ui-pager-current">1</a>
          <a>2</a>
          <a>3</a>
          <a>4</a>
          <a>5</a>
          <span>...</span>
          <a>150</a>
          <a class="ui-pager-next">下一页</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import { projectByOKList } from "@/service/personal";
import { getDicList } from "@/service/common";
import { number_format, parseDate } from "@/utils/utils";
import moment from "moment";
export default defineComponent({
  setup() {
    let state = reactive({
      list: [],
      dicList: [],
    });
    onMounted(async () => {
      // 获取数据字典
      try {
        const params = {
          SubTypeCode: "2062,2063",
        };
        const dicRes = await getDicList(params);
        const param = {
          index: 1,
        };
        const res = await projectByOKList(param);
        console.log("res", res)
        res.data.data.Value.forEach(item => {
          // 保证金
          item.EnteryFeeParse = number_format(item.EnteryFee || 0, 2)
          // 成交时间
          item.ActualBidEndDateParse = moment(Number(parseDate(item.ActualBidEndDate))).format("yyyy-MM-DD HH:MM:ss")
          // 房价
          item.MaxBidMoneyParse = number_format(item.MaxBidMoney || 0, 2)
          // 平台服务费
          item.PlatformServiceFeeParse = number_format(item.PlatformServiceFee || 0, 2)
          // 佣金
          item.CommissionMoneyParse = number_format(String(item.MaxBidMoney * (Number(item.CommissionMoney) / 100)), 2)
        });
        state.list = res.data.data.Value;
        state.dicList = dicRes.data.data;
      } catch (error) {
        console.log("请求错误");
      }
    });

    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>
</style>