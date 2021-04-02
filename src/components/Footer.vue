<template>
  <div class="height5"></div>
  <footer class="footer ofw">
    <div class="container">
      <div class="col-lg-6" style="border: none; padding-left: 2em">
        <p class="white mt20">
          <a class="white" href="">关于我们 </a>&nbsp;&nbsp; | &nbsp;&nbsp;<a
            class="white"
            href=""
            >联系我们 </a
          >&nbsp;&nbsp; | &nbsp;&nbsp;<a class="white" href="">员工风采 </a>
        </p>
        <p class="white mt10">地址：重庆市渝北区财富大道2号财富大厦A座29-5</p>
      </div>
      <div class="col-lg-6">
        <p class="text-center white fl" style="margin-top: 25px">
          在线客服（周一至周五09:00-17:30）
        </p>
        <p class="text-center white tell fl">023-63080760</p>
      </div>
    </div>
    <p class="textC mt10 pb25">
      <a class="gray9" target="_blank" href="http://beian.miit.gov.cn"
        >ICP备案：渝ICP备20009052号</a
      >
      <!--<a class="gray9" href=""><img src="images/record_number.png"> 渝公网安备 50019002500991号</a>-->
    </p>
    <!--<p class="textC gray9 mt10">Copyright © 2012 - 2019 - 重庆市两江新区长运小额贷款有限公司</p>-->
  </footer>
  <footer class="footer ofw" style="display: none">
    <div class="container">
      <div class="col-lg-4" style="padding-left: 4em">
        <img class="fl" :src="qrcode_app" />
        <p class="white fl erweima">扫描二维码<br />下载APP</p>
      </div>
      <div class="col-lg-4">
        <p class="text-center white mt20">在线客服（周一至周五09:00-17:30）</p>
        <p class="text-center white tell">023-63080760</p>
      </div>
      <div class="col-lg-4" style="border: none; padding-left: 2em">
        <p class="white mt20">
          <a class="white" href="">关于我们 </a>&nbsp;&nbsp; | &nbsp;&nbsp;<a
            class="white"
            href=""
            >联系我们 </a
          >&nbsp;&nbsp; | &nbsp;&nbsp;<a class="white" href="">员工风采 </a>
        </p>
        <p class="white mt10">地址：重庆市渝北区财富大道2号财富大厦A座29-5</p>
      </div>
    </div>
    <p class="textC mt10">
      <a class="gray9" href="">ICP备案：渝ICP备13001126号</a>
      <a class="gray9" href=""
        ><img :src="record_number" /> 渝公网安备 50019002500991号</a
      >
    </p>
    <p class="textC gray9 mt10">
      Copyright © 2012 - 2019 - 重庆市两江新区长运小额贷款有限公司
    </p>
  </footer>
</template>

<script>
import { ENV_ICON } from "@/constant/index";
export default {
  setup() {
    return {
      qrcode_app: ENV_ICON.qrcode_app,
      record_number: ENV_ICON.record_number,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>