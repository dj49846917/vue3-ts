<template>
  <div class="container mb25 bg-white mt35">
    <div class="col-lg-7 login_pic">
      <div class="main">
        <img :src="login_img" style="width: 100%" />
      </div>
    </div>
    <div class="col-lg-5 login_box">
      <div class="info">
        <ul class="ofw top">
          <li @click="accountLogin()" :class="activeStyle" style="border: none">
            账号密码登录
          </li>
          <li
            @click="phoneLogin()"
            :class="activeStyle2"
            style="padding-left: 1em"
          >
            手机号登录
          </li>
        </ul>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleFormPhone"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item prop="Mobile" class="mt20">
            <el-input v-model="ruleForm.Mobile" placeholder="请输入手机号">
              <template #prefix>
                <i class="iconStyle iconfont icon-shouji"></i>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="PassWord" v-if="isActive">
            <el-input
              v-model="ruleForm.PassWord"
              type="password"
              placeholder="请输入登录密码"
            >
              <template #prefix>
                <i class="iconStyle iconfont icon-mima"></i>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="Code" v-if="!isActive" class="form-item-code">
            <el-input v-model="ruleForm.Code" placeholder="请输入验证码">
              <template #prefix>
                <i class="iconStyle iconfont icon-mima"></i>
              </template>
              <template #suffix>
                <span class="mr10 red2 codeBtn" v-if="isSendCode"
                  >{{ second }}秒重新获取</span
                >
                <span
                  class="mr10 red2 codeBtn2"
                  v-if="!isSendCode"
                  @click="sendMsg()"
                  >获取验证码</span
                >
              </template>
            </el-input>
          </el-form-item>
          <el-form-item class="form-item-nomargin">
            <el-button type="danger" class="save" @click="submitForm()"
              >立即登录</el-button
            >
          </el-form-item>
        </el-form>
        <div class="ofw mt10 text_bottom">
          <router-link class="fl" to="/register"
            >还没有账号？<span class="red2">立即注册</span></router-link
          >
          <router-link class="fr red2" to="/forgetpwd">忘记密码</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent, reactive, ref, toRefs, unref } from "vue";
import { ElForm, ElMessage } from "element-plus";
import { useStore } from "vuex";
import Cookies from "js-cookie";
import { myCheckPhone } from "@/utils/myValidate";
import { loginService } from "@/service/login";
import { useRouter } from "vue-router";
import { ENV_ICON } from "@/constant/index";
import { CookieConfig } from '@/constant/config';

export default defineComponent({
  setup() {
    // 设置背景颜色
    document.body.style.backgroundColor = "#f2f2f2";
    // 获取到vuex对象
    const store = useStore();
    const router = useRouter();
    let isActive = ref(true);
    // 用户名登录
    let activeStyle = reactive({
      fl: true,
      active: true,
    });
    // 手机号登录
    let activeStyle2 = reactive({
      fl: true,
      active: false,
    });

    const ruleFormPhone = ref<typeof ElForm>();
    // 表单model
    const ruleForm = reactive({
      Mobile: "",
      PassWord: "",
      Code: "",
    });
    // 是否发送验证码
    const sendCodeInfo = reactive({
      isSendCode: false,
      second: 60,
    });
    // 规则
    const rules = {
      Mobile: [{ validator: myCheckPhone, trigger: "blur" }],
      PassWord: [
        { required: true, message: "请输入登录密码", trigger: "blur" },
      ],
      Code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
    };

    // 点击账号密码登录
    function accountLogin(): void {
      isActive.value = true;
      activeStyle.active = true;
      activeStyle2.active = false;
      ruleForm.Mobile = "";
      ruleForm.PassWord = "";
      ruleForm.Code = "";
    }
    // 点击手机号码登录
    function phoneLogin() {
      isActive.value = false;
      activeStyle.active = false;
      activeStyle2.active = true;
      ruleForm.Mobile = "";
      ruleForm.PassWord = "";
      ruleForm.Code = "";
    }

    // 点击发送验证码
    function sendMsg() {
      const form = unref(ruleFormPhone);
      if (!form) return;
      // 校验手机号
      form.validateField("Mobile", (res: string) => {
        if (res) {
          return;
        }
        sendCodeInfo.isSendCode = true;
        let i = sendCodeInfo.second;
        var interval = setInterval(function () {
          i--;
          sendCodeInfo.second = i;
          if (i <= 0) {
            clearInterval(interval);
            sendCodeInfo.second = 60;
            sendCodeInfo.isSendCode = false;
          }
        }, 1000);
      });
    }

    // 保存
    async function submitForm() {
      const form = unref(ruleFormPhone);
      if (!form) return;
      try {
        await form.validate();
        const { Mobile, Code, PassWord } = ruleForm;
        // 普通登录
        let params;
        if (activeStyle.active) {
          params = {
            Mobile,
            PassWord,
          };
        }
        // 验证码登录
        if (!activeStyle.active) {
          params = {
            Mobile,
            Code,
          };
        }
        const result = await loginService(params);
        if (result.status === 200) {
          ElMessage.success({
            message: "登录成功",
            type: "success",
            duration: 1000,
            onClose: async () => {
              console.log("result.data.user", result.data.user)
              Cookies.set(CookieConfig.USER_INFO, JSON.stringify(result.data.user), { expires: 1 })
              router.push('/')
            }
          });
        }
      } catch (error) {}
    }

    return {
      login_img: ENV_ICON.login_img,
      accountLogin,
      phoneLogin,
      isActive,
      activeStyle,
      activeStyle2,
      rules,
      ruleForm,
      ruleFormPhone,
      submitForm,
      sendMsg,
      ...toRefs(sendCodeInfo),
    };
  },
});
</script>

<style lang="scss" scoped>
$lineHeight: 50px;
:deep(.el-form-item__content) {
  margin-left: 0 !important;
  width: 90%;
  // line-height: 50px;
}
// :deep(.el-input) {
//   line-height: 50px;
// }
:deep(.el-input__prefix) {
  left: 1rem;
  color: #666;
}
:deep(.el-input__inner) {
  height: $lineHeight;
  line-height: $lineHeight;
  border: 1px solid #ddd;
  background: #fafafa;
  color: #000;
  padding-left: 4rem !important;
  &::placeholder {
    color: #999;
  }
  &::-webkit-input-placeholder {
    /* WebKit browsers 适配谷歌 */
    color: #999;
  }
  &:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 适配火狐 */
    color: #999;
  }
  &::-moz-placeholder {
    /* Mozilla Firefox 19+ 适配火狐 */
    color: #999;
  }
  &:-ms-input-placeholder {
    /* Internet Explorer 10+  适配ie*/
    color: #999;
  }
}
.iconStyle {
  line-height: $lineHeight;
  font-size: 20px;
}
.save {
  width: 100%;
  height: 3.5em;
  line-height: 3.5em;
  padding: 0;
}
.form-item-nomargin {
  margin-bottom: 0;
}
.codeBtn {
  line-height: $lineHeight;
}
.codeBtn2 {
  cursor: pointer;
  line-height: $lineHeight;
}
:deep(.form-item-code .el-input__inner) {
  padding-right: 150px;
}
</style>