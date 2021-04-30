<template>
  <div class="manager_main">
    <span class="tip_text">基本描述</span>
    <form class="mt10">
      <div class="form_item mb10 ofw form-group has-feedback">
        <label class="form_name"><i class="red">*</i>名称：</label>
        <el-form-item prop="ProjectName">
          <el-input
            class="notice"
            v-model="addForm.ProjectName"
            placeholder="建议包含资产名称和特征关键词，最多可输入30个汉字"
          />
        </el-form-item>
      </div>
      <div class="form_item mb10 ofw form-group has-feedback">
        <label class="form_name"><i class="red">*</i>上传图片：</label>
        <div class="form_value">
          <div class="ofw">
            <a class="btn" href="">上传图片</a>
            <span class="gray9 block"
              >支持批量上传，最多5张图，至少1张，10MB单张限制，尺寸在5500x5500以内，支持JPG、PNG、JPEG、BMP格式。</span
            >
            <p class="error">请上传图片</p>
            <!--错误提示-->
            <!--上传内容展示-->
            <ul class="updateP_list ofw">
              <li class="fl">
                <img src="content/uploads/1.jpg" width="100%" height="100%" />
                <a class="del" href=""><i class="iconfont icon-cha"></i></a>
                <p>主图</p>
              </li>
              <li class="fl">
                <img src="content/uploads/1.jpg" width="100%" height="100%" />
                <a class="del" href=""><i class="iconfont icon-cha"></i></a>
                <p class="set"><a href="">设为主图</a></p>
              </li>
              <li class="fl">
                <img src="content/uploads/1.jpg" width="100%" height="100%" />
                <a class="del" href=""><i class="iconfont icon-cha"></i></a>
                <p class="set"><a href="">设为主图</a></p>
              </li>
              <li class="fl">
                <img src="content/uploads/1.jpg" width="100%" height="100%" />
                <a class="del" href=""><i class="iconfont icon-cha"></i></a>
                <p class="set"><a href="">设为主图</a></p>
              </li>
              <li class="fl">
                <img src="content/uploads/2.jpg" width="100%" height="100%" />
                <a class="del" href=""><i class="iconfont icon-cha"></i></a>
                <p class="set"><a href="">设为主图</a></p>
              </li>
            </ul>
            <!--上传内容展示 end-->
          </div>
        </div>
      </div>
      <div class="form_item mb10 ofw form-group has-feedback">
        <label class="form_name">上传视频：</label>
        <div class="form_value">
          <div class="ofw">
            <a class="btn" href="">上传视频</a>
            <span class="gray9 block" style="word-break: break-all"
              >上传视频不能大于200M，只能上传1个，支持的格式包括：wmv,avi,mpg,mpeg,3gp,mov,mp4,flv,f4v,m4v,m2t,mts,rmvb,vob,mkv</span
            >
            <!--上传内容展示-->
            <ul class="updateP_list ofw">
              <li class="fl">
                <img src="content/uploads/1.jpg" width="100%" height="100%" />
                <a class="del" href=""><i class="iconfont icon-cha"></i></a>
                <p>成功</p>
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

<style scoped lang="scss">
@import '@/views/Dealer/ProjectInfoAdd/projectInfoAdd.scss';
</style>