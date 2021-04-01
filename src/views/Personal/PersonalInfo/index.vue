<template>
  <div class="manager_content">
    <div class="manager_step">
      <span class="title">完善信息</span>
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
          <label class="form_name"><i class="red">*</i>证件类型：</label>
          <div class="form_value">
            <select class="big_select" name="">
              <option value="请选择开户时预留银行的证件类型">
                请选择您的证件类型
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
          <label class="form_name">用户名：</label>
          <div class="form_value">
            <input class="big_input" type="text" placeholder="请输入" name="" />
          </div>
        </div>
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>联系地址：</label>
          <div class="form_value">
            <input class="big_input" type="text" placeholder="请输入" name="" />
          </div>
          <p class="error">请输入联系地址</p>
          <!--错误提示-->
        </div>
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>电子邮箱：</label>
          <div class="form_value">
            <input class="big_input" type="text" placeholder="请输入" name="" />
          </div>
          <p class="error">请输入电子邮箱</p>
          <!--错误提示-->
        </div>
      </form>
      <a href="" class="btn btn_rz mt20 mb20" style="margin-left: 130px"
        >保存</a
      >
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