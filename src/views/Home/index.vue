<template>
  <home-carousel />
  <home-asset-auction />
  <home-judicial-auction />
  <home-footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HomeCarousel from '@/views/Home/Carousel.vue'
import HomeAssetAuction from '@/views/Home/AssetAuction.vue'
import HomeJudicialAuction from '@/views/Home/JudicialAuction.vue'
import HomeFooter from '@/views/Home/Footer.vue'
export default defineComponent({
  components: {
    HomeCarousel,
    HomeAssetAuction,
    HomeJudicialAuction,
    HomeFooter
  },
  setup () {
    return {}
  }
})
</script>

<style scoped>

</style>