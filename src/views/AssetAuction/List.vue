<template>
  <ul class="ofw col-lg-12 house_list2 pl0">
    <li class="fl col-lg-3 col-xs-6 pl0 not_started" v-for="item in list" :key="item.AuctionProjectID">
      <router-link :to="'/auction/detail?AuctionProjectID=' + item.AuctionProjectID">
        <div class="content">
          <img :src="item.Image" style="width:100%" />
          <div class="text">
            <p class="omit">{{ item.NoticeTitle }}</p>
            <p class="f10 gray6 omit">
              起拍价<span class="f16 money">{{ item.StartingPrice }}</span>
            </p>
            <p class="f10 gray6 omit">建筑面积:{{ item.CoveredArea }}㎡</p>
          </div>
          <div class="item-foot ofw">
            <div class="item-status fl">{{ item.ProjectStatus }}</div>
            <div class="item-countdown">{{ item.BidStartDate }}</div>
          </div>
        </div>
      </router-link>
    </li>
  </ul>
  <!--页码-->
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
</template>

<script lang="ts">
import { ENV_ICON } from '@/constant/index'
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    list: {
      type: Array,
      default: []
    }
  },
  setup() {
    return {
      uploads5: ENV_ICON.uploads5
    };
  },
});
</script>

<style lang="scss" scoped>
</style>