<template>
  <div class="modal dealModal" v-show="visible">
    <div class="modal_dialog fadeInBlowUp">
        <div class="modal_content">
            <div class="header ofw">
                <p class="fl">确认成交</p>
                <a class="off fr closeModal" href="javascript:void(0)">×</a>
            </div>
            <div class="info">
                <p class="red line pb15"><i class="iconfont icon-wenhao"></i>确认成交是指该标的物尾款已付，交割手续已经完成。</p>
                <p class="black mt20 f12">请确认该标的物是否已成交！</p>
                <p class="gray9 mt10">该操作主要用于之后的结案数据报表，并不会影响PDF中的竞价结果内容。</p>
            </div>
            <div class="modal_footer">
                <a class="btn btn_red mt20" @click="sureClick()">确认</a>
                <a class="btn btn_gray mt20 closeModal" @click="offClick()">取消</a>
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
.modal{
  display: block;
}
</style>