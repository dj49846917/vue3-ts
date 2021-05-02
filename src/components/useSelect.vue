<template>
  <el-select
    clearable
    v-model="modelForm.ReleaseStatus"
    placeholder="请选择发布状态"
  >
    <el-option
      v-for="item in ReleaseStatusArr"
      :key="item.DicCode"
      :label="item.DicName"
      :value="item.DicCode"
    ></el-option>
  </el-select>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ['ReleaseStatusArr', 'modelForm'],
  setup(props) {
    console.log("props", props)
    return {};
  },
});
</script>

<style scoped>
</style>