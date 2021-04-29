<template>
  <div class="manager_main">
    <span class="tip_text">资产属性</span>
    <form class="mt10">
      <div class="form_item mb10 ofw form-group has-feedback">
        <label class="form_name"><i class="red">*</i>担保方式：</label>
        <div class="form_value">
          <select>
            <option value="请选择">请选择</option>
            <option value="信用">信用</option>
            <option value="抵押/质押">抵押/质押</option>
            <option value="保证">保证</option>
            <option value="抵押/质押+保证">抵押/质押+保证</option>
            <option value="其他">其他</option>
          </select>
          <span class="gray9"></span>
        </div>
        <p class="error">请选择担保方式</p>
        <!--错误提示-->
      </div>
    </form>
    <form class="mt10 ofw">
      <div class="form_item mb10 col-lg-6 form-group has-feedback">
        <label class="form_name"><i class="red">*</i>债权本金：</label>
        <div class="form_value">
          <div>
            <input type="text" placeholder="请输入" name="" />
            <span class="gray9">元</span>
          </div>
        </div>
        <p class="error">请输入债权本金</p>
        <!--错误提示-->
      </div>
      <div class="form_item mb10 col-lg-6 ofw form-group has-feedback">
        <label class="form_name"><i class="red">*</i>基准日：</label>
        <div class="form_value">
          <select>
            <option value="请选择">请选择</option>
          </select>
          <span class="gray9"></span>
        </div>
        <p class="error">请选择基准日</p>
        <!--错误提示-->
      </div>
    </form>
    <form class="mt10 ofw">
      <div class="form_item mb10 form-group has-feedback">
        <label class="form_name">未偿利息：</label>
        <div class="form_value">
          <input type="text" placeholder="请输入" name="" />
          <span class="gray9">元</span>
        </div>
      </div>
    </form>
    <form class="mt10 ofw">
      <div class="form_item mb10 col-lg-6 ofw form-group has-feedback">
        <label class="form_name">本息合计：</label>
        <div class="form_value">
          <span>0.00</span>
          <span class="gray9">元</span>
        </div>
      </div>
    </form>
    <form class="mt10 ofw">
      <div class="form_item mb10 ofw form-group has-feedback">
        <label class="form_name">所在地：</label>
        <div class="form_value">
          <span
            >系统默认将第一个抵押物（若无抵押物，则默认第一个债务人）所在地，用于前台筛选所在地使用，请重点填写。</span
          >
          <span class="gray9"></span>
        </div>
      </div>
    </form>
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