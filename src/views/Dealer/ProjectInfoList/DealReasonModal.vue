<template>
  <div class="modal dealNotModal" v-show="visible">
    <div class="modal_dialog fadeInBlowUp">
      <div class="modal_content">
        <div class="header ofw">
          <p class="fl">交易未履行</p>
          <span class="off fr closeModal" href="javascript:void(0)" @click="offClick()">×</span>
        </div>
        <div class="info">
          <p class="red line pb15">
            <i class="iconfont icon-wenhao"></i
            >交易未履行是指：该标的物达到成交条件，但因为各种原因，无法完成后续手续交割。
          </p>
          <p class="black mt10">请填写交易未履行原因， 方便之后归档查询：</p>
          <p class="gray9">
            该原因并不会在前台网页展示，且操作并不会影响PDF中的竞价结果内容。
          </p>
          <textarea
            class="mt10"
            placeholder="需要列举原因: 如竞买人反悔，如法院取消该次拍卖等"
            id="dealNotReason"
          ></textarea>
        </div>
        <div class="modal_footer">
          <a class="btn btn_red mt20" @click="sureClick()">确认</a>
          <a class="btn btn_gray mt20" @click="offClick()">取消</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    // 点击确认
    function sureClick() {
      emit("sureClickHandle", false)
    }
    // 点击取消
    function offClick() {
      emit("sureClickHandle", false)
    }
    return {
      sureClick,
      offClick
    };
  },
});
</script>
<style scoped>

</style>