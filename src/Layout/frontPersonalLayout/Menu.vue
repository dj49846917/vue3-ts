<template>
  <div class="manager_menu">
    <dl>
      <dt><i class="iconfont icon-dingdan"></i>我的竞拍</dt>
      <dd>
        <ul>
          <li><router-link to="/personal/projectbynopayentry">待交保</router-link></li>
          <li><router-link to="/personal/projectbymy">我的参拍</router-link></li>
          <li><router-link to="/personal/projectbyok">已拍下</router-link></li>
          <li><router-link to="/personal/entrylist">保证金</router-link></li>
          <li><router-link to="/personal/noticelist">我的关注</router-link></li>
        </ul>
      </dd>
    </dl>
    <dl>
      <dt><i class="iconfont icon-yonghuxinxi-"></i>个人信息</dt>
      <dd>
        <ul>
          <li><router-link to="/personal/authentication">实名认证</router-link></li>
          <li><router-link to="/personal/banklist">银行卡</router-link></li>
          <li><router-link to="/personal/personalinfo">完善信息</router-link></li>
          <li><router-link to="/personal/changepwd">密码修改</router-link></li>
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