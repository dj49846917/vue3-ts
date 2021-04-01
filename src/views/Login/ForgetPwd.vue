<template>
  <div class="container mb25 bg-white mt35">
    <div class="col-lg-7 login_pic">
        <div class="main"><img :src="login_img" style="width:100%"></div>
    </div>
    <div class="col-lg-5 login_box">
        <div class="info">
            <ul class="ofw top">
                <li class="fl active" style="border: none">找回密码</li>
            </ul>
            <ul class="input_box">
                <li class="mt20"><i class="iconfont icon-shouji"></i><input type="text" placeholder="请输入手机号"></li>
                <li class="mt10 yzm_input"><i class="iconfont icon-yanzhengma"></i><input type="password" placeholder="请输入验证码"><a class="fr mr10 red2" href="">获取验证码</a></li>
                <li class="mt10"><i class="iconfont icon-mima"></i><input type="password" placeholder="请输入新密码"></li>
            </ul>
            <p class="error">手机号有误</p>
            <a class="btn mt10" href="">重置密码</a>
        </div>
    </div>
</div>
</template>

<script>
import { ENV_ICON } from '@/constant/index'

export default {
  setup() {
    document.body.style.backgroundColor = "#f2f2f2";
    return {
      login_img: ENV_ICON.login_img
    };
  },
};
</script>

<style lang="scss" scoped>
</style>