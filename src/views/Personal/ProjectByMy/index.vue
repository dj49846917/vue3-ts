<template>
  <div class="manager_content">
    <div class="manager_step">
      <span class="title block">我的参拍</span>
    </div>
    <div class="manager_list">
      <table class="mt20 line_none">
        <thead>
          <tr>
            <th width="55%">竞拍详情</th>
            <th width="22%">状态</th>
            <th width="23%">操作</th>
          </tr>
        </thead>
      </table>
      <table class="mt20" v-for="item in list" :key="item.AuctionProjectID">
        <thead>
          <tr>
            <th class="textL" width="100%" colspan="4" v-if="item.ProjectStatus === 2062001">预计开始时间：{{ item.BidStartDateParse }}</th>
            <th class="textL" width="100%" colspan="4" v-else-if="item.ProjectStatus === 2062002">预计结束时间：{{ item.BidEndDateParse }}</th>
            <th class="textL" width="100%" colspan="4" v-else>成交时间：{{ item.BidEndDateParse }}</th>
          </tr>
        </thead>
        <tbody>
          <tr class="top">
            <td class="v-m" colspan="2" width="55%">
              <img
                class="p-img fl mr10 col-lg-2"
                :src="item.Image"
                width="60"
                alt=""
              />
              <router-link href="" class="fl block col-lg-6 textL title" :to="'/auction/detail?ID=' + item.AuctionProjectID"
                >{{ item.NoticeTitle }}</router-link
              >
              <div class="t-l col-lg-4 fr title textR">
                当前价：<span class="p-price">{{ item.MaxBidMoneyParse }}</span> 元
              </div>
            </td>
            <td class="v-m green" width="15%" v-if="item.ProjectStatus === 2062001">{{ item.ProjectStatus }}</td>
            <td class="v-m red" width="15%" v-else-if="item.ProjectStatus === 2062002">{{ item.ProjectStatus }}</td>
            <td class="v-m" width="15%" v-else>{{ item.ProjectStatus }}</td>
            <td class="v-m operate" width="23%">
              <router-link v-if="item.ProjectStatus === 2062002" class="btn btn-danger" :to="'/auction/detail?ID=' + item.AuctionProjectID">立即出价</router-link>
              <router-link v-else class="btn btn-default" :to="'/personal/entrydetail?EntryID=' + item.EntryID">查看保证金</router-link>
            </td>
          </tr>
          <tr class="bottom">
            <td class="v-m line_none" colspan="2" width="55%">
              <div class="t-l col-lg-4 fl title textL">保证金：</div>
              <div class="t-l col-lg-4 fr title textR">
                <span class="p-price">{{ item.EnteryFeeParse }}</span> 元
              </div>
            </td>
            <td class="v-m line_none" width="22%">已支付</td>
            <td class="v-m operate line_none" width="23%"></td>
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
import { projectByMyList } from "@/service/personal";
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
        const res = await projectByMyList(param);
        console.log("res", res)
        res.data.data.Value.forEach((item: { EnteryFeeParse: string; EnteryFee: string; MaxBidMoneyParse: string; MaxBidMoney: string; BidStartDateParse: string; BidStartDate: string; BidEndDateParse: string; BidEndDate: string; }) => {
          // 保证金
          item.EnteryFeeParse = number_format(item.EnteryFee, 2)
          // 当前价
          item.MaxBidMoneyParse = number_format(item.MaxBidMoney, 2)
          // 开始时间
          item.BidStartDateParse = moment(Number(parseDate(item.BidStartDate))).format("yyyy-MM-DD HH:MM:ss")
          // 结束时间
          item.BidEndDateParse = moment(Number(parseDate(item.BidEndDate))).format("yyyy-MM-DD HH:MM:ss")
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