<template>
  <div class="manager_menu">
    <dl>
      <dt><i class="iconfont icon-dianpu"></i>店铺管理</dt>
      <dd>
        <ul>
          <li><router-link to="/dealer/companyinfo">公司信息</router-link></li>
          <li><router-link to="/dealer/companyqualification">公司资质</router-link></li>
          <li><router-link to="/dealer/contactinfo">联系信息</router-link></li>
          <li><router-link to="/dealer/entryinfo">保证金信息</router-link></li>
        </ul>
      </dd>
    </dl>
    <dl>
      <dt><i class="iconfont icon-paimai"></i>竞拍管理</dt>
      <dd>
        <ul>
          <li><router-link to="/dealer/projectinfolist">标的物管理</router-link></li>
          <li><router-link to="/dealer/projectinfoadd">添加标的物</router-link></li>
        </ul>
      </dd>
    </dl>
    <dl>
      <dt><i class="iconfont icon-dingdan"></i>信息中心</dt>
      <dd>
        <ul>
          <li><router-link to="/dealer/noticeinfo">公告信息</router-link></li>
        </ul>
      </dd>
    </dl>
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
.router-link-active {
  color: #c7171e;
  background: #fff0f0;
}
</style>