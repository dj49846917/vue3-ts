<template>
  <div class="manager_content">
    <div class="manager_step">
      <span class="title block">保证金</span>
    </div>
    <div class="manager_list mt10">
      <table>
        <thead>
          <tr>
            <th width="40%">竞拍详情</th>
            <th width="15%">保证金</th>
            <th width="18%">缴纳时间</th>
            <th width="10%">状态</th>
            <th width="17%">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in list" :key="item.AuctionProjectID">
            <td class="v-m">
              <img
                class="p-img fl mr10 col-lg-3"
                :src="item.Image"
                width="60"
                alt=""
              />
              <router-link
                :to="'/auction/detail?ID=' + item.AuctionProjectID"
                class="fl block col-lg-8 textL title"
                >{{ item.NoticeTitle }}</router-link
              >
            </td>
            <td class="">
              <div class="t-l textC">
                <span class="p-price">{{ item.EnteryFeeParse }}</span> 元
              </div>
            </td>
            <td class="v-m">
              <div class="t-l">{{ item.PayDateParse }}</div>
            </td>

            <td class="v-m">
              <span class="red" v-if="(item.ReFundID != null && item.ReFundID > 0)">{{ item.EntryStatusParse }}</span>
              <span v-else-if="item.EntryStatus == 2069001">{{ item.EntryStatusParse }}</span>
              <span class="blue" v-else>{{ item.EntryStatusParse }}</span>
            </td>
            <td class="v-m operate">
              <router-link class="blue" :to="'/personal/entryDetail?EntryID=' + item.EntryID"
                >查看保证金</router-link
              ><br />
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
import { entryList } from "@/service/personal";
import { number_format, parseDate } from "@/utils/utils";
import moment from "moment";
export default defineComponent({
  setup() {
    let state = reactive({
      list: [],
    });
    onMounted(async () => {
      // 获取数据字典
      try {
        const param = {
          index: 1,
        };
        const res = await entryList(param);
        res.data.data.Value.forEach((item) => {
          // 保证金
          item.EnteryFeeParse = number_format(item.EnteryFee, 2);
          // 缴纳时间
          item.PayDateParse = moment(Number(parseDate(item.PayDate))).format(
            "yyyy-MM-DD HH:MM:ss"
          );
          // 状态
          if (item.ReFundID != null && item.ReFundID > 0) {
            item.EntryStatusParse = "已释放";
          } else if (item.EntryStatus === 2069001) {
            item.EntryStatusParse = "未缴纳";
          } else {
            item.EntryStatusParse = "已缴纳";
          }
        });
        console.log("res", res);
        state.list = res.data.data.Value;
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