<template>
  <div class="container mb25 bg-white mt35">
    <div class="col-lg-7 login_pic">
      <div class="main">
        <img :src="login_img" style="width:100%" />
      </div>
    </div>
    <div class="col-lg-5 login_box">
      <div class="info">
        <ul class="ofw top">
          <li class="fl active" style="border: none">免费注册</li>
        </ul>
        <ul class="input_box">
          <li class="mt20">
            <i class="iconfont icon-shouji"></i
            ><input type="text" placeholder="请输入手机号" />
          </li>
          <li class="mt10 yzm_input">
            <i class="iconfont icon-yanzhengma"></i
            ><input type="password" placeholder="请输入验证码" /><a
              class="fr mr10 red2"
              href=""
              >获取验证码</a
            >
          </li>
          <li class="mt10">
            <i class="iconfont icon-mima"></i
            ><input type="password" placeholder="请输入登录密码" />
          </li>
        </ul>
        <p class="error">手机号有误</p>
        <p class="xieyi">
          <input type="checkbox" />我已阅读并同意
          <a class="red2" href="">《荣投地产用户注册协议》</a>
        </p>
        <a class="btn mt10" href="">立即注册</a>
        <div class="ofw mt10 text_bottom">
          <a class="fr" href="">已有账号？<span class="red2">去登录</span></a>
        </div>
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