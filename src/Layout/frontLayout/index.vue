<template>
  <front-header />
  <front-search />
  <front-nav v-if="!isLogin" />
  <router-view />
  <front-footer />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import FrontHeader from "@/components/Header.vue";
import FrontSearch from "@/Layout/frontLayout/Search.vue";
import FrontNav from "@/Layout/frontLayout/Nav.vue";
import FrontFooter from "@/components/Footer.vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
export default defineComponent({
  components: {
    FrontHeader,
    FrontSearch,
    FrontNav,
    FrontFooter,
  },
  setup() {
    const route = useRoute();
    const isLogin = ref(false)
    if(route.path === "/login" || route.path === "/register") {
      isLogin.value = true
    } else {
      isLogin.value = false
    }

    // 监听路由值得变化
    onBeforeRouteUpdate((to): void => {
      console.log("to.path", to.path)
      if(to.path === "/login" || to.path === "/register") {
        isLogin.value = true
      } else {
        isLogin.value = false
      }
    });
    return {
      isLogin,
    };
  },
});
</script>

<style scoped>
</style>