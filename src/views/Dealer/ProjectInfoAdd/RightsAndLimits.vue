<template>
  <div class="manager_main">
    <span class="tip_text">权利及限制情况</span>
    <form class="mt10 form_line">
      <div class="form_item ofw form-group has-feedback">
        <label class="form_name">诉讼情况：</label>
        <div class="form_value">
          <a class="btn" href="" style="display: none">
            <i class="iconfont icon-add red"></i> 增加诉讼信息</a
          >
          <a class="btn" href="">
            <i class="iconfont icon-del2 red"></i> 删除诉讼信息</a
          >
          <!--默认只显示增加按钮，有无诉讼及补充说明隐藏，点击增加后，有无诉讼及补充说明展示出来，并且按钮变为删除按钮-->
        </div>
      </div>
      <div class="form_item ofw form-group has-feedback">
        <label class="form_name"><i class="red">*</i>有无诉讼：</label>
        <div class="form_value">
          <label><input type="radio" name="radio" />有</label>
          <label><input type="radio" name="radio" />无</label>
          <label><input type="radio" name="radio" />未知</label>
        </div>
      </div>
      <div class="form_item mb10 form-group has-feedback">
        <label class="form_name">诉讼案号：</label>
        <div class="form_value">
          <input type="text" placeholder="请输入" name="" />
        </div>
      </div>
      <div class="mt10 ofw">
        <div class="form_item mb10 col-lg-6 ofw form-group has-feedback">
          <label class="form_name"><i class="red">*</i>执行情况：</label>
          <div class="form_value">
            <select>
              <option value="请选择">请选择</option>
              <option value="未执行">未执行</option>
              <option value="执行中">执行中</option>
              <option value="执行终结">执行终结</option>
              <option value="其他">其他</option>
            </select>
            <span class="gray9"></span>
          </div>
        </div>
        <div class="form_item mb10 col-lg-6 ofw form-group has-feedback">
          <label class="form_name">执行案号：</label>
          <div class="form_value">
            <input type="text" placeholder="请输入" name="" />
          </div>
        </div>
      </div>
      <div class="form_item ofw form-group has-feedback">
        <label class="form_name">诉讼补充说明：</label>
        <div class="form_value">
          <textarea class="editor2"></textarea>
        </div>
      </div>
    </form>
    <form class="mt10 form_line">
      <div class="form_item ofw form-group has-feedback">
        <label class="form_name">查封情况：</label>
        <div class="form_value">
          <a class="btn" href="">
            <i class="iconfont icon-add red"></i> 增加查封信息</a
          >
          <a class="btn" href="" style="display: none">
            <i class="iconfont icon-del2 red"></i> 删除查封信息</a
          >
        </div>
      </div>
      <div class="form_item ofw form-group has-feedback" style="display: none">
        <label class="form_name"><i class="red">*</i>有无查封：</label>
        <div class="form_value">
          <label><input type="radio" name="radio" />有</label>
          <label><input type="radio" name="radio" />无</label>
          <label><input type="radio" name="radio" />未知</label>
        </div>
      </div>
      <div class="form_item ofw form-group has-feedback" style="display: none">
        <label class="form_name">查封补充说明：</label>
        <div class="form_value">
          <textarea class="editor2"></textarea>
        </div>
      </div>
    </form>
    <form class="mt10 form_line">
      <div class="form_item ofw form-group has-feedback">
        <label class="form_name">抵押情况：</label>
        <div class="form_value">
          <a class="btn" href="">
            <i class="iconfont icon-add red"></i> 增加抵押信息</a
          >
          <a class="btn" href="" style="display: none">
            <i class="iconfont icon-del2 red"></i> 删除抵押信息</a
          >
        </div>
      </div>
      <div class="form_item ofw form-group has-feedback" style="display: block">
        <label class="form_name"><i class="red">*</i>有无抵押：</label>
        <div class="form_value">
          <label><input type="radio" name="radio" />有</label>
          <label><input type="radio" name="radio" />无</label>
          <label><input type="radio" name="radio" />未知</label>
        </div>
      </div>
      <div class="form_item mb10 ofw form-group has-feedback">
        <label class="form_name"><i class="red">*</i>抵押人名称：</label>
        <div class="form_value">
          <input class="big_input" type="text" placeholder="请输入" name="" />
          <span class="gray9"></span>
        </div>
        <p class="error">请输入抵押人名称</p>
        <!--错误提示-->
      </div>
      <div class="form_item ofw form-group has-feedback" style="display: block">
        <label class="form_name">抵押补充说明：</label>
        <div class="form_value">
          <textarea class="editor2"></textarea>
        </div>
      </div>
    </form>
    <form class="mt10 form_line">
      <div class="form_item ofw form-group has-feedback">
        <label class="form_name">经营情况：</label>
        <div class="form_value">
          <a class="btn" href="">
            <i class="iconfont icon-add red"></i> 增加经营信息</a
          >
          <a class="btn" href="" style="display: none">
            <i class="iconfont icon-del2 red"></i> 删除经营信息</a
          >
        </div>
      </div>
      <div class="form_item ofw form-group has-feedback" style="display: none">
        <label class="form_name"><i class="red">*</i>有无经营：</label>
        <div class="form_value">
          <label><input type="radio" name="radio" />有</label>
          <label><input type="radio" name="radio" />无</label>
          <label><input type="radio" name="radio" />未知</label>
        </div>
      </div>
      <div class="form_item ofw form-group has-feedback" style="display: none">
        <label class="form_name">经营补充说明：</label>
        <div class="form_value">
          <textarea class="editor2"></textarea>
        </div>
      </div>
    </form>
    <form class="mt10 form_line">
      <div class="form_item ofw form-group has-feedback">
        <label class="form_name">租赁情况：</label>
        <div class="form_value">
          <a class="btn" href="">
            <i class="iconfont icon-add red"></i> 增加租赁信息</a
          >
          <a class="btn" href="" style="display: none">
            <i class="iconfont icon-del2 red"></i> 删除租赁信息</a
          >
        </div>
      </div>
      <div class="form_item ofw form-group has-feedback" style="display: none">
        <label class="form_name"><i class="red">*</i>有无租赁：</label>
        <div class="form_value">
          <label><input type="radio" name="radio" />有</label>
          <label><input type="radio" name="radio" />无</label>
          <label><input type="radio" name="radio" />未知</label>
        </div>
      </div>
      <div class="form_item ofw form-group has-feedback" style="display: none">
        <label class="form_name">租赁补充说明：</label>
        <div class="form_value">
          <textarea class="editor2"></textarea>
        </div>
      </div>
    </form>
    <form class="mt10 form_line">
      <div class="form_item ofw form-group has-feedback">
        <label class="form_name">过户情况：</label>
        <div class="form_value">
          <a class="btn" href="">
            <i class="iconfont icon-add red"></i> 增加过户信息</a
          >
          <a class="btn" href="" style="display: none">
            <i class="iconfont icon-del2 red"></i> 删除过户信息</a
          >
        </div>
      </div>
      <div class="form_item ofw form-group has-feedback" style="display: none">
        <label class="form_name"><i class="red">*</i>有无过户：</label>
        <div class="form_value">
          <label><input type="radio" name="radio" />有</label>
          <label><input type="radio" name="radio" />无</label>
          <label><input type="radio" name="radio" />未知</label>
        </div>
      </div>
      <div class="form_item ofw form-group has-feedback" style="display: none">
        <label class="form_name">过户补充说明：</label>
        <div class="form_value">
          <textarea class="editor2"></textarea>
        </div>
      </div>
    </form>
    <form class="mt10">
      <div class="form_item ofw">
        <label class="form_name">共有情况：</label>
        <div class="form_value">
          <a class="btn" href="">
            <i class="iconfont icon-add red"></i> 增加共有信息</a
          >
          <a class="btn" href="" style="display: none">
            <i class="iconfont icon-del2 red"></i> 删除共有信息</a
          >
        </div>
      </div>
      <div class="form_item ofw" style="display: none">
        <label class="form_name"><i class="red">*</i>有无共有：</label>
        <div class="form_value">
          <label><input type="radio" name="radio" />有</label>
          <label><input type="radio" name="radio" />无</label>
          <label><input type="radio" name="radio" />未知</label>
        </div>
      </div>
      <div class="form_item ofw" style="display: none">
        <label class="form_name">共有补充说明：</label>
        <div class="form_value">
          <textarea class="editor2"></textarea>
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