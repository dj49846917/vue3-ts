<template>
  <div>
    <front-header></front-header>
    <front-search></front-search>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FrontHeader from '@/Layout/frontLaylout/Header.vue'
import FrontSearch from '@/Layout/frontLaylout/Search.vue'
export default defineComponent({
  components: {
    FrontHeader,
    FrontSearch
  },
  setup () {
    return {}
  }
})
</script>

<style scoped>

</style>