<template>
  <front-header />
  <front-search />
  <front-nav v-if="!isLogin" />
  <router-view />
  <front-footer />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import FrontHeader from "@/Layout/frontLayout/Header.vue";
import FrontSearch from "@/Layout/frontLayout/Search.vue";
import FrontNav from "@/Layout/frontLayout/Nav.vue";
import FrontFooter from "@/Layout/frontLayout/Footer.vue";
import { useRoute } from "vue-router";
export default defineComponent({
  components: {
    FrontHeader,
    FrontSearch,
    FrontNav,
    FrontFooter
  },
  setup() {
    const route = useRoute()
    const isLogin = ref((route.path === "/login" || route.path === "/register") ? true : false)
    return {
      isLogin
    };
  },
});
</script>

<style scoped>
</style>