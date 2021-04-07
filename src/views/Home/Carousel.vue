<template>
  <div class="carousel-box">
    <el-carousel :interval="5000" autoplay arrow="always" trigger="click">
      <el-carousel-item>
        <img :src="banner" alt="First slide" />
      </el-carousel-item>
      <el-carousel-item>
        <img :src="banner2" alt="Second slide" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { ENV_ICON } from "@/constant/index";
export default {
  setup() {
    return {
      banner: ENV_ICON.banner,
      banner2: ENV_ICON.banner2,
    };
  },
};
</script>

<style lang="scss" scoped>
:deep(.el-carousel__button) {
  width: 12px;
  height: 12px;
  border-radius: 6px;
}
:deep(.el-carousel__indicator--horizontal) {
  padding: 12px 2px;
}
:deep(.el-carousel__arrow--left) {
  left: 120px;
}
:deep(.el-carousel__arrow--right) {
  right: 120px;
}
:deep(.el-carousel__arrow) {
  width: auto;
  height: auto;
  background-color: rgba(31, 45, 61, 0);
  color: #dcd2ca;
}
:deep(.el-carousel__arrow):hover {
  color: #fff;
}
:deep(.el-icon-arrow-left) {
  font-size: 50px;
}
:deep(.el-icon-arrow-right) {
  font-size: 50px;
}
img {
  width: 100%;
}
</style>