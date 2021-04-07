<template>
  <div class="container mb25">
    <!-- 搜索部分 -->
    <asset-auction-search />
    <!-- 列表 -->
    <asset-auction-list :list="list" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  reactive,
  toRefs,
} from "vue";
import AssetAuctionSearch from "@/views/AssetAuction/Search.vue";
import AssetAuctionList from "@/views/AssetAuction/List.vue";
import { getList } from '@/service/auction';

interface stateProps{
  list: Array<any>
}

export default defineComponent({
  components: {
    AssetAuctionSearch,
    AssetAuctionList,
  },
  setup() {
    let state:stateProps = reactive({
      list: [],
    });
    onMounted(async() => {
      const params = {
        index: 1,
        page: 10
      }
      try {
        const a =  await getList(params)
        state.list = a.data.data
      } catch (error) {
        console.log("error", error)
      }
    });

    return {
      ...toRefs(state),
    };
  },
});
</script>

<style scoped>
</style>