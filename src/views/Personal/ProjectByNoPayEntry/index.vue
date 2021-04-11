<template>
  <div class="manager_content">
    <div class="manager_step">
      <span class="title block">待交保</span>
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
        <tbody>
          <tr class="top">
            <td class="v-m" colspan="2" width="55%">
              <img
                class="p-img fl mr10 col-lg-2"
                :src="item.Image"
                width="60"
                alt=""
              />
              <router-link
                :to="'/auction/detail?ID=' + item.AuctionProjectID"
                class="fl block col-lg-5 textL title"
                >{{ item.NoticeTitle }}</router-link
              >
              <div class="t-l col-lg-5 fr title textR">
                当前价：<span class="p-price">{{ item.MaxBidMoneyParse }}</span> 元
              </div>
            </td>
            <td
              class="v-m green"
              width="22%"
              v-if="item.ProjectStatus === 2062001"
            >
              {{ item.ProjectStatus }}
            </td>
            <td
              class="v-m red"
              width="22%"
              v-else-if="item.ProjectStatus === 2062002"
            >
              {{ item.ProjectStatus }}
            </td>
            <td class="v-m" width="22%" v-else>{{ item.ProjectStatus }}</td>
            <td class="v-m operate" width="23%"></td>
          </tr>
          <tr class="bottom">
            <td class="v-m line_none" colspan="2" width="55%">
              <div class="t-l col-lg-4 fl title textL">保证金：</div>
              <div class="t-l col-lg-4 fr title textR">
                <span class="p-price">{{ item.EnteryFeeParse }}</span> 元
              </div>
            </td>
            <td class="v-m red line_none" width="22%">{{ item.PayDate ? "已支付" : "未支付" }}</td>
            <td class="v-m operate line_none" width="23%">
              <router-link class="btn btn-danger" :to="'/auction/paybyentrysure?EntryID='+ item.EntryID + '&AuctionProjectID='+ item.AuctionProjectID">立即付款</router-link>
            </td>
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
import { noPayEntryList } from "@/service/personal";
import { getDicList } from "@/service/common";
import { number_format } from "@/utils/utils";
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
          SubTypeCode: "2062",
        };
        const dicRes = await getDicList(params);
        const param = {
          index: 1,
        };
        const res = await noPayEntryList(param);
        res.data.data.Value.forEach((item: { EnteryFeeParse: string; EnteryFee: string; MaxBidMoneyParse: string; MaxBidMoney: string; }): void => {
          // 保证金
          item.EnteryFeeParse = number_format(item.EnteryFee, 2)
          // 当前价
          item.MaxBidMoneyParse = number_format(item.MaxBidMoney, 2)
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