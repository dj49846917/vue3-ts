<template>
  <div class="manager_content">
    <div class="manager_step">
      <span class="title">保证金信息</span>
    </div>
    <div class="manager_main">
      <span class="tip_text">申请退出店铺</span>
      <form class="mt10">
        <div class="form_item ofw">
          <div class="form_value">
            <span class="block" style="text-indent: 2em"
              >尊敬的商家您好，请您确定您的店铺负责人邮箱是否有效，若邮箱有变，请点击<a
                href=""
                class="red"
                >店铺管理-联系信息-店铺负责人</a
              >
              信息进行修改，此邮箱非常重要，在您申请关店和退保证金的过程中，我们会随时通知您的店铺负责人邮箱，告知您进展情况。审核通过后在10个工作日内保证金将会退回。</span
            >
          </div>
          <div class="form_value btn_box">
            <a class="fl" href="">申请关店</a>
          </div>
          <a class="fl blue mt20" href="" style="text-decoration: underline"
            >点击下载关店申请模板</a
          >
        </div>
      </form>
    </div>
    <div class="manager_main line_none">
      <span class="tip_text">保证金信息</span>
      <!--默认展示-->
      <form class="mt10">
        <div class="form_item ofw">
          <label class="form_name">保证金：</label>
          <div class="form_value"><span>10万</span></div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">合同起始时间：</label>
          <div class="form_value">
            <span>2020-1-12&nbsp;至&nbsp;2022-1-12</span>
          </div>
        </div>
      </form>
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