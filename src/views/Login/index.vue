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
          <li class="fl active" style="border: none">账号密码登录</li>
          <li class="fl" style="padding-left: 1em">手机号登录</li>
        </ul>
        <!--账号密码登录-->
        <ul class="input_box">
          <li class="mt20">
            <i class="iconfont icon-shouji"></i
            ><input type="text" placeholder="请输入用户名" />
          </li>
          <li class="mt10">
            <i class="iconfont icon-mima"></i
            ><input type="password" placeholder="请输入登录密码" />
          </li>
        </ul>
        <!--快捷登录-->
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
        </ul>
        <p class="error">格式有误</p>
        <a class="btn mt10" href="">立即登录</a>
        <div class="ofw mt10 text_bottom">
          <a class="fl" href=""
            >还没有账号？<span class="red2">立即注册</span></a
          >
          <a class="fr red2" href="">忘记密码</a>
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