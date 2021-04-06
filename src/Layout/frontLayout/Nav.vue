<template>
  <div class="nav_box">
    <div class="navbar-wrapper">
      <div class="container">
        <div class="navwrapper">
          <div class="navbar navbar-inverse navbar-static-top">
            <div class="container">
              <div class="navbar-header">
                <button
                  type="button"
                  class="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              </div>
              <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                  <router-link to="/" class="nav-item">首页</router-link>
                  <router-link to="/1" class="nav-item">司法拍卖</router-link>
                  <router-link to="/auction" class="nav-item">资产竞拍</router-link>
                  <router-link to="/2" class="nav-item">二手房源</router-link>
                  <router-link to="/3" class="nav-item">代办服务</router-link>
                  <router-link to="/4" class="nav-item">渠道商</router-link>
                  <router-link to="/5" class="nav-item">优选经纪人</router-link>
                  <router-link to="/about" class="nav-item">关于我们</router-link>
                  <router-link to="/personal" class="nav-item">个人中心</router-link>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- End Navbar -->
      </div>
    </div>
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
  .nav-item {
    float: left;
    height: 60px;
    line-height: 60px;
    padding: 0 30px;
    color: #fff;
  }
  .nav-item:hover {
    background: #9c0510;
  }
  .router-link-exact-active {
    background: #9c0510;
  }
</style>