<template>
  <div class="manager_content">
    <div class="manager_step">
      <span class="title block">我的关注</span>
    </div>
    <div class="manager_list">
      <table class="mt20 line_none" width="100%">
        <thead>
          <tr>
            <th colspan="2" width="65%">竞拍详情</th>
            <th width="15%">状态/时间</th>
            <th width="20%">操作</th>
          </tr>
        </thead>
      </table>
      <p class="ofw gz_cancel mt20">
        <label class="fl mr20"><input type="checkbox" />&nbsp;全选</label>
        <a href="" class="btn btn-default">批量取消关注</a>
      </p>
      <table class="mt10 gz_list" width="100%">
        <tbody>
          <tr>
            <td class="v-m" width="5%"><input type="checkbox" /></td>
            <td class="v-m" width="50%">
              <img
                class="p-img fl mr10 col-lg-2"
                src="content/uploads/1.jpg"
                width="60"
                alt=""
              />
              <div class="fl col-lg-10">
                <a href="" class="textL title block" target="_blank"
                  >关于对刘XX的债权转让关于对刘XX的债权转让</a
                >
                <div class="title textL">
                  当前价：<span class="p-price">574600</span>元
                </div>
              </div>
            </td>
            <td class="v-m red" width="25%">拍卖中<br />距结束 1天18:34:12</td>
            <td class="v-m operate" width="20%">
              <a class="" href="">取消关注</a>
            </td>
          </tr>
          <tr>
            <td class="v-m" width="5%"><input type="checkbox" /></td>
            <td class="v-m" width="50%">
              <img
                class="p-img fl mr10 col-lg-2"
                src="content/uploads/1.jpg"
                width="60"
                alt=""
              />
              <div class="fl col-lg-10">
                <a href="" class="textL title block" target="_blank"
                  >关于对刘XX的债权转让</a
                >
                <div class="title textL">
                  当前价：<span class="p-price">574600</span>元
                </div>
              </div>
            </td>
            <td class="v-m green" width="25%">
              即将开始<br />距开始 1天18:34:12
            </td>
            <td class="v-m operate" width="20%">
              <a class="" href="">取消关注</a>
            </td>
          </tr>
          <tr>
            <td class="v-m" width="5%"><input type="checkbox" /></td>
            <td class="v-m" width="50%">
              <img
                class="p-img fl mr10 col-lg-2"
                src="content/uploads/1.jpg"
                width="60"
                alt=""
              />
              <div class="fl col-lg-10">
                <a href="" class="textL title block" target="_blank"
                  >关于对刘XX的债权转让</a
                >
                <div class="title textL">
                  当前价：<span class="p-price">574600</span>元
                </div>
              </div>
            </td>
            <td class="v-m" width="25%">已流拍</td>
            <td class="v-m operate" width="20%">
              <a class="" href="">取消关注</a>
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
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>