<template>
  <div class="manager_main">
    <span class="tip_text">资产属性</span>
    <form class="mt10">
      <div class="form_item mb10 ofw form-group has-feedback">
        <label class="form_name"><i class="red">*</i>流转方式：</label>
        <div class="form_value">
          <select>
            <option value="请选择">请选择</option>
            <option value="转让">转让</option>
            <option value="出租">出租</option>
            <option value="转租">转租</option>
          </select>
          <span class="gray9"></span>
        </div>
        <p class="error">请选择流转方式</p>
        <!--错误提示-->
      </div>
    </form>
    <form class="mt10 ofw">
      <div class="form_item mb10 col-lg-6 ofw form-group has-feedback">
        <label class="form_name"><i class="red">*</i>物业类型：</label>
        <div class="form_value">
          <select>
            <option value="请选择">请选择</option>
            <option value="住宅用房">住宅用房</option>
            <option value="工业用房">工业用房</option>
            <option value="商业用房">商业用房</option>
            <option value="其他用房">其他用房</option>
            <option value="车位">车位</option>
          </select>
          <span class="gray9"></span>
        </div>
        <p class="error">请选择物业类型</p>
        <!--错误提示-->
      </div>
      <div class="form_item mb10 col-lg-6 ofw form-group has-feedback">
        <label class="form_name"><i class="red">*</i>房屋用途：</label>
        <div class="form_value">
          <select>
            <option value="请选择">请选择</option>
            <option value="商住房">商住房</option>
            <option value="商铺">商铺</option>
            <option value="写字楼">写字楼</option>
            <option value="其他">其他</option>
          </select>
          <span class="gray9"></span>
        </div>
        <p class="error">请选择房屋用途</p>
        <!--错误提示-->
      </div>
    </form>
    <form class="mt10">
      <div class="form_item mb10 form-group has-feedback">
        <label class="form_name"><i class="red">*</i>所在地：</label>
        <div class="form_value">
          <select>
            <option value="请选择">请选择</option>
          </select>
          <select>
            <option value="请选择">请选择</option>
          </select>
          <select>
            <option value="请选择">请选择</option>
          </select>
          <span class="gray9"></span>
        </div>
        <div class="form_value input_box">
          <input
            class="big_input"
            type="text"
            placeholder="请输入详细地址"
            name=""
          />
          <span class="gray9"></span>
          <ul class="input_list bg-white">
            <li class="omit">财富中心</li>
            <li class="omit">财富中心财富中心</li>
            <li class="omit">
              财富中心财富中心财富中心财富中心财富中心财富中心财富中心财富中心财富中心财富中心财富中心财富中心财富中心财富中心财富中心
            </li>
            <li class="omit">财富中心财富中心财富中心财富中心财富中心</li>
            <li class="omit">财富中心财富中心财富中心</li>
            <li class="omit">财富中心财富中心财富中心</li>
            <li class="omit">财富中心财富中心财富中心</li>
            <li class="omit">财富中心财富中心财富中心</li>
            <li class="omit">财富中心财富中心财富中心</li>
            <li class="omit">财富中心财富中心财富中心</li>
          </ul>
        </div>
        <p class="error" style="margin-left: 130px">请选择省市区</p>
        <!--错误提示-->
      </div>
    </form>
    <form class="mt10 ofw">
      <div class="form_item mb10 col-lg-5 form-group has-feedback">
        <label class="form_name">经度：</label>
        <div class="form_value">
          <input type="text" placeholder="请输入" name="" />
        </div>
      </div>
      <div class="form_item mb10 col-lg-5 form-group has-feedback ofw">
        <label class="form_name" style="width: auto">纬度：</label>
        <div class="form_value">
          <input class="" type="text" placeholder="请输入" name="" />
          <a
            class="btn"
            href=""
            style="height: 36px; margin-top: 0; line-height: 26px"
            >查看地图</a
          >
        </div>
      </div>
    </form>
    <form class="mt10">
      <div class="form_item mb10 ofw form-group has-feedback">
        <label class="form_name"><i class="red">*</i>小区名称：</label>
        <div class="form_value">
          <input
            class="big_input"
            type="text"
            placeholder="请输入详细地址"
            name=""
          />
          <span class="gray9"></span>
        </div>
        <p class="error">请输入小区名称</p>
        <!--错误提示-->
      </div>
    </form>
    <form class="mt10">
      <div class="form_item mb10 ofw form-group has-feedback">
        <label class="form_name"><i class="red">*</i>朝向：</label>
        <div class="form_value">
          <select>
            <option value="请选择">请选择</option>
            <option value="东">东</option>
            <option value="南">南</option>
            <option value="西">西</option>
            <option value="北">北</option>
            <option value="东南">东南</option>
            <option value="东北">东北</option>
            <option value="西北">西北</option>
            <option value="西南">西南</option>
            <option value="东西">东西</option>
            <option value="南北">南北</option>
            <option value="其他朝向">其他朝向</option>
          </select>
          <span class="gray9"></span>
        </div>
        <p class="error">请选择朝向</p>
        <!--错误提示-->
      </div>
    </form>
    <form class="mt10 ofw">
      <div class="form_item mb10 ofw form-group has-feedback">
        <label class="form_name"><i class="red">*</i>户型：</label>
        <div class="form_value">
          <select>
            <option value="">室</option>
          </select>
          <select>
            <option value="">厅</option>
          </select>
          <select>
            <option value="">卫</option>
          </select>
          <span class="gray9"></span>
        </div>
        <p class="error" style="margin-left: 130px">请选择户型</p>
        <!--错误提示-->
      </div>
    </form>
    <form class="mt10 ofw">
      <div class="form_item mb10 col-lg-6 ofw form-group has-feedback">
        <label class="form_name"><i class="red">*</i>房源类型：</label>
        <div class="form_value">
          <select>
            <option value="请选择">请选择</option>
            <option value="新房">新房</option>
            <option value="二手房">二手房</option>
          </select>
          <span class="gray9"></span>
        </div>
        <p class="error">请选择房源类型</p>
        <!--错误提示-->
      </div>
      <div class="form_item mb10 col-lg-6 ofw form-group has-feedback">
        <label class="form_name"><i class="red">*</i>装修程度：</label>
        <div class="form_value">
          <select>
            <option value="请选择">请选择</option>
            <option value="毛坯">毛坯</option>
            <option value="精装">精装</option>
            <option value="普通装修">普通装修</option>
          </select>
          <span class="gray9"></span>
        </div>
        <p class="error">请选择装修程度</p>
        <!--错误提示-->
      </div>
    </form>
    <form class="mt10 ofw">
      <div class="form_item mb10 col-lg-6 form-group has-feedback">
        <label class="form_name"><i class="red">*</i>建筑面积：</label>
        <div class="form_value">
          <input type="text" placeholder="请输入建筑面积" name="" />
          <span class="gray9">平方米</span>
        </div>
        <p class="error">请输入建筑面积</p>
        <!--错误提示-->
      </div>
      <div class="form_item mb10 col-lg-6 form-group has-feedback">
        <label class="form_name">土地面积：</label>
        <div class="form_value">
          <input type="text" placeholder="请输入土地面积" name="" />
          <span class="gray9">平方米</span>
        </div>
      </div>
    </form>
    <form class="mt10 ofw">
      <div class="form_item mb10 col-lg-6 form-group has-feedback">
        <label class="form_name">所在楼层：</label>
        <div class="form_value">
          <input type="text" placeholder="请输入" name="" />
          <span class="gray9">层</span>
        </div>
      </div>
      <div class="form_item mb10 col-lg-6 form-group has-feedback">
        <label class="form_name"><i class="red">*</i>总楼层：</label>
        <div class="form_value">
          <input type="text" placeholder="请输入" name="" />
          <span class="gray9">层</span>
        </div>
        <p class="error">请输入总楼层</p>
        <!--错误提示-->
      </div>
    </form>
    <form class="mt10 ofw">
      <div class="form_item mb10 col-lg-6 ofw form-group has-feedback">
        <label class="form_name">税费情况：</label>
        <div class="form_value">
          <select>
            <option value="请选择">请选择</option>
            <option value="有营业税">有营业税</option>
            <option value="无营业税">无营业税</option>
          </select>
          <span class="gray9"></span>
        </div>
      </div>
      <div class="form_item mb10 col-lg-6 ofw form-group has-feedback">
        <label class="form_name">建成时间：</label>
        <div class="form_value">
          <select>
            <option value="请选择">请选择</option>
          </select>
          <span class="gray9"></span>
        </div>
      </div>
    </form>
    <form class="mt10 ofw">
      <div class="form_item mb10 col-lg-6 ofw form-group has-feedback">
        <label class="form_name">权属性质：</label>
        <div class="form_value">
          <select>
            <option value="请选择">请选择</option>
            <option value="商品房">商品房</option>
            <option value="经济适用房">经济适用房</option>
            <option value="已购公有住房">已购公有住房</option>
            <option value="其他">其他</option>
          </select>
          <span class="gray9"></span>
        </div>
      </div>
      <div class="form_item mb10 col-lg-6 ofw form-group has-feedback">
        <label class="form_name">房产证登记日期：</label>
        <div class="form_value">
          <select>
            <option value=""></option>
          </select>
          <span class="gray9"></span>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>