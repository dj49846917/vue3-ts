<template>
  <front-header />
  <front-search />
  <front-nav />
  <router-view />
  <front-footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FrontHeader from "@/Layout/frontLayout/Header.vue";
import FrontSearch from "@/Layout/frontLayout/Search.vue";
import FrontNav from "@/Layout/frontLayout/Nav.vue";
import FrontFooter from "@/Layout/frontLayout/Footer.vue";
export default defineComponent({
  components: {
    FrontHeader,
    FrontSearch,
    FrontNav,
    FrontFooter
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>