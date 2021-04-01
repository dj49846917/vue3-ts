<template>
  <div class="manager_content">
    <div class="manager_step">
      <span class="title">银联实名认证</span>
    </div>
    <div class="manager_main mt20 line_none">
      <form class="mt10">
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>姓名：</label>
          <div class="form_value">
            <input
              class="big_input"
              type="text"
              placeholder="请输入真实姓名"
              name=""
            />
          </div>
          <p class="error">请输入姓名</p>
          <!--错误提示-->
        </div>
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>银行卡号：</label>
          <div class="form_value">
            <input
              class="big_input"
              type="text"
              placeholder="请输入本人名下银行卡号"
              name=""
            />
          </div>
          <p class="error">请输入银行卡号</p>
          <!--错误提示-->
        </div>
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>银行预留证件：</label>
          <div class="form_value">
            <select class="big_select" name="">
              <option value="请选择开户时预留银行的证件类型">
                请选择开户时预留银行的证件类型
              </option>
              <option value="居民身份证">居民身份证</option>
              <option value="军官证">军官证</option>
              <option value="护照">护照</option>
              <option value="回乡证">回乡证</option>
              <option value="台胞证">台胞证</option>
              <option value="警官证">警官证</option>
              <option value="士兵证">士兵证</option>
              <option value="其他">其他</option>
            </select>
          </div>
          <p class="error">请选择证件类型</p>
          <!--错误提示-->
        </div>
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>证件号码：</label>
          <div class="form_value">
            <input
              class="big_input"
              type="text"
              placeholder="请输入开户时预留银行的证件号码"
              name=""
            />
          </div>
          <p class="error">请输入证件号码</p>
          <!--错误提示-->
        </div>
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>银行预留手机号：</label>
          <div class="form_value">
            <input
              class="big_input"
              type="text"
              placeholder="请输入开户时预留银行的手机号"
              name=""
            />
          </div>
          <p class="error">请输入手机号</p>
          <!--错误提示-->
        </div>
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>验证码：</label>
          <div class="form_value">
            <input class="" type="text" placeholder="请输入验证码" name="" />
            <a class="btn_yz" href="">发送验证码</a>
          </div>
          <p class="error">请输入验证码</p>
          <!--错误提示-->
        </div>
      </form>
      <a href="" class="btn btn_rz mt20 mb20" style="margin-left: 130px"
        >提交银联实名认证</a
      >
      <p class="mt35">温馨提示：</p>
      <p>1.这里的银行卡可作为保证金和支付金的支付所用。</p>
      <p>2.若认证不成功，请联系发卡行客户服务中心。</p>
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