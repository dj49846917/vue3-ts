<template>
  <div class="manager_content">
    <div class="manager_step">
      <span class="title">添加标的物</span>
    </div>
    <el-form :model="addForm" :rules="addRules" ref="projectForm">
      <!--创建公告-->
      <create-notice :addForm="addForm" :addRules="addRules" />
      <!--资产类型-->
      <div class="manager_main">
        <span class="tip_text">资产类型</span>
        <el-form-item prop="AssetType" label="选择类目: ">
          <el-select v-model="addForm.AssetType" placeholder="请选择类目">
            <el-option value="2060001" label="房产"></el-option>
            <el-option value="2060002" label="债权"></el-option>
          </el-select>
          <span class="gray9">请选择正确类目，以便买家快速找到</span>
        </el-form-item>
        <form class="mt10">
          <div class="form_item mb10 ofw form-group has-feedback">
            <label class="form_name"><i class="red">*</i>选择类目：</label>
            <div class="form_value">
              <select>
                <option value="房产">房产</option>
                <option value="债权">债权</option>
              </select>
              <span class="gray9">请选择正确类目，以便买家快速找到</span>
            </div>
            <p class="error">请选择类目</p>
            <!--错误提示-->
          </div>
        </form>
      </div>
      <!--基本描述-->
      <basic-description />
      <!--资产属性-->
      <house-assets-property />
      <!--资产详细描述-->
      <div class="manager_main">
        <span class="tip_text">资产详细描述</span>
        <form class="mt10">
          <div class="form_item mb10 ofw form-group has-feedback">
            <label class="form_name"><i class="red">*</i>描述内容：</label>
            <div class="form_value">
              <textarea class="editor"></textarea>
            </div>
            <p class="error" style="margin-left: 130px">请输入描述内容</p>
            <!--错误提示-->
          </div>
        </form>
      </div>
      <!--权利及限制情况-->
      <rights-and-limits />
      <!--相关附件-->
      <div class="manager_main">
        <span class="tip_text">相关附件</span>
        <form class="mt10">
          <div class="form_item mb10 ofw form-group has-feedback">
            <label class="form_name">上传附件：</label>
            <div class="form_value">
              <div class="ofw">
                <a class="btn" href="">上传附件</a>
                <span class="gray9"
                  >txt、doc、docx、xls、xlsx、pdf、png、jpg、jpeg格式，大小不超过10M</span
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
      <!--竞价时间-->
      <auction-time />
      <!--资金信息设置-->
      <div class="manager_main">
        <span class="tip_text">资金信息设置</span>
        <form class="mt10">
          <div class="form_item mb10 ofw form-group has-feedback">
            <label class="form_name mt10" style="line-height: 20px"
              ><i class="red">*</i>尾款线上支付关闭时间：</label
            >
            <div class="form_value">
              <span class="useful-text">竞价结束后</span>
              <input type="text" placeholder="请输入" />
              <span>天</span>
              <span class="gray9">请给买受人留充足的时间</span>
            </div>
            <p class="error">请设置尾款线上支付关闭时间</p>
            <!--错误提示-->
          </div>
        </form>
      </div>
      <!--竞买要求-->
      <div class="manager_main">
        <span class="tip_text">竞买须知</span>
        <form class="mt10">
          <div class="form_item mb10 ofw form-group has-feedback">
            <label class="form_name"><i class="red">*</i>竞买须知：</label>
            <div class="form_value">
              <textarea class="editor"></textarea>
            </div>
            <p class="error" style="margin-left: 130px">请输入竞买须知</p>
            <!--错误提示-->
          </div>
          <div class="form_item ofw form-group has-feedback">
            <label class="form_name"><i class="red">*</i>竞买人资质：</label>
            <div class="form_value">
              <div class="ofw">
                <label><input type="radio" name="radio" checked />无要求</label>
                <label
                  ><input
                    type="radio"
                    name="radio"
                  />有要求，无需审核&nbsp;&nbsp;&nbsp;<span class="gray9"
                    >竞买人知晓资质要求即可</span
                  ></label
                >
              </div>
              <div class="ofw sh_main" style="">
                <ul>
                  <li class="ofw mb10">
                    <input
                      class="fl big_input"
                      type="text"
                      placeholder="请输入资质要求"
                    />
                    <a href="" class="btn"
                      ><i class="iconfont icon-del2 red"></i>&nbsp;删除</a
                    >
                  </li>
                  <li class="ofw mb10">
                    <input
                      class="fl big_input"
                      type="text"
                      placeholder="请输入资质要求"
                    />
                    <a href="" class="btn"
                      ><i class="iconfont icon-del2 red"></i>&nbsp;删除</a
                    >
                  </li>
                  <li class="ofw mb10">
                    <input
                      class="fl big_input"
                      type="text"
                      placeholder="请输入资质要求"
                    />
                    <a href="" class="btn"
                      ><i class="iconfont icon-del2 red"></i>&nbsp;删除</a
                    >
                  </li>
                </ul>
                <a href="" class="btn" style="margin-left: 0"
                  ><i class="iconfont icon-add red"></i>&nbsp;添加更多</a
                >
                <p class="error mt10">请输入竞买人资质要求内容</p>
                <!--错误提示-->
                <p class="zhuyi mt10 gray6">
                  <i class="iconfont icon-zhuyi"></i
                  >&nbsp;&nbsp;注意：竞买人将在报名时，被要求阅读资质要求并进行勾选确认已知，方可缴纳保证金。
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
      <!--价格设置-->
      <set-price />
      <!--联系方式-->
      <div class="manager_main">
        <span class="tip_text">联系方式</span>
        <form class="mt10 ofw">
          <div class="form_item mb10">
            <label class="form_name"><i class="red">*</i>联系人名称：</label>
            <div class="form_value">
              <input type="text" placeholder="姓名" />
            </div>
            <p class="error">请输入联系人名称</p>
            <!--错误提示-->
          </div>
        </form>
        <form class="mt10 ofw">
          <div class="form_item mb10">
            <label class="form_name"><i class="red">*</i>联系人号码：</label>
            <div class="form_value">
              <input type="text" placeholder="手机号" />
              <span class="">或</span>
              <input type="text" placeholder="座机号" />
            </div>
            <p class="error">请输入联系人号码</p>
            <!--错误提示-->
          </div>
        </form>
      </div>

      <div class="btn_box mt35">
        <a href="">保存草稿</a>
        <a href="">提交</a>
        <el-button type="primary" @click="save()">提交</el-button>
        <!--提交按钮默认灰色，点保存按钮后，下一步变红可点击-->
      </div>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, unref } from "vue";
