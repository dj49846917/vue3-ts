<template>
  <div class="manager_main">
    <span class="tip_text">竞价时间</span>
    <form class="mt10">
      <div class="form_item mb10 ofw form-group has-feedback">
        <label class="form_name"><i class="red">*</i>处置阶段：</label>
        <div class="form_value">
          <select>
            <option value="第一次">第一次</option>
            <option value="第二次">第二次</option>
            <option value="第三次">第三次</option>
            <option value="末次">末次</option>
            <option value="重新处置">重新处置</option>
            <option value="再次">再次</option>
          </select>
          <span class="gray9"></span>
        </div>
        <p class="error">请选择处置阶段</p>
        <!--错误提示-->
      </div>
      <div class="form_item mb10 ofw form-group has-feedback">
        <label class="form_name"><i class="red">*</i>竞价开始时间：</label>
        <div class="form_value">
          <select>
            <option value="请选择">请选择</option>
          </select>
          <span class="gray9"></span>
        </div>
        <p class="error">请选择竞价开始时间</p>
        <!--错误提示-->
      </div>
      <div class="form_item mb10 ofw form-group has-feedback">
        <label class="form_name"><i class="red">*</i>竞价结束时间：</label>
        <div class="form_value ofw">
          <label><input type="radio" name="radio" />竞价开始起24小时</label>
          <label><input type="radio" name="radio" />竞价开始起12小时</label>
          <label
            ><input
              type="radio"
              name="radio"
            />自定义&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <select style="display: none">
              <!--该下拉框默认隐藏，选择自定义后下拉框显示-->
              <option value="请选择">请选择</option>
            </select>
          </label>
        </div>
        <p class="error" style="margin-left: 130px">请选择竞价结束时间</p>
        <!--错误提示-->
      </div>
      <div class="form_item mb10 ofw form-group has-feedback">
        <label class="form_name">延时周期：</label>
        <div class="form_value">
          <p class="mt10">5分钟</p>
          <span class="gray9"
            >若有竞拍者在拍卖结束前5分钟内出价，则延时5分钟</span
          >
        </div>
      </div>
      <div class="form_item mb10 ofw form-group has-feedback">
        <label class="form_name"><i class="red">*</i>成交规则：</label>
        <div class="form_value ofw">
          <label><input type="radio" name="radio" />至少一人报名</label>
          <label><input type="radio" name="radio" />至少二人报名</label>
        </div>
        <p class="error" style="margin-left: 130px">请选择成交规则</p>
        <!--错误提示-->
      </div>
      <div class="form_item mb10 ofw form-group has-feedback">
        <label class="form_name"><i class="red">*</i>优先购买权人：</label>
        <div class="form_value ofw">
          <label><input type="radio" name="radio" />有</label>
          <label><input type="radio" name="radio" />无</label>
        </div>
        <p class="error" style="margin-left: 130px">请选择优先购买权人</p>
        <!--错误提示-->
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