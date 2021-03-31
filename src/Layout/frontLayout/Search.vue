<template>
  <div class="header bg-white">
    <div class="container ofw">
      <div class="col-lg-12">
        <div class="col-lg-6">
          <img class="fl logo" :src="logo" />
          <div class="fl address">
            <p class="gray6 f12">
              重庆<img class="arrow_down" :src="arrow_down" />
            </p>
          </div>
        </div>
        <div class="fl search_box ofw col-lg-6">
          <input
            class="f10"
            type="text"
            placeholder="请输入搜索关键词或房源名称"
          />
          <a class="white search_btn" href="">搜索</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ENV_ICON } from '@/constant/index'
export default defineComponent({
  setup() {
    return {
      logo: ENV_ICON.logo,
      arrow_down: ENV_ICON.arrow_down
    };
  },
});
</script>

<style scoped>
</style>