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
                  <li class="menuItem active"><router-link to="/">首页</router-link></li>
                  <li class="menuItem"><a href="#features">司法拍卖</a></li>
                  <li class="menuItem"><router-link to="/auction">资产竞拍</router-link></li>
                  <li class="menuItem"><a href="#installation">二手房源</a></li>
                  <li class="menuItem"><a href="#one-pager">代办服务</a></li>
                  <li class="menuItem"><a href="#extras">渠道商</a></li>
                  <!--<li class="menuItem"><a href="#wordpress">服务商</a></li>-->
                  <li class="menuItem"><a href="#contact">优选经纪人</a></li>
                  <li class="menuItem"><router-link to="/about">关于我们</router-link></li>
                  <li class="menuItem"><router-link to="/personal">个人中心</router-link></li>
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
</style>