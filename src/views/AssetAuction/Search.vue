<template>
  <!--筛选-->
  <div class="filter ofw mt35">
    <div class="filter_row ofw">
      <p class="filter_title fl gray6">分类:</p>
      <div class="filter_list">
        <ul class="fl">
          <li class="fl active"><a href="">不限</a></li>
          <li class="fl"><a href="">房产</a></li>
          <li class="fl"><a href="">债权</a></li>
        </ul>
      </div>
    </div>
    <div class="filter_row ofw">
      <p class="filter_title fl gray6">所在地:</p>
      <div class="filter_list">
        <ul class="fl">
          <li class="fl"><a href="">不限</a></li>
          <li class="fl active"><a href="">渝北区</a></li>
          <li class="fl"><a href="">江北区</a></li>
          <li class="fl"><a href="">两江新区</a></li>
          <li class="fl"><a href="">沙坪坝区</a></li>
          <li class="fl"><a href="">南岸区</a></li>
          <li class="fl"><a href="">九龙坡区</a></li>
          <li class="fl"><a href="">巴南区</a></li>
        </ul>
      </div>
    </div>
    <div class="filter_row ofw">
      <p class="filter_title fl gray6">竞拍状态:</p>
      <div class="filter_list">
        <ul class="fl">
          <li class="fl"><a href="">不限</a></li>
          <li class="fl active"><a href="">进行中</a></li>
          <li class="fl"><a href="">未开始</a></li>
          <li class="fl"><a href="">已结束</a></li>
          <li class="fl"><a href="">中止</a></li>
          <li class="fl"><a href="">撤回</a></li>
        </ul>
      </div>
    </div>
    <div class="filter_row ofw">
      <p class="filter_title fl gray6">开拍时间:</p>
      <div class="filter_list">
        <ul class="fl">
          <li class="fl"><a href="">不限</a></li>
          <li class="fl active"><a href="">最近3天</a></li>
          <li class="fl"><a href="">最近7天</a></li>
          <li class="fl time_list">
            <input type="text" value="" class="min-time fl" />
            <span class="fl">&nbsp; - &nbsp;</span>
            <input type="text" value="" class="min-time fl" />
            <div class="fl btn">确定</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="filter_result ofw">
      <p class="filter_title fl gray6">当前筛选条件</p>
      <ul class="fl">
        <li class="fl"><a href="">渝北区</a> <i class="red">×</i></li>
        <li class="fl"><a href="">进行中</a> <i class="red">×</i></li>
      </ul>
      <a href="" class="del fl"><i class="iconfont icon-del"></i>清空条件</a>
    </div>
  </div>
  <!--导航条-->
  <ul class="nav-tabs2 ofw">
    <li class="fl active">最新发布</li>
    <li class="fl">价格排序<i class="iconfont icon-arrow_t"></i></li>
    <li class="fl">出价次数<i class="iconfont icon-arrow_t"></i></li>
    <li class="fl">开拍时间<i class="iconfont icon-arrow_t"></i></li>
    <li class="fl">结束时间<i class="iconfont icon-arrow_d"></i></li>
  </ul>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>