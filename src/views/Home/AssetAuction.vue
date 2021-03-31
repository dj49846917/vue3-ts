<template>
  <!--资产拍卖-->
  <div class="container">
    <div class="ofw col-lg-12 house_title">
      <p class="fl f16 yellow">资产拍卖</p>
      <a class="fr more f12 gray6" href="">更多》</a>
    </div>
    <!--started 进行中  not_started 未开始 finish 已停拍 已流拍-->
    <ul class="ofw col-lg-12 house_list1">
      <li class="fl col-lg-6 col-xs-12 not_started">
        <a
          href="https://zc-item.taobao.com/auction/613620252850.htm?spm=a219w.7474998.paiList.4.3a844925t6f6Oi"
          target="_blank"
        >
          <div class="content col-xs-12 pl0 pr0">
            <img class="fl col-xs-6 pl0 pr0" :src="uploads1" />
            <div class="fl col-xs-6 text">
              <p class="bold f14 omit" style="width: 80%">
                南岸区·金科中央御园
              </p>
              <p class="f12 gray6 omit">
                地址：重庆市南岸区茶园新区永宁路19号51幢8-1
              </p>
              <p class="f10 gray6 omit">建筑面积:70.85㎡</p>
              <p class="f10 gray6 omit">
                起拍价<span class="f16 money">110万</span>
              </p>
              <p class="f10 gray3">
                开拍时间：<span class="bold">2020-04-20 10:00—04-21 10:00</span>
              </p>
              <i class="tip white">未开始</i>
            </div>
          </div>
        </a>
      </li>
      <li class="fl col-lg-6 col-xs-12 not_started">
        <a
          href="https://zc-item.taobao.com/auction/615235783171.htm?spm=a219w.7474998.paiList.1.3a844925t6f6Oi"
          target="_blank"
        >
          <div class="content col-xs-12 pl0 pr0">
            <img class="fl col-xs-6 pl0 pr0" :src="uploads2" />
            <div class="fl col-xs-6 text">
              <p class="bold f14 omit" style="width: 80%">
                渝北区·复地花屿城T2公馆
              </p>
              <p class="f12 gray6 omit">地址：重庆市渝北区松鹤路108号7-36</p>
              <p class="f10 gray6 omit">建筑面积:42.15㎡</p>
              <p class="f10 gray6 omit">
                起拍价<span class="f16 money">65万</span>
              </p>
              <p class="f10 gray3">
                开拍时间：<span class="bold">2020-04-16 10:00—04-17 10:00</span>
              </p>
              <i class="tip white">未开始</i>
            </div>
          </div>
        </a>
      </li>
      <li class="fl col-lg-6 col-xs-12 not_started">
        <a
          href="https://zc-item.taobao.com/auction/615009857012.htm?spm=a219w.7474998.paiList.5.3a844925yk9V4D"
          target="_blank"
        >
          <div class="content col-xs-12 pl0 pr0">
            <img class="fl col-xs-6 pl0 pr0" :src="uploads3" />
            <div class="fl col-xs-6 text">
              <p class="bold f14 omit" style="width: 80%">渝北区·金楼小区</p>
              <p class="f12 gray6 omit">地址：重庆市渝北区金龙路143号</p>
              <p class="f10 gray6 omit">建筑面积:70.07㎡</p>
              <p class="f10 gray6 omit">
                起拍价<span class="f16 money">320万</span>
              </p>
              <p class="f10 gray3">
                开拍时间：<span class="bold">2020-05-23 10:00—05-24 10:00</span>
              </p>
              <i class="tip white">未开始</i>
            </div>
          </div>
        </a>
      </li>
      <li class="fl col-lg-6 col-xs-12 not_started">
        <a
          href="https://zc-item.taobao.com/auction/613274225814.htm?spm=a219w.7474998.paiList.3.3a8449250gKKmh"
          target="_blank"
        >
          <div class="content col-xs-12 pl0 pr0">
            <img class="fl col-xs-6 pl0 pr0" :src="uploads4" />
            <div class="fl col-xs-6 text">
              <p class="bold f14 omit" style="width: 80%">北碚区·竹芸山水</p>
              <p class="f12 gray6 omit">
                地址：重庆市北碚区北温泉街道金华路397号
              </p>
              <p class="f10 gray6 omit">建筑面积:266.41㎡</p>
              <p class="f10 gray6 omit">
                起拍价<span class="f16 money">310万</span>
              </p>
              <p class="f10 gray3">
                开拍时间：<span class="bold">2020-04-17 10:00—04-18 10:00</span>
              </p>
              <i class="tip white">未开始</i>
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
      uploads1: ENV_ICON.uploads1,
      uploads2: ENV_ICON.uploads2,
      uploads3: ENV_ICON.uploads3,
      uploads4: ENV_ICON.uploads4,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>