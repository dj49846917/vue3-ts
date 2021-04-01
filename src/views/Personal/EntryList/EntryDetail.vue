<template>
  <div class="manager_content">
    <div class="manager_step">
      <span class="title block"
        ><a href="">保证金</a>
        <i class="iconfont icon-right"></i>保证金详情</span
      >
    </div>
    <div class="manager_main">
      <!--释放成功-->
      <div class="status">
        <h3 class="">
          当前保证金说明：<em class="red"
            >您竞价出局或因为标的物被中止和撤回，保证金释放。</em
          >
        </h3>
        <p class="reason">释放成功</p>
      </div>
      <!--缴纳成功-->
      <div class="status">
        <h3 class="">
          当前保证金说明：<em class="red"
            >您参与该标的物的报名，保证金锁定成功。</em
          >
        </h3>
        <p class="reason">缴纳成功</p>
      </div>
      <div class="flow ofw">
        <p>保证金流水单</p>
        <dl class="item_wrap mt20 col-lg-12 ofw">
          <dt class="col-lg-12">
            <span class="col-lg-3">时间</span>
            <span class="item_flag col-lg-2"> </span>
            <span class="col-lg-2">状态</span>
            <span class="col-lg-2">金额 (元)</span>
            <span class="col-lg-2">渠道</span>
            <span class="col-lg-1">操作</span>
          </dt>
          <dd class="col-lg-12">
            <span class="col-lg-3">2021-01-06 16:02:00</span>
            <span class="item_flag col-lg-2"
              ><i class="flag_circle"></i><i class="flag_line"></i
            ></span>
            <span class="col-lg-2">缴纳成功</span>
            <span class="col-lg-2">1.10</span>
            <span class="col-lg-2">银行卡</span>
            <span class="col-lg-2"></span>
          </dd>
          <dd class="col-lg-12">
            <span class="col-lg-3">2021-01-07 10:53:00</span>
            <span class="item_flag col-lg-2"
              ><i class="flag_circle"></i><i class="flag_line"></i
            ></span>
            <span class="col-lg-2">释放成功</span>
            <span class="col-lg-2">1.10</span>
            <span class="col-lg-2">银行卡</span>
            <span class="col-lg-2"></span>
          </dd>
        </dl>
      </div>
      <div class="order">
        <p>订单信息</p>
        <p class="mt20">
          标的物名称：<a href="" class="blue">关于对刘XX的债权转让</a>
        </p>
        <p class="mt10">保证金金额：1.10元</p>
      </div>
    </div>
    <div class="manager_main line_none">
      <ul class="fund_guidance mt10">
        <li>
          若竞拍失败（含未出价、未竞拍成功），保证金会在拍卖结束后24小时内释放并自动退回到您的银行卡
        </li>
        <li>退款到账一般需3-5个工作日</li>
        <li>如遇问题，请联系拍卖客服帮您处理，拍卖客服电话023-63080760</li>
      </ul>
    </div>
  </div>
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