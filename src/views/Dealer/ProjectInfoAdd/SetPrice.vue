<template>
  <div class="manager_main">
    <span class="tip_text">价格设置</span>
    <form class="mt10 ofw">
      <div class="form_item mb10 col-lg-6 form-group has-feedback">
        <label class="form_name">评估价：</label>
        <div class="form_value">
          <input type="text" placeholder="请输入" value="0.00" name="" />
          <span class="gray9">元</span>
        </div>
        <p class="gray9">如无评估价，可不填</p>
      </div>
      <div class="form_item mb10 col-lg-6 form-group has-feedback">
        <label class="form_name">确认评估价：</label>
        <div class="form_value">
          <input type="text" placeholder="请输入" value="0.00" name="" />
          <span class="gray9">元</span>
        </div>
      </div>
    </form>
    <form class="mt10 ofw">
      <div class="form_item mb10 col-lg-6 form-group has-feedback">
        <label class="form_name">市场价：</label>
        <div class="form_value">
          <input type="text" placeholder="请输入" name="" />
          <span class="gray9">元</span>
        </div>
      </div>
      <div class="form_item mb10 col-lg-6 form-group has-feedback">
        <label class="form_name">确认市场价：</label>
        <div class="form_value">
          <input type="text" placeholder="请输入" name="" />
          <span class="gray9">元</span>
        </div>
      </div>
    </form>
    <p class="gray9" style="margin-left: 130px">
      如无市场价，可不填；同时填写评估价与市场价，优先展示市场价
    </p>
    <form class="mt10 ofw">
      <div class="form_item mb10 col-lg-6 form-group has-feedback">
        <label class="form_name"><i class="red">*</i>起始价：</label>
        <div class="form_value">
          <input type="text" placeholder="请输入" value="0.00" name="" />
          <span class="gray9">元</span>
        </div>
        <p class="error">请输入起始价</p>
        <!--错误提示-->
      </div>
      <div class="form_item mb10 col-lg-6 form-group has-feedback">
        <label class="form_name"><i class="red">*</i>确认起始价：</label>
        <div class="form_value">
          <input type="text" placeholder="请输入" value="0.00" name="" />
          <span class="gray9">元</span>
        </div>
        <p class="error">请输入确认起始价</p>
        <!--错误提示-->
      </div>
    </form>
    <form class="mt10 ofw">
      <div class="form_item mb10 col-lg-6 form-group has-feedback">
        <label class="form_name"><i class="red">*</i>保证金：</label>
        <div class="form_value">
          <input type="text" placeholder="请输入" value="0.00" name="" />
          <span class="gray9">元</span>
        </div>
        <p class="error">请输入保证金</p>
        <!--错误提示-->
      </div>
      <div class="form_item mb10 col-lg-6 form-group has-feedback">
        <label class="form_name"><i class="red">*</i>确认保证金：</label>
        <div class="form_value">
          <input type="text" placeholder="请输入" value="0.00" name="" />
          <span class="gray9">元</span>
        </div>
        <p class="error">请输入确认保证金</p>
        <!--错误提示-->
      </div>
    </form>
    <form class="mt10 ofw">
      <div class="form_item mb10 col-lg-6 form-group has-feedback">
        <label class="form_name"><i class="red">*</i>加价幅度：</label>
        <div class="form_value">
          <input type="text" placeholder="请输入" value="0.00" name="" />
          <span class="gray9">元</span>
        </div>
        <p class="error">请输入加价幅度</p>
        <!--错误提示-->
      </div>
    </form>
    <form class="mt10 ofw">
      <div class="form_item mb10 ofw form-group has-feedback">
        <label class="form_name">买家佣金：</label>
        <div class="form_value ofw">
          <label><input type="radio" name="radio" />有</label>
          <label><input type="radio" name="radio" checked />无</label>
        </div>
        <div class="form_item mb10 col-lg-12 form-group has-feedback">
          <label class="form_name"></label>
          <div class="form_value">
            <span>按成交比例</span>
            <input type="text" placeholder="请输入" value="0.00" name="" />
            <span class="gray9">%</span>
          </div>
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