<template>
  <div class="manager_content">
    <div class="manager_step">
      <span class="title">银行卡列表</span>
    </div>
    <div class="manager_main mt20 line_none">
      <ul class="quick_list ofw">
        <li class="fl" v-for="item in list" :key="item.ID">
          <div class="mt">
            <span class="bank f12 red2">{{ item.BankName }}</span>
            <span class="number">尾号{{ item.CardNumberParse }}</span>
            <span class="type"><em class="saving">储蓄卡</em></span>
          </div>
          <div class="mc">
            <div class="item">
              <span class="info">持卡人姓名：*{{ item.CardUserParse }}</span>
            </div>
            <div class="item">
              <span class="info">手机号：{{ item.ReservedUserPhoneParse }}</span>
              <a href="" class="blue">删除</a>
            </div>
          </div>
        </li>
        <li class="fl quick_add">
          <router-link class="block textC mt35" to="/personal/addbank">
            <i class="iconfont icon-add2"></i>
            <span class="block textC blue">添加银行卡</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import { bankList } from "@/service/personal";
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
        const res = await bankList(param);
        res.data.data.forEach((item: { CardNumberParse: any; CardNumber: string; CardUserParse: any; CardUser: string; ReservedUserPhoneParse: string; ReservedUserPhone: string; }) => {
          // 银行账号
          item.CardNumberParse = item.CardNumber ? item.CardNumber.substr(item.CardNumber.length - 4) : ''
          // 账户
          item.CardUserParse = item.CardUser ? item.CardUser.substr(item.CardUser.length - 1) : ''
          // 手机号
          item.ReservedUserPhoneParse = item.ReservedUserPhone ? (item.ReservedUserPhone.substr(0, 3) + "****" + item.ReservedUserPhone.substr(item.ReservedUserPhone.length - 4)) : ''
        });
        console.log("res", res)
        state.list = res.data.data;
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