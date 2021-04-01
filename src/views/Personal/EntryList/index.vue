<template>
  <div class="manager_content">
    <div class="manager_step">
      <span class="title block">保证金</span>
    </div>
    <div class="manager_list mt10">
      <table>
        <thead>
          <tr>
            <th width="40%">竞拍详情</th>
            <th width="15%">保证金</th>
            <th width="18%">缴纳时间</th>
            <th width="10%">状态</th>
            <th width="17%">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="v-m">
              <img
                class="p-img fl mr10 col-lg-3"
                src="content/uploads/1.jpg"
                width="60"
                alt=""
              />
              <a href="" class="fl block col-lg-8 textL title" target="_blank"
                >关于对刘XX的债权转让</a
              >
            </td>
            <td class="">
              <div class="t-l textC"><span class="p-price">3000</span> 元</div>
            </td>
            <td class="v-m"><div class="t-l">2020.12.24 10:00</div></td>

            <td class="v-m red">已缴纳</td>
            <td class="v-m operate">
              <router-link class="blue" to="/personal/entrydetail">查看保证金</router-link><br />
            </td>
          </tr>
          <tr>
            <td class="v-m">
              <img
                class="p-img fl mr10 col-lg-3"
                src="content/uploads/1.jpg"
                width="60"
                alt=""
              />
              <a href="" class="fl block col-lg-8 textL title" target="_blank"
                >关于对刘XX的债权转让</a
              >
            </td>
            <td class="">
              <div class="t-l textC"><span class="p-price">3000</span> 元</div>
            </td>
            <td class="v-m"><div class="t-l">2020.12.24 10:00</div></td>

            <td class="v-m red">已缴纳</td>
            <td class="v-m operate">
              <router-link class="blue" to="/personal/entrydetail">查看保证金</router-link><br />
            </td>
          </tr>
          <tr>
            <td class="v-m">
              <img
                class="p-img fl mr10 col-lg-3"
                src="content/uploads/1.jpg"
                width="60"
                alt=""
              />
              <a href="" class="fl block col-lg-8 textL title" target="_blank"
                >石狮市世茂摩天城I-S-01幢商铺39单元</a
              >
            </td>
            <td class="">
              <div class="t-l textC"><span class="p-price">3000</span> 元</div>
            </td>
            <td class="v-m"><div class="t-l">2020.12.24 10:00</div></td>

            <td class="v-m">已释放</td>
            <td class="v-m operate">
              <router-link class="blue" to="/personal/entrydetail">查看保证金</router-link><br />
            </td>
          </tr>
        </tbody>
      </table>
      <div class="page-wrap">
        <div class="ui-pager">
          <a class="ui-pager-current">1</a>
          <a>2</a>
          <a>3</a>
          <a>4</a>
          <a>5</a>
          <span>...</span>
          <a>150</a>
          <a class="ui-pager-next">下一页</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>