<template>
  <div class="fl gMain col-lg-7">
    <div class="pm-subscribe">
      <!--未关注-->
      <a href="">
        <i class="iconfont icon-attention"></i>
        <span>关注拍品</span>
      </a>
      <!--已关注-->
      <a href="">
        <i class="iconfont icon-attention2"></i>
        <span>已关注拍品</span>
      </a>
    </div>
    <!--即将开始-->
    <div style="display: none">
      <ul>
        <li>
          <span class="title">距开始</span>
          <span class=""
            ><var>00</var><em>天</em><var>00</var><em>时</em><var>25</var
            ><em>分</em><var>45.3</var><em>秒</em></span
          >
        </li>
        <li>
          <span class="title">起拍价</span>
          <span class="J_Price"><em>62,000 </em>元</span>
        </li>
        <li>
          <span class="title">保证金</span>
          <span class="J_Price gray6"><em>1,000 </em>元</span>
        </li>
      </ul>
      <div class="pm_remind">
        <span class=""><em class="J_Applyer">0</em> 人报名</span>
        <span class=""><em class="J_Applyer">0</em> 人关注拍品</span>
        <span class=""><em class="J_Applyer">0</em> 次围观</span>
      </div>
      <div class="pm_bid pm-before-apply">
        <span class="status-tip status-ing">即将开始</span>
        <dl class="ofw mb10">
          <dt class="fl">出&nbsp;&nbsp;价</dt>
          <dd class="fl">
            <input class="fl" value="62,000" />
            <div class="pm_sign fl">
              <a href="" class="plus J_Sign">+</a>
              <a href="" class="minus J_Sign">-</a>
            </div>
          </dd>
        </dl>
        <dl class="ofw mb10">
          <dt class="fl"></dt>
          <dd class="fl">
            <a href="" class="pm_apply_btn">交保证金报名</a>
          </dd>
        </dl>
      </div>
    </div>
    <!--正在进行未交保证金-->
    <div style="display: none">
      <ul>
        <li>
          <span class="title">距结束</span>
          <span class=""
            ><var>00</var><em>天</em><var>00</var><em>时</em><var>25</var
            ><em>分</em><var>45.3</var><em>秒</em></span
          >
        </li>
        <li>
          <span class="title">当前价</span>
          <span class="J_Price"><em>62,000 </em>元</span>
          <span class="pm_user">出价人：<i>U1211</i></span>
        </li>
        <li>
          <span class="title">保证金</span>
          <span class="J_Price gray6"><em>1,000 </em>元</span>
        </li>
      </ul>
      <div class="pm_remind">
        <span class=""><em class="J_Applyer">0</em> 人报名</span>
        <span class=""><em class="J_Applyer">0</em> 人关注拍品</span>
        <span class=""><em class="J_Applyer">0</em> 次围观</span>
      </div>
      <div class="pm_bid pm-before-apply">
        <span class="status-tip status-ing2">正在进行</span>
        <dl class="ofw mb10">
          <dt class="fl">出&nbsp;&nbsp;价</dt>
          <dd class="fl">
            <input class="fl" value="62,000" />
            <div class="pm_sign fl">
              <a href="" class="plus J_Sign">+</a>
              <a href="" class="minus J_Sign">-</a>
            </div>
          </dd>
        </dl>
        <dl class="ofw mb10">
          <dt class="fl"></dt>
          <dd class="fl">
            <a href="" class="pm_apply_btn">交保证金报名</a>
          </dd>
        </dl>
      </div>
    </div>
    <!--正在进行已交保证金，竞价中-->
    <div class="jj_ing" style="display: none">
      <ul>
        <li>
          <span class="title">距结束</span>
          <span class=""
            ><var>00</var><em>天</em><var>00</var><em>时</em><var>25</var
            ><em>分</em><var>45.3</var><em>秒</em></span
          >
        </li>
        <li>
          <span class="title">当前价</span>
          <span class="J_Price"><em>62,000 </em>元</span>
          <span class="pm_user">出价人：<i>U1211</i></span>
        </li>
        <li>
          <span class="title">保证金</span>
          <span class="J_Price gray6"><em>1,000 </em>元</span>
        </li>
      </ul>
      <div class="pm_remind">
        <span class=""><em class="J_Applyer">0</em> 人报名</span>
        <span class=""><em class="J_Applyer">0</em> 人关注拍品</span>
        <span class=""><em class="J_Applyer">0</em> 次围观</span>
      </div>
      <div class="pm_bid pm-before-apply">
        <span class="status-tip status-ing2">正在进行</span>
        <dl class="mb10">
          <dt class="fl">出&nbsp;&nbsp;价</dt>
          <dd class="fl">
            <input class="fl" value="62,000" />
            <div class="pm_sign fl">
              <a href="" class="plus J_Sign">+</a>
              <a href="" class="minus J_Sign">-</a>
            </div>
            <div class="detail_money">
              <ul>
                <li class="separator">
                  <div>十万</div>
                  <strong class="yen">¥</strong>
                </li>
                <li>
                  <div>万</div>
                  <strong>6</strong>
                </li>
                <li>
                  <div>千</div>
                  <strong>2</strong>
                </li>
                <li>
                  <div>百</div>
                  <strong>0</strong>
                </li>
                <li>
                  <div>十</div>
                  <strong>0</strong>
                </li>
                <li style="border-right: none" class="separator">
                  <div>元</div>
                  <strong>0</strong>
                </li>
              </ul>
            </div>
          </dd>
        </dl>
        <dl class="clearfix" style="margin-bottom: 10px"></dl>
        <dl class="ofw mb10">
          <dt class="fl"></dt>
          <dd class="fl">
            <a href="" class="pm_apply_btn">出&nbsp;&nbsp;价</a>
          </dd>
        </dl>
      </div>
    </div>
    <!--竞价成功-->
    <div>
      <ul>
        <li>
          <span class="title">成交时间</span>
          <span class="">2021/01/06 14:00:00</span>
        </li>
        <li>
          <span class="title">成交价</span>
          <span class="J_Price"><em>62,000 </em>元</span>
        </li>
      </ul>
      <div class="pm_remind">
        <span class=""><em class="J_Applyer">0</em> 人报名</span>
        <span class=""><em class="J_Applyer">0</em> 人关注拍品</span>
        <span class=""><em class="J_Applyer">0</em> 次围观</span>
      </div>
      <div class="pm_bid pm-before-apply">
        <dl class="ofw mb10">
          <dt class="fl"></dt>
          <dd class="fl">
            <a href="" class="pm_apply_btn">竞价成功，去付尾款</a>
          </dd>
        </dl>
      </div>
    </div>
    <!--已结束、竞价失败-->
    <div style="display: none">
      <ul>
        <li>
          <span class="title">成交时间</span>
          <span class="">2021/01/06 14:00:00</span>
        </li>
        <li>
          <span class="title">成交价</span>
          <span class="J_Price"><em>62,000 </em>元</span>
        </li>
      </ul>
      <div class="pm_remind">
        <span class=""><em class="J_Applyer">0</em> 人报名</span>
        <span class=""><em class="J_Applyer">0</em> 人关注拍品</span>
        <span class=""><em class="J_Applyer">0</em> 次围观</span>
      </div>
      <div class="pm_bid pm-before-apply">
        <p class="f16 black">本场竞价已结束 ！</p>
        <p class="f16 black">竞价失败 ！</p>
      </div>
    </div>
    <!--中止、撤回-->
    <div style="display: none">
      <div class="pm_remind">
        <span class=""><em class="J_Applyer">0</em> 人报名</span>
        <span class=""><em class="J_Applyer">0</em> 人关注拍品</span>
        <span class=""><em class="J_Applyer">0</em> 次围观</span>
      </div>
      <div class="pm_bid pm-before-apply">
        <p class="f16 black">
          本场竞价已中止 ！<span class="f12">重新拍卖</span>
        </p>
        <p class="f16 black">
          本场竞价已撤回 ！<span class="f12">委托人要求撤回本次拍卖。</span>
        </p>
      </div>
    </div>

    <ul class="pai-pay-infor mt10">
      <li class="fl col-lg-4 col-xs-4">保 证 金 : ¥10,000</li>
      <li class="fl col-lg-4 col-xs-4">评 估 价 : ¥72,000</li>
      <li class="fl col-lg-4 col-xs-4">优先购买权人: 无</li>
      <li class="fl col-lg-4 col-xs-4">起 拍 价 : ¥62,000</li>
      <li class="fl col-lg-4 col-xs-4">保 留 价 : 无</li>
      <li class="fl col-lg-4 col-xs-4">竞价周期 : 1天</li>
      <li class="fl col-lg-4 col-xs-4">加价幅度 : ¥100</li>
      <li class="fl col-lg-4 col-xs-4" style="position: relative">
        延时周期 : 5分钟<i class="iconfont icon-wenhao"></i>
        <span class="tips"
          >如果在拍卖结束前5分钟出价，拍卖结束时间会在出价时间基础上延长5分钟，直至无人出价，拍卖结束。<em
            class="detail-tip-icon detail-tip-icon-bottom"
          ></em
        ></span>
      </li>
      <li class="fl col-lg-4 col-xs-4">封 顶 价 :无</li>
      <li class="clearfix"></li>
    </ul>
    <p class="pai-info mt10">尾款支付方式： 在线支付</p>
    <p class="pai-info">尾款线上支付截止： 竞价结束后10个自然日</p>
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