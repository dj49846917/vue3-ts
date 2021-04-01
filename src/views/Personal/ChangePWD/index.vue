<template>
  <div class="manager_content">
    <div class="manager_step">
      <span class="title">密码修改</span>
    </div>
    <div class="manager_main mt20 line_none">
      <form class="mt10">
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>原密码：</label>
          <div class="form_value">
            <input class="big_input" type="text" placeholder="请输入" name="" />
          </div>
          <p class="error">请输入原密码</p>
          <!--错误提示-->
        </div>
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>新密码：</label>
          <div class="form_value">
            <input class="big_input" type="text" placeholder="请输入" name="" />
          </div>
          <p class="error">请输入新密码</p>
          <!--错误提示-->
        </div>
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>确认密码：</label>
          <div class="form_value">
            <input class="big_input" type="text" placeholder="请输入" name="" />
          </div>
          <p class="error">请再次输入新密码</p>
          <!--错误提示-->
        </div>
      </form>
      <a href="" class="btn btn_rz mt20 mb20" style="margin-left: 130px"
        >重设密码</a
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