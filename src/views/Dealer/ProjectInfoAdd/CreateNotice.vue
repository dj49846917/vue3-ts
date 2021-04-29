<template>
  <div class="manager_main">
    <span class="tip_text">创建公告</span>
    <form class="mt10">
      <div class="form_item mb10 ofw form-group has-feedback">
        <label class="form_name"><i class="red">*</i>公告标题：</label>
        <span class="useful-text">关于</span>
        <el-form-item prop="NoticeTitle">
          <el-input v-model="addForm.NoticeTitle" />
        </el-form-item>
        <span>的公告</span>
      </div>
      <div class="form_item mb10 ofw form-group has-feedback">
        <label class="form_name"><i class="red">*</i>公告详情：</label>
        <el-form-item prop="NoticeContent">
          <el-input type="textarea" v-model="addForm.NoticeContent" />
        </el-form-item>
        <!--错误提示-->
      </div>
      <div class="form_item mb10 ofw form-group has-feedback">
        <label class="form_name">上传附件：</label>
        <div class="form_value">
          <div class="ofw">
            <a class="btn" href="">上传附件</a>
            <span class="gray9"
              >仅限上传txt、doc、docx、xls、xlsx、pdf格式，大小不超过30M</span
            >
            <!--上传内容展示-->
            <ul class="update_list">
              <li class="ofw">
                <a class="omit" href=""
                  >文档标题.docx<i class="iconfont icon-gou"></i
                  ><i class="del">×</i></a
                >
              </li>
              <!--点击文档标题可下载-->
              <li class="ofw">
                <a class="omit" href=""
                  >文档标题.docx<i class="iconfont icon-gou"></i
                  ><i class="del">×</i></a
                >
              </li>
            </ul>
            <!--上传内容展示 end-->
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["addForm", "addRules"],
  setup() {
    return {};
  },
});
</script>

<style scoped>
.el-form-item {
  display: inline-block;
}
</style>