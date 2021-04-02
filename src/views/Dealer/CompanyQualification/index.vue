<template>
  <div class="manager_content">
    <div class="manager_step">
      <span class="title">公司资质</span>
    </div>
    <div class="manager_main manager_main2 line_none">
      <form class="mt10">
        <div class="form_item ofw">
          <label class="form_name">公司名称：</label>
          <div class="form_value"><span>九一融易资产管理有限公司</span></div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">注册号(营业执照号)：</label>
          <div class="form_value"><span> 91500112304929361K</span></div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">法定代表人姓名：</label>
          <div class="form_value"><span>胡宏</span></div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">法定代表人证件类型：</label>
          <div class="form_value"><span>大陆身份证</span></div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">证件号码：</label>
          <div class="form_value"><span>303653000146</span></div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">有效期：</label>
          <div class="form_value"><span>2015-01-09 至 长期</span></div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">法人身份证电子版：</label>
          <div class="form_value">
            <div class="ofw">
              <ul class="updateP_list ofw">
                <li class="fl">
                  <img :src="uploads2" style="width: 100%" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">注册所在地：</label>
          <div class="form_value"><span>重庆渝北区龙山街道</span></div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">成立日期：</label>
          <div class="form_value"><span>2014-05-12</span></div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">营业期限：</label>
          <div class="form_value"><span>从 2014-05-12 至 长期</span></div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">注册资本：</label>
          <div class="form_value"><span>5000万元</span></div>
        </div>
        <div class="form_item ofw">
          <label class="form_name">经营范围：</label>
          <div class="form_value">
            <span
              >资产管理；房屋中介；计算机网络信息技术开发及技术服务；计算机系统集成；计算机软件开发、销售；互联网信息咨询；网络营销策划。（依法须经批准的项目，经相关部门批准后方可开展经营活动）</span
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ENV_ICON } from '@/constant/index'

export default {
  setup() {
    return {
      uploads2: ENV_ICON.uploads2
    };
  },
};
</script>

<style lang="scss" scoped>
</style>