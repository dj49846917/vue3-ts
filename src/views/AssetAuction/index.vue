<template>
<div class="container mb25">
  <!-- 搜索部分 -->
  <asset-auction-search />
  <!-- 列表 -->
  <asset-auction-list />
</div>
</template>

<script>
import AssetAuctionSearch from '@/views/AssetAuction/Search.vue'
import AssetAuctionList from '@/views/AssetAuction/List.vue'
export default {
  components: {
    AssetAuctionSearch,
    AssetAuctionList
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>