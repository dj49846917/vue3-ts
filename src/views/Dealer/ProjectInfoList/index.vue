<template>
  <div class="manager_content">
    <div class="manager_step">
      <span class="title">标的物列表</span>
    </div>
    <div class="manager_main">
      <div class="manager_filter">
        <el-form
          :model="modelForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="90px"
          class="demo-ruleForm"
        >
          <el-form-item
            label="标的物名称:"
            prop="ProjectName"
            class="form_item"
          >
            <el-input
              v-model="modelForm.ProjectName"
              placeholder="请输入标的物名称"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="发布状态:"
            prop="ReleaseStatus"
            class="form_item"
          >
            <el-select
              clearable
              v-model="modelForm.ReleaseStatus"
              placeholder="请选择发布状态"
            >
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="拍卖状态:"
            prop="ProjectStatus"
            class="form_item"
          >
            <el-select
              clearable
              v-model="modelForm.ProjectStatus"
              placeholder="请选择拍卖状态"
            >
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="竞拍时间" class="form_item other">
            <el-col style="width: 200px">
              <el-date-picker
                type="date"
                placeholder="请选择"
                v-model="modelForm.StartDateBeg"
                style="width: 100%"
              ></el-date-picker>
            </el-col>
            <el-col style="margin: 0 5px">至</el-col>
            <el-col style="width: 200px">
              <el-date-picker
                type="date"
                placeholder="请选择"
                v-model="modelForm.StartDateEnd"
                style="width: 100%"
              ></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item class="btnOther">
            <el-button type="danger" @click="submitForm()">提交</el-button>
            <el-button type="danger" plain @click="resetForm()">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="manager_list mt10">
      <table>
        <thead>
          <tr>
            <th width="10%">编号</th>
            <th width="10%">主图</th>
            <th>名称</th>
            <th>竞价起止时间</th>
            <th width="20%">竞拍规则</th>
            <th width="10%">拍卖状态</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in modelForm.list" :key="item.AuctionProjectID">
            <td class="v-m">
              <div class="t-l">{{ item.ProjectCode }}</div>
            </td>
            <td class="v-m">
              <img class="p-img" :src="item.Image" style="width: 60px" alt="" />
            </td>
            <td class="v-m">
              <router-link
                :to="'/Auction/Detail?ID=' + item.AuctionProjectID"
                class="blue"
                >{{ item.ProjectName }}</router-link
              >
            </td>
            <td class="v-m">
              <div class="t-l">
                {{ item.BidStartDateParse }} - {{ item.BidEndDateParse }}
              </div>
            </td>
            <td class="">
              <div class="t-l">
                保证金：<span class="p-price">{{ item.EnteryFeeParse }}</span>
                元
              </div>
              <div class="t-l">
                起拍价：<span class="p-price">{{
                  item.StartingPriceParse
                }}</span>
                元<br />
              </div>
              <div class="t-l">
                最小加价幅度：<span class="p-price">{{
                  item.BidIncrementParse
                }}</span>
                元<br />
              </div>
              <div class="t-l">
                延时结束：<span class="p-price"
                  >{{ item.DelayPeriod }}分钟</span
                >
              </div>
              <!-- 成交情况 -->
              <div
                class="deal_detail blue"
                v-if="
                  item.ReleaseStatus === 2063004 &&
                  item.ProjectStatus === 2062003 &&
                  item.TransactionInfo
                "
                @mouseenter="enterDeal(index)"
                @mouseleave="leaveDeal(index)"
              >
                成交详情{{ item.isDealShow }}<i class="iconfont icon-right"></i>
                <div class="a-m-tip endContent" v-show="item.isDealShow">
                  <i><s></s></i>
                  <div class="tip-wrap">
                    <p>
                      <label>竞&nbsp;&nbsp;买&nbsp;&nbsp;号: </label
                      ><span>{{ item.TransactionInfo.BidNum }}</span>
                    </p>
                    <p>
                      <label>竞&nbsp;&nbsp;买&nbsp;&nbsp;人: </label
                      ><span>{{ item.TransactionInfo.UserName }}</span>
                    </p>
                    <p>
                      <label>身份证号: </label
                      ><span>{{ item.TransactionInfo.IDCard }}</span>
                    </p>
                    <p>
                      <label>成&nbsp;&nbsp;交&nbsp;&nbsp;价: </label
                      ><span>{{ item.TransactionInfo.TranscationFee }}</span>
                    </p>
                    <p>
                      <label>成交时间: </label
                      ><span>{{
                        item.TransactionInfo.TranscationTimeParse
                      }}</span>
                    </p>
                  </div>
                </div>
              </div>
            </td>
            <td class="v-m">正在进行</td>
            <td class="v-m operate">
              <a class="blue" href="">查看</a><br />
              <a class="blue" href="">复制拍品</a><br />
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

