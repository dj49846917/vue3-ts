<template>
  <div>
    {{ data.count }}
    <hr />
    <div class="header">
      <div class="headerContent">
        <text class="headerText">222</text>
      </div>
    </div>
    <el-button type="primary">请客</el-button>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    console.log("store", store.state.user.num);
    let data = reactive({
      count: store.state.user.num,
    });
    return {
      data,
    };
  },
};
</script>

<style scoped lang="scss">
.header {
  width: 200px;
  height: 100px;
  background: red;
  .headerContent {
    width: 50px;
    height: 50px;
    background: yellow;
    .headerText {
      font-size: 20px;
    }
  }
}
</style>