<template>
  <div class="manager_main">
    <span class="tip_text">资产属性</span>
    <form class="mt10">
      <div class="form_item mb10 ofw form-group has-feedback">
        <label class="form_name"><i class="red">*</i>流转方式：</label>
        <el-form-item prop="HouseAuctionInfo_TransferMode">
          <el-select
            v-model="addForm.HouseAuctionInfo_TransferMode"
            placeholder="请选择"
          >
            <el-option
              :value="item.DicCode"
              :label="item.DicName"
              v-for="item in transferModeArr"
              :key="item.DicCode"
            ></el-option>
          </el-select>
        </el-form-item>
      </div>
    </form>
    <form class="mt10 ofw">
      <div class="form_item mb10 col-lg-6 ofw form-group has-feedback">
        <label class="form_name"><i class="red">*</i>物业类型：</label>
        <el-form-item prop="HouseAuctionInfo_PropertyType">
          <el-select
            v-model="addForm.HouseAuctionInfo_PropertyType"
            placeholder="请选择"
          >
            <el-option
              :value="item.DicCode"
              :label="item.DicName"
              v-for="item in propertyTypeArr"
              :key="item.DicCode"
            ></el-option>
          </el-select>
        </el-form-item>
      </div>
      <div class="form_item mb10 col-lg-6 ofw form-group has-feedback">
        <label class="form_name"><i class="red">*</i>房屋用途：</label>
        <el-form-item prop="HouseAuctionInfo_HouseUse">
          <el-select
            v-model="addForm.HouseAuctionInfo_HouseUse"
            placeholder="请选择"
          >
            <el-option
              :value="item.DicCode"
              :label="item.DicName"
              v-for="item in houseUseArr"
              :key="item.DicCode"
            ></el-option>
          </el-select>
        </el-form-item>
      </div>
    </form>
    <form class="mt10">
      <div class="form_item mb10 form-group has-feedback">
        <label class="form_name"><i class="red">*</i>所在地：</label>
        <el-form-item prop="HouseAuctionInfo_Provice">
          <el-select
            v-model="addForm.HouseAuctionInfo_Provice"
            placeholder="请选择"
          >
            <el-option value="重庆市" label="重庆市"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="HouseAuctionInfo_City">
          <el-select
            v-model="addForm.HouseAuctionInfo_City"
            placeholder="请选择"
          >
            <el-option value="重庆市" label="重庆市"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="HouseAuctionInfo_RegionID">
          <el-select
            v-model="addForm.HouseAuctionInfo_RegionID"
            placeholder="请选择"
          >
            <el-option
              :value="item.DicCode"
              :label="item.DicName"
              v-for="item in regionIDArr"
              :key="item.DicCode"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="HouseAuctionInfo_AddressDetial" class="item">
          <el-input
            class="addressDetial"
            v-model="addForm.HouseAuctionInfo_AddressDetial"
            placeholder="请输入详细地址"
          />
        </el-form-item>
      </div>
    </form>
    <form class="mt10 ofw">
      <div class="form_item mb10 col-lg-6 ofw form-group has-feedback">
        <label class="form_name"><i class="red">*</i>经度：</label>
        <el-form-item prop="HouseAuctionInfo_Longitude">
          <el-input
            v-model="addForm.HouseAuctionInfo_Longitude"
            placeholder="请输入经度"
          />
        </el-form-item>
      </div>
      <div class="form_item mb10 col-lg-6 ofw form-group has-feedback latitude">
        <label class="form_name"><i class="red">*</i>纬度：</label>
        <el-form-item prop="HouseAuctionInfo_Latitude">
          <el-input
            v-model="addForm.HouseAuctionInfo_Latitude"
            placeholder="请输入纬度"
          />
        </el-form-item>
        <a
          class="btn"
          href="javascript:void(0)"
          style="height: 36px; margin-top: 0; line-height: 26px"
          >查看地图</a
        >
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
import { computed, defineComponent } from "vue";

export default defineComponent({
  props: ["addForm", "addRules", "transferModeArr"],
  setup(props) {
    // 流转方式
    const transferModeArr = computed(() => {
      return props.addForm.dicList.filter(
        (x: { SubTypeCode: number }) => x.SubTypeCode === 2052
      );
    });

    // 物业类型
    const propertyTypeArr = computed(() => {
      return props.addForm.dicList.filter(
        (x: { SubTypeCode: number }) => x.SubTypeCode === 2053
      );
    });

    // 房屋用途
    const houseUseArr = computed(() => {
      return props.addForm.dicList.filter(
        (x: { SubTypeCode: number }) => x.SubTypeCode === 2003
      );
    });

    // 房屋用途
    const regionIDArr = computed(() => {
      return props.addForm.dicList.filter(
        (x: { SubTypeCode: number }) => x.SubTypeCode === 1110
      );
    });

    return {
      transferModeArr,
      propertyTypeArr,
      houseUseArr,
      regionIDArr,
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/views/Dealer/ProjectInfoAdd/projectInfoAdd.scss";
.item {
  .addressDetial {
    width: 435px;
    margin-left: 130px;
  }
  :deep(.el-form-item__error) {
    margin-left: 130px;
  }
}
.latitude {
  .btn {
    border: solid 1px #dcdfe6;
    padding: 5px 15px;
  }
}
</style>