<script lang="ts">
import { ElForm } from "element-plus";
import { defineComponent, reactive, ref, unref, toRefs, onMounted } from "vue";
import { getList } from "@/service/auction";
import { getDicList } from "@/service/common";
import { number_format, parseDate } from "@/utils/utils";
import moment from "moment";
export default defineComponent({
  setup() {
    // form对象
    const ruleForm = ref<typeof ElForm>();
    // 表单对象
    const modelForm = reactive({
      ProjectName: "",
      ReleaseStatus: null,
      ProjectStatus: null,
      StartDateBeg: "",
      StartDateEnd: "",
      list: [],
      dicList: [],
    });
    // 规则
    const rules = {
      ProjectName: [
        { max: 30, message: "最多只能输入30个字符", trigger: "blur" },
      ],
    };

    onMounted(async () => {
      try {
        const params = {
          index: 1,
          page: 10,
        };
        const res = await getList(params);
        const param = {
          SubTypeCode: "2062,2063,2064",
        };
        const dicRes = await getDicList(param);
        console.log("dicRes", dicRes);
        res.data.data.forEach((item) => {
          // 开始时间
          item.BidStartDateParse = moment(
            Number(parseDate(item.BidStartDate))
          ).format("yyyy-MM-DD HH:mm:ss");
          // 结束时间
          item.BidEndDateParse = moment(
            Number(parseDate(item.BidEndDate))
          ).format("yyyy-MM-DD HH:mm:ss");
          // 保证金
          item.EnteryFeeParse = number_format(item.EnteryFee || 0, 2);
          // 起拍价
          item.StartingPriceParse = number_format(item.StartingPrice || 0, 2);
          // 最小加价幅度
          item.BidIncrementParse = number_format(item.BidIncrement || 0, 2);
          // 是否展示成交信息
          item.isDealShow = false
          // 有成交信息
          if (item.TransactionInfo) {
            item.TransactionInfo.TranscationTimeParse = moment(
              Number(parseDate(item.TransactionInfo.TranscationTime))
            ).format("yyyy-MM-DD HH:mm:ss");
          }
        });
        modelForm.list = res.data.data;
        modelForm.dicList = dicRes.data.data;
      } catch (error) {
        console.log("请求错误");
      }
    });

    // 查询
    async function submitForm() {
      const form = unref(ruleForm);
      if (!form) return;
      try {
        await form.validate();
        console.log("modelForm", modelForm.ProjectName);
      } catch (error) {}
    }

    // 进入
    function enterDeal(index:number) {
      modelForm.list[index].isDealShow = true
      console.log("modelForm.list[index].isDealShow", modelForm.list[index].isDealShow)
    }

    // 退出
    function leaveDeal(index:number) {
      modelForm.list[index].isDealShow = false
      console.log("modelForm.list[index]", modelForm.list[index].isDealShow)
    }
    return {
      ruleForm,
      modelForm,
      rules,
      submitForm,
      enterDeal,
      leaveDeal
    };
  },
});
</script>

<style lang="scss" scoped>
:deep(.el-form-item::after) {
  clear: none;
}
:deep(.el-form-item__content::after) {
  clear: none;
}
:deep(.el-form-item__content) {
  width: 200px;
}
.form_item {
  display: inline-block;
}
.manager_main {
  padding: 10px 0;
}
:deep(.manager_main form label) {
  padding: 0 6px 0 0;
}
:deep(.other .el-form-item__content) {
  width: auto;
}
:deep(.el-form-item) {
  margin-bottom: 16px;
}
:deep(.el-input__inner) {
  padding: 0 30px 0 15px;
}
:deep(.el-input--prefix .el-input__inner) {
  padding: 0 30px;
}
:deep(.btnOther .el-form-item__content) {
  margin: 0 auto !important;
  text-align: center;
}
:deep(.el-button) {
  width: 80px;
}
</style>