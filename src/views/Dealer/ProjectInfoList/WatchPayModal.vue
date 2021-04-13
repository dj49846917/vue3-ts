<template>
  <div class="modal watchMoneyModal" v-show="visible">
    <div class="modal_dialog fadeInBlowUp">
        <div class="modal_content">
            <div class="header ofw">
                <p class="fl">费用查看</p>
                <span class="off fr closeModal" @click="offClick()">×</span>
            </div>
            <div class="info">
                <table class="detail_table" width="100%">
                    <tbody>
                        <tr>
                            <td width="30%">软件服务费</td>
                            <td class="J_CostTechnology">竞买人未支付</td>
                        </tr>
                        <tr>
                            <td>保证金</td>
                            <td class="J_CostForegift">50,000 元已转移</td>
                        </tr>
                        <tr>
                            <td>综合服务费率</td>
                            <td class="J_CostOverall">您没有选择破产交易服务商</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="modal_footer">
                <a class="btn btn_red mt20" @click="offClick()">确认</a>
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
    // 点击取消
    function offClick() {
      emit("sureClickHandle", false)
    }
    return {
      offClick
    };
  },
});
</script>

<style scoped>
</style>