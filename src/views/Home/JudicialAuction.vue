<template>
  <!--司法拍卖-->
  <div class="container mb25">
    <div class="ofw col-lg-12 house_title">
      <p class="fl f16 yellow">司法拍卖</p>
      <a class="fr more f12 gray6" href="">更多》</a>
    </div>
    <ul class="ofw col-lg-12 house_list2 pl0">
      <li class="fl col-lg-3 col-xs-6 pl0 not_started">
        <a
          href="https://sf-item.taobao.com/sf_item/614139901215.htm?spm=a213w.7398504.paiList.1.51f972d05DvJVo"
          target="_blank"
        >
          <div class="content">
            <img :src="uploads5" style="width: 100%" />
            <div class="text">
              <p class="omit">重庆市渝中区枣子岚垭正街3号4-8#</p>
              <p class="f10 gray6 omit">
                起拍价<span class="f16 money">66.86万</span>
              </p>
              <p class="f10 gray6 omit">建筑面积:84.22㎡</p>
            </div>
            <div class="item-foot ofw">
              <div class="item-status fl">未开始</div>
              <div class="item-countdown">2020-04-24 10:00—04-25 10:00</div>
            </div>
          </div>
        </a>
      </li>
      <li class="fl col-lg-3 col-xs-6 pl0 not_started">
        <a
          href="https://sf-item.taobao.com/sf_item/614902649003.htm?spm=a213w.7398504.paiList.1.655014c3FONa93"
          target="_blank"
        >
          <div class="content">
            <img :src="uploads6" style="width: 100%" />
            <div class="text">
              <p class="omit">重庆市南岸区江南大道36号1单元13-2号</p>
              <p class="f10 gray6 omit">
                起拍价<span class="f16 money">83万</span>
              </p>
              <p class="f10 gray6 omit">建筑面积:116.16㎡</p>
            </div>
            <div class="item-foot ofw">
              <div class="item-status fl">未开始</div>
              <div class="item-countdown">2020-05-06 10:00—05-07 10:00</div>
            </div>
          </div>
        </a>
      </li>
      <li class="fl col-lg-3 col-xs-6 pl0 not_started">
        <a
          href="https://sf-item.taobao.com/sf_item/614780221167.htm?spm=a213w.7398504.paiList.1.6d894e88EvuPBs"
          target="_blank"
        >
          <div class="content">
            <img :src="uploads7" style="width: 100%" />
            <div class="text">
              <p class="omit">重庆市北部新区礼慈路38号37幢1-4</p>
              <p class="f10 gray6 omit">
                起拍价<span class="f16 money">358.11万</span>
              </p>
              <p class="f10 gray6 omit">建筑面积:234.67㎡</p>
            </div>
            <div class="item-foot ofw">
              <div class="item-status fl">未开始</div>
              <div class="item-countdown">2020-05-05 10:00—05-06 10:00</div>
            </div>
          </div>
        </a>
      </li>
      <li class="fl col-lg-3 col-xs-6 pl0 not_started">
        <a
          href="https://sf-item.taobao.com/sf_item/613673060780.htm?spm=a213w.7398504.paiList.1.3dd97d2cG56X5F"
          target="_blank"
        >
          <div class="content">
            <img :src="uploads8" style="width: 100%" />
            <div class="text">
              <p class="omit">重庆市巴南区鱼轻路60号13幢1单元27-1号</p>
              <p class="f10 gray6 omit">
                起拍价<span class="f16 money">85万</span>
              </p>
              <p class="f10 gray6 omit">建筑面积:111.79㎡</p>
            </div>
            <div class="item-foot ofw">
              <div class="item-status fl">未开始</div>
              <div class="item-countdown">2020-04-22 10:00—04-23 10:00</div>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { ENV_ICON } from "@/constant/index";

export default {
  setup() {
    return {
      uploads5: ENV_ICON.uploads5,
      uploads6: ENV_ICON.uploads6,
      uploads7: ENV_ICON.uploads7,
      uploads8: ENV_ICON.uploads8,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>