import CreateNotice from "@/views/Dealer/ProjectInfoAdd/CreateNotice.vue";
import BasicDescription from "@/views/Dealer/ProjectInfoAdd/BasicDescription.vue";
import HouseAssetsProperty from "@/views/Dealer/ProjectInfoAdd/HouseAssetsProperty.vue";
import CreditorAssetsProperty from "@/views/Dealer/ProjectInfoAdd/CreditorAssetsProperty.vue";
import RightsAndLimits from "@/views/Dealer/ProjectInfoAdd/RightsAndLimits.vue";
import AuctionTime from "@/views/Dealer/ProjectInfoAdd/AuctionTime.vue";
import SetPrice from "@/views/Dealer/ProjectInfoAdd/SetPrice.vue";
import CreditorPersonInfo from "@/views/Dealer/ProjectInfoAdd/CreditorPersonInfo.vue";
import CreditorAssetsInfo from "@/views/Dealer/ProjectInfoAdd/CreditorAssetsInfo.vue";
import { ElForm } from "element-plus";

export default defineComponent({
  components: {
    CreateNotice, // 创建公告
    BasicDescription, // 基本描述
    HouseAssetsProperty, // 房产——资产信息
    CreditorAssetsProperty, // 债权——资产信息
    RightsAndLimits, // 权利及限制情况
    AuctionTime, // 竞价时间
    SetPrice, // 价格设置,
    CreditorPersonInfo, // 债权——债务人、保证人信息
    CreditorAssetsInfo, // 债权——抵押物情况
  },
  setup() {
    const projectForm = ref<typeof ElForm>();
    // 表单model
    const addForm = reactive({
      NoticeTitle: "", // 公告标题
      NoticeContent: "", //公告详情
      AssetType: "",
    });
    // 规则
    const addRules = {
      NoticeTitle: [{ required: true, message: "请输入公告标题", trigger: "blur" }],
      NoticeContent: [{ required: true, message: "请输入公告详情", trigger: "blur" }],
      AssetType: [{ required: true, message: "请选择类目", trigger: "change" }],
    };

    // 点击保存
    async function save() {
      const form = unref(projectForm);
      if (!form) return;
      try {
        await form.validate();
        const { AssetType } = addForm;
        console.log("AssetType", AssetType)
      } catch (error) {}
    }

    return {
      projectForm,
      addForm,
      addRules,
      save
    };
  },
});
</script>

<style lang="scss" scoped>

</style>