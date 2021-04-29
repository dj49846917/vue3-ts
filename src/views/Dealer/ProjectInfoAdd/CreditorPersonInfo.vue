<template>
  <div class="manager_main">
    <span class="tip_text">债务人情况</span>
    <div class="pm_form_zw pb25">
      <form class="mt10">
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>债务人名称：</label>
          <div class="form_value">
            <div>
              <input
                class="big_input"
                type="text"
                placeholder="请输入"
                name=""
              />
            </div>
            <span class="gray9"></span>
          </div>
          <p class="error">请输入债务人名称</p>
          <!--错误提示-->
        </div>
      </form>
      <form class="mt10">
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name">债务人行业：</label>
          <div class="form_value">
            <select>
              <option value="请选择">请选择</option>
            </select>
            <span class="gray9"></span>
          </div>
        </div>
      </form>
      <form class="mt10">
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name">债务人性质：</label>
          <div class="form_value">
            <select>
              <option value="请选择">请选择</option>
            </select>
            <span class="gray9"></span>
          </div>
        </div>
      </form>
      <form class="mt10 ofw">
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>所在地：</label>
          <div class="form_value">
            <select>
              <option value="请选择">请选择</option>
            </select>
            <select>
              <option value="请选择">请选择</option>
            </select>
            <select>
              <option value="请选择">请选择</option>
            </select>
            <span class="gray9"></span>
          </div>
          <p class="error" style="margin-left: 130px">请选择省市区</p>
          <!--错误提示-->
        </div>
      </form>
      <form class="mt10">
        <div class="form_item ofw form-group has-feedback">
          <label class="form_name">债务人详细描述：</label>
          <div class="form_value">
            <textarea class="editor2"></textarea>
          </div>
        </div>
      </form>
      <div class="form_value">
        <a class="btn btn_r" href=""
          ><i class="iconfont icon-del2 red"></i> 删除</a
        >
      </div>
    </div>
    <div class="pm_form_zw pb25">
      <form class="mt10">
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>债务人名称：</label>
          <div class="form_value">
            <div>
              <input
                class="big_input"
                type="text"
                placeholder="请输入"
                name=""
              />
            </div>
            <span class="gray9"></span>
          </div>
          <p class="error">请输入债务人名称</p>
          <!--错误提示-->
        </div>
      </form>
      <form class="mt10">
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name">债务人行业：</label>
          <div class="form_value">
            <select>
              <option value="请选择">请选择</option>
            </select>
            <span class="gray9"></span>
          </div>
        </div>
      </form>
      <form class="mt10">
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name">债务人性质：</label>
          <div class="form_value">
            <select>
              <option value="请选择">请选择</option>
            </select>
            <span class="gray9"></span>
          </div>
        </div>
      </form>
      <form class="mt10 ofw">
        <div class="form_item mb10 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>所在地：</label>
          <div class="form_value">
            <select>
              <option value="请选择">请选择</option>
            </select>
            <select>
              <option value="请选择">请选择</option>
            </select>
            <select>
              <option value="请选择">请选择</option>
            </select>
            <span class="gray9"></span>
          </div>
          <p class="error" style="margin-left: 130px">请选择省市区</p>
          <!--错误提示-->
        </div>
      </form>
      <form class="mt10">
        <div class="form_item ofw form-group has-feedback">
          <label class="form_name">债务人详细描述：</label>
          <div class="form_value">
            <textarea class="editor2"></textarea>
          </div>
        </div>
      </form>
      <div class="form_value">
        <a class="btn btn_r" href=""
          ><i class="iconfont icon-del2 red"></i> 删除</a
        >
      </div>
    </div>
    <div class="text-center mt20 mb20">
      <a class="btn bg-red white" href="">
        <i class="iconfont icon-add"></i> 添加债务人信息</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>