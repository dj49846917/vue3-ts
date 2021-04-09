<template>
  <div class="manager_content">
    <div class="manager_step">
      <span class="title">联系信息</span>
    </div>
    <div class="manager_main">
      <span class="tip_text"
        >公司负责人&nbsp;&nbsp;&nbsp;<a href=""
          ><i class="iconfont icon-xiugai"></i>修改</a
        >
      </span>
      <!--默认展示-->
      <form class="mt10">
        <div class="form_item ofw">
          <label class="form_name">姓名：</label>
          <div class="form_value"><span>{{ DealerInfo.CompanyInChargeName }}</span></div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">手机：</label>
          <div class="form_value"><span>{{ DealerInfo.CompanyInChargePhone }}</span></div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">公司电话：</label>
          <div class="form_value"><span>{{ DealerInfo.CompanyInChargeStandbyNumber }}</span></div>
        </div>
      </form>
      <!--点击修改-->
      <form class="mt10">
        <div class="form_item ofw">
          <label class="form_name"><i class="red">*</i>姓名：</label>
          <div class="form_value"><input type="text" value="费洪建" /></div>
        </div>
        <div class="form_item ofw">
          <label class="form_name"><i class="red">*</i>手机：</label>
          <div class="form_value">
            <input type="text" value="13399858477" />
          </div>
        </div>
        <div class="form_item ofw">
          <label class="form_name"><i class="red">*</i>公司电话：</label>
          <div class="form_value">
            <input type="text" value="13399858477" />
          </div>
        </div>
        <div class="form_item ofw">
          <label class="form_name"></label>
          <div class="form_value">
            <a class="btn_mini fl mr10" href="">保存</a>
            <a class="btn_mini fl" href="">取消</a>
          </div>
        </div>
      </form>
    </div>
    <div class="manager_main">
      <span class="tip_text"
        >店铺负责人&nbsp;&nbsp;&nbsp;<a href=""
          ><i class="iconfont icon-xiugai"></i>修改</a
        >
      </span>
      <!--默认展示-->
      <form class="mt10">
        <div class="form_item ofw">
          <label class="form_name">姓名：</label>
          <div class="form_value"><span>{{ DealerInfo.StoreInChargeName }}</span></div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">手机：</label>
          <div class="form_value"><span>{{ DealerInfo.StoreInChargePhone }}</span></div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">公司电话：</label>
          <div class="form_value"><span>{{ DealerInfo.StoreInChargeStandbyNumber }}</span></div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">邮箱：</label>
          <div class="form_value"><span>{{ DealerInfo.StoreInChargeEmail }}</span></div>
        </div>
      </form>
      <!--点击修改-->
      <form class="mt10">
        <div class="form_item ofw">
          <label class="form_name"><i class="red">*</i>姓名：</label>
          <div class="form_value"><input type="text" value="费洪建" /></div>
        </div>
        <div class="form_item ofw">
          <label class="form_name"><i class="red">*</i>手机：</label>
          <div class="form_value">
            <input type="text" value="13399858477" />
          </div>
        </div>
        <div class="form_item ofw">
          <label class="form_name"><i class="red">*</i>公司电话：</label>
          <div class="form_value">
            <input type="text" value="13399858477" />
          </div>
        </div>
        <div class="form_item ofw">
          <label class="form_name"><i class="red">*</i>邮箱：</label>
          <div class="form_value">
            <input type="text" value="13399858477" />
          </div>
        </div>
        <div class="form_item ofw">
          <label class="form_name"></label>
          <div class="form_value">
            <a class="btn_mini fl mr10" href="">保存</a>
            <a class="btn_mini fl" href="">取消</a>
          </div>
        </div>
      </form>
    </div>
    <div class="manager_main line_none">
      <span class="tip_text"
        >售后联系人&nbsp;&nbsp;&nbsp;<a href=""
          ><i class="iconfont icon-xiugai"></i>修改</a
        >
      </span>
      <!--默认展示-->
      <form class="mt10">
        <div class="form_item ofw">
          <label class="form_name">姓名：</label>
          <div class="form_value"><span>{{ DealerInfo.AfterSaleName }}</span></div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">手机：</label>
          <div class="form_value"><span>{{ DealerInfo.AfterSalePhone }}</span></div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">公司电话：</label>
          <div class="form_value"><span>{{ DealerInfo.AfterSaleStandbyNumber }}</span></div>
        </div>
      </form>
      <!--点击修改-->
      <form class="mt10">
        <div class="form_item ofw">
          <label class="form_name"><i class="red">*</i>姓名：</label>
          <div class="form_value"><input type="text" value="费洪建" /></div>
        </div>
        <div class="form_item ofw">
          <label class="form_name"><i class="red">*</i>手机：</label>
          <div class="form_value">
            <input type="text" value="13399858477" />
          </div>
        </div>
        <div class="form_item ofw">
          <label class="form_name"><i class="red">*</i>公司电话：</label>
          <div class="form_value">
            <input type="text" value="13399858477" />
          </div>
        </div>
        <div class="form_item ofw">
          <label class="form_name"></label>
          <div class="form_value">
            <a class="btn_mini fl mr10" href="">保存</a>
            <a class="btn_mini fl" href="">取消</a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';
import { CookieConfig } from "@/constant/config";
import Cookies from "js-cookie";
import { UserInfo } from '@/types/types';

export default defineComponent({
  setup() {
    let userInfo: UserInfo = {
      DealerInfo: null,
      LoginUserInfo: {},
    };
    try {
      userInfo = JSON.parse(Cookies.get(CookieConfig.USER_INFO) as string);
    } catch (error) {
      console.log("error", error);
    }
    return {
      ...toRefs(userInfo)
    };
  },
});
</script>

<style lang="scss" scoped>
</style>