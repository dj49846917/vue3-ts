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
      <table class="mt20">
        <tbody>
          <tr class="top">
            <td class="v-m" colspan="2" width="55%">
              <img
                class="p-img fl mr10 col-lg-2"
                :src="uploads1"
                width="60"
                alt=""
              />
              <a href="" class="fl block col-lg-6 textL title" target="_blank"
                >关于对刘XX的债权转让</a
              >
              <div class="t-l col-lg-4 fr title textR">
                当前价：<span class="p-price">3000</span> 元
              </div>
            </td>
            <td class="v-m red" width="22%">拍卖中</td>
            <td class="v-m operate" width="23%"></td>
          </tr>
          <tr class="bottom">
            <td class="v-m line_none" colspan="2" width="55%">
              <div class="t-l col-lg-4 fl title textL">保证金：</div>
              <div class="t-l col-lg-4 fr title textR">
                <span class="p-price">3000</span> 元
              </div>
            </td>
            <td class="v-m red line_none" width="22%">未支付</td>
            <td class="v-m operate line_none" width="23%">
              <a class="btn btn-danger" href="">立即付款</a>
            </td>
          </tr>
        </tbody>
      </table>
      <table class="mt20">
        <tbody>
          <tr class="top">
            <td class="v-m" colspan="2" width="55%">
              <img
                class="p-img fl mr10 col-lg-2"
                :src="uploads1"
                width="60"
                alt=""
              />
              <a href="" class="fl block col-lg-6 textL title" target="_blank"
                >关于对刘XX的债权转让</a
              >
              <div class="t-l col-lg-4 fr title textR">
                当前价：<span class="p-price">3000</span> 元
              </div>
            </td>
            <td class="v-m green" width="22%">即将开始</td>
            <td class="v-m operate" width="23%"></td>
          </tr>
          <tr class="bottom">
            <td class="v-m line_none" colspan="2" width="55%">
              <div class="t-l col-lg-4 fl title textL">保证金：</div>
              <div class="t-l col-lg-4 fr title textR">
                <span class="p-price">3000</span> 元
              </div>
            </td>
            <td class="v-m red line_none" width="22%">未支付</td>
            <td class="v-m operate line_none" width="23%">
              <a class="btn btn-danger" href="">立即付款</a>
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

<script>
import { ENV_ICON } from '@/constant/index'

export default {
  setup() {
    return {
      uploads1: ENV_ICON.uploads1
    };
  },
};
</script>

<style lang="scss" scoped>
</style>