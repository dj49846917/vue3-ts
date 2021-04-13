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
              <el-option v-for="item in ReleaseStatusArr" :key="item.DicCode" :label="item.DicName" :value="item.DicCode"></el-option>
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
              <el-option v-for="item in ProjectStatusArr" :key="item.DicCode" :label="item.DicName" :value="item.DicCode"></el-option>
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
          <tr
            v-for="(item, index) in modelForm.list"
            :key="item.AuctionProjectID"
          >
            <td class="v-m">
              <div class="t-l">{{ item.ProjectCode }}</div>
            </td>
            <td class="v-m">
              <img class="p-img" :src="item.Image" style="width: 60px" alt="" />
            </td>
            <td class="v-m">
              <router-link :to="'/Auction/Detail?ID=' + item.AuctionProjectID" class="blue">{{ item.ProjectName }}</router-link>
            </td>
            <td class="v-m">
              <div class="t-l">
                {{ item.BidStartDateParse }} - {{ item.BidEndDateParse }}
              </div>
            </td>
            <td class="">
              <div class="t-l">
                保证金：<span class="p-price">{{ item.EnteryFeeParse }}</span>元
              </div>
              <div class="t-l">
                起拍价：<span class="p-price">{{ item.StartingPriceParse }}</span>元<br />
              </div>
              <div class="t-l">
                最小加价幅度：<span class="p-price">{{ item.BidIncrementParse }}</span>元<br />
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
                @mouseenter="enterDeal(index, 'isDealShow')"
                @mouseleave="leaveDeal(index, 'isDealShow')"
              >
                成交详情<i class="iconfont icon-right"></i>
                <div class="a-m-tip endContent" v-show="item.isDealShow">
                  <i><s></s></i>
                  <div class="tip-wrap">
                    <p>
                      <label>竞&nbsp;&nbsp;买&nbsp;&nbsp;号: </label>
                      <span>{{ item.TransactionInfo.BidNum }}</span>
                    </p>
                    <p>
                      <label>竞&nbsp;&nbsp;买&nbsp;&nbsp;人: </label>
                      <span>{{ item.TransactionInfo.UserName }}</span>
                    </p>
                    <p>
                      <label>身份证号: </label>
                      <span>{{ item.TransactionInfo.IDCard }}</span>
                    </p>
                    <p>
                      <label>成&nbsp;&nbsp;交&nbsp;&nbsp;价: </label>
                      <span>{{ item.TransactionInfo.TranscationFee }}</span>
                    </p>
                    <p>
                      <label>成交时间: </label>
                      <span>{{ item.TransactionInfo.TranscationTimeParse }}</span>
                    </p>
                  </div>
                </div>
              </div>
            </td>
            <!-- 状态 -->
            <td class="v-m">
              <!-- 发布状态不为审核通过 -->
              <div class="red" v-if="item.ReleaseStatus !== 2063004">
                {{ item.ReleaseStatusNameParse }}
              </div>
              <!-- 发布状态为审核通过，并且项目状态为已撤销 -->
              <div v-else-if="item.ReleaseStatus === 2063004 &&item.ProjectStatus === 2062005">
                {{ item.ProjectStatusNameParse }}
                <div 
                  class="deal_detail blue endBtn" 
                  @mouseenter="enterDeal(index, 'isReturnReason')"
                  @mouseleave="leaveDeal(index, 'isReturnReason')"
                >理由
                  <i class="iconfont icon-right"></i>
                  <div class="a-m-tip a-m-tip2 endContent" v-show="item.isReturnReason">
                    <i><s></s></i>
                    <div class="tip-wrap">撤回理由:
                      <span class="returnReasonTip">{{ item.ProjectStatusDescription }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 发布状态为审核通过，并且项目状态为已终止 -->
              <div v-else-if="item.ReleaseStatus === 2063004 && item.ProjectStatus === 2062006">
                {{ item.ProjectStatusNameParse }}
                <div 
                  class="deal_detail blue endBtn"
                  @mouseenter="enterDeal(index, 'isOffReason')"
                  @mouseleave="leaveDeal(index, 'isOffReason')"
                >理由
                  <i class="iconfont icon-right"></i>
                  <div class="a-m-tip a-m-tip2 endContent" v-show="item.isOffReason">
                    <i><s></s></i>
                    <div class="tip-wrap">
                      终止理由: {{ item.ProjectStatusDescription }}
                    </div>
                  </div>
                </div>
              </div>
              <!-- 发布状态为审核通过，并且项目状态为已成交,成交状态为未履行 -->
              <div v-else-if="item.ReleaseStatus === 2063004 && item.ProjectStatus === 2062003 && item.CompleteDealStatus === 2064001">
                {{ item.ProjectStatusNameParse }}
                <div 
                  class="deal_detail blue endBtn"
                  @mouseenter="enterDeal(index, 'isNotDealReason')"
                  @mouseleave="leaveDeal(index, 'isNotDealReason')"
                >理由
                  <i class="iconfont icon-right"></i>
                  <div class="a-m-tip a-m-tip2 endContent" v-show="item.isNotDealReason">
                    <i><s></s></i>
                    <div class="tip-wrap">
                      交易未履行理由: {{ item.CompleteDealDescription }}
                    </div>
                  </div>
                </div>
              </div>
              <!-- 发布状态为审核通过，并且项目状态为已成交,成交状态为待确认 -->
              <div v-else-if="item.ReleaseStatus === 2063004 && item.ProjectStatus === 2062003">{{ item.CompleteDealStatusNameParse }} </div>
              <div v-else>{{ item.ProjectStatusNameParse }}</div>
            </td>
            <td class="v-m operate">
              <span 
                class="blue btnStyle" 
                @click="goToDetail(item.AuctionProjectID, 'edit')" 
                v-if="item.ReleaseStatus === 2063001 || item.ReleaseStatus === 2063002 || item.ReleaseStatus === 2063005"
              >编辑标的物</span>
              <span 
                class="blue btnStyle" 
                @click="goToDetail(item.AuctionProjectID, 'watch')"
                v-if="item.ReleaseStatus === 2063001 || item.ReleaseStatus === 2063002 || item.ReleaseStatus === 2063005 || item.ProjectStatus === 2062001 || item.ProjectStatus === 2062002 || item.ProjectStatus === 2062005 || item.ProjectStatus === 2062006"
              >查看</span>
              <span 
                class="blue btnStyle" 
                @click="deleteProject(item.AuctionProjectID)"
                v-if="item.ReleaseStatus === 2063001 || item.ReleaseStatus === 2063002 || item.ReleaseStatus === 2063005 || item.ReleaseStatus === 2063003"
              >删除</span>
              <span 
                class="blue btnStyle" 
                @click="publishProject(item.AuctionProjectID)"
                v-if="item.ReleaseStatus === 2063002"
              >去发布</span>
              <span 
                class="blue btnStyle" 
                @click="returnProject(item.AuctionProjectID)"
                v-if="item.ReleaseStatus === 2063003 || item.ProjectStatus === 2062001"
              >撤回</span>
              <span 
                class="blue btnStyle" 
                @click="goToDetail(item.AuctionProjectID, 'copy')"
                v-if="item.ProjectStatus === 2062001 || item.ProjectStatus === 2062002 || item.ProjectStatus === 2062004 || item.ProjectStatus === 2062005"
              >复制拍品</span>
              <span 
                class="blue btnStyle" 
                @click="offProject(item.AuctionProjectID)"
                v-if="item.ProjectStatus === 2062001"
              >中止</span>
              <span 
                class="blue btnStyle" 
                @click="goToDetail(item.AuctionProjectID, 'copy')"
                v-if="item.ProjectStatus === 2062004"
              >继续处置</span>
              <span 
                class="blue btnStyle" 
                @click="dealProject('showDealSureModal', index)"
                v-if="item.ProjectStatus === 2062003 && (!item.CompleteDealStatus || item.CompleteDealStatus === 2064002)"
              >确认成交</span>
              <span 
                class="blue btnStyle" 
                @click="dealProject('showDealReasonModal', index)"
                v-if="item.ProjectStatus === 2062003 && (!item.CompleteDealStatus || item.CompleteDealStatus === 2064002)"
              >交易未履行</span>
              <span 
                class="blue btnStyle"
                @click="watchPay(index)"
                v-if="(item.ProjectStatus === 2062003 && (!item.CompleteDealStatus || item.CompleteDealStatus === 2064002)) || (item.ProjectStatus === 2062003 && (!item.CompleteDealStatus || item.CompleteDealStatus === 2064001)) || (item.ProjectStatus === 2062003 && (!item.CompleteDealStatus || item.CompleteDealStatus === 2064003))"
              >查看费用</span>
              <span 
                class="blue btnStyle" 
                @click="getUploadPDF(item.AuctionProjectID)"
                v-if="(item.ProjectStatus === 2062003 && (!item.CompleteDealStatus || item.CompleteDealStatus === 2064002)) || (item.ProjectStatus === 2062003 && (!item.CompleteDealStatus || item.CompleteDealStatus === 2064001)) || (item.ProjectStatus === 2062003 && (!item.CompleteDealStatus || item.CompleteDealStatus === 2064003))"
              >生成完整报告PDF</span>
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
  <!-- 确认成交弹窗 -->
  <is-sure-deal-modal :visible="modelForm.showDealSureModal" @sureClickHandle="getSureClick" />
  <!-- 交易未履行弹出 -->
  <deal-reason-modal :visible="modelForm.showDealReasonModal" @sureClickHandle="getNotDealClick" />
  <!-- 查看费用弹窗 -->
  <watch-pay-modal :visible="modelForm.showWatchPayModal" @sureClickHandle="getWatchPay" />
</template>

<script lang="ts">
import { ElForm } from "element-plus";
import { defineComponent, reactive, ref, unref, toRefs, onMounted, computed } from "vue";
import { getList } from "@/service/auction";
import { getDicList } from "@/service/common";
import { dicCodeToDicName, number_format, parseDate } from "@/utils/utils";
import moment from "moment";
import { DicType } from "@/types/types";
import { useRouter } from "vue-router";
import IsSureDealModal from '@/views/Dealer/ProjectInfoList/IsSureDealModal.vue';
import DealReasonModal from '@/views/Dealer/ProjectInfoList/DealReasonModal.vue';
import WatchPayModal from '@/views/Dealer/ProjectInfoList/WatchPayModal.vue';

interface modelFormProp {
  ProjectName: string | undefined,  // 标的物名称
  ReleaseStatus: number | null,     // 发布状态
  ProjectStatus: number | null,     // 项目状态
  StartDateBeg: string | undefined, // 竞拍开始时间
  StartDateEnd: string | undefined, // 竞拍截止时间
  list: any[], // 数据源
  dicList: DicType[], // 数据字典数据源
  current: number, // 当前列
  showDealSureModal: boolean, // 是否展示确认成交弹窗
  showDealReasonModal: boolean, // 是否展示交易未履行弹窗
  showWatchPayModal: boolean, // 是否展示查看费用弹窗
}
export default defineComponent({
  components: {
    IsSureDealModal,
    DealReasonModal,
    WatchPayModal,
  },
  setup() {
    // form对象
    const ruleForm = ref<typeof ElForm>();
    // 表单对象
    const modelForm:modelFormProp = reactive({
      ProjectName: "",
      ReleaseStatus: null,
      ProjectStatus: null,
      StartDateBeg: "",
      StartDateEnd: "",
      list: [],
      dicList: [],
      showDealSureModal: false,
      showDealReasonModal: false,
      showWatchPayModal: false,
      current: -1,
    });
    // 规则
    const rules = {
      ProjectName: [
        { max: 30, message: "最多只能输入30个字符", trigger: "blur" },
      ],
    };

    const router = useRouter()

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
        console.log("res", res);
        res.data.data.forEach(item => {
          // 开始时间
          item.BidStartDateParse = moment(Number(parseDate(item.BidStartDate))).format("yyyy-MM-DD HH:mm:ss");
          // 结束时间
          item.BidEndDateParse = moment(Number(parseDate(item.BidEndDate))).format("yyyy-MM-DD HH:mm:ss");
          // 保证金
          item.EnteryFeeParse = number_format(item.EnteryFee || 0, 2);
          // 起拍价
          item.StartingPriceParse = number_format(item.StartingPrice || 0, 2);
          // 最小加价幅度
          item.BidIncrementParse = number_format(item.BidIncrement || 0, 2);
          // 是否展示成交信息
          item.isDealShow = false;
          // 是否展示已撤回理由
          item.isReturnReason = false;
          // 是否展示终止理由
          item.isOffReason = false;
          // 是否展示交易未履行理由
          item.isNotDealReason = false;
          // 有成交信息
          if (item.TransactionInfo) {
            item.TransactionInfo.TranscationTimeParse = moment(Number(parseDate(item.TransactionInfo.TranscationTime))).format("yyyy-MM-DD HH:mm:ss");
          }
          // 发布状态
          item.ReleaseStatusNameParse = dicCodeToDicName(dicRes.data.data,item.ReleaseStatus);
          // 项目状态
          item.ProjectStatusNameParse = dicCodeToDicName(dicRes.data.data,item.ProjectStatus);
          // 成交状态
          item.CompleteDealStatusNameParse = dicCodeToDicName(dicRes.data.data,item.CompleteDealStatus ? item.CompleteDealStatus : 2064002) || '已成交待确认';
        });
        modelForm.list = res.data.data;
        modelForm.dicList = dicRes.data.data;
      } catch (error) {
        console.log("请求错误");
      }
    });

    // 项目状态
    const ProjectStatusArr = computed(()=> {
      return modelForm.dicList.filter(x=>x.SubTypeCode === 2062)
    })
    
    const ReleaseStatusArr = computed(()=> {
      return modelForm.dicList.filter(x=>x.SubTypeCode === 2063)
    })

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
    function enterDeal(index: number, key: string):void {
      modelForm.list[index][key] = true;
    }

    // 退出
    function leaveDeal(index: number, key: string):void {
      modelForm.list[index][key] = false;
    }

    // 点击按钮操作
    function goToDetail(id: string, type: string): void {
      router.push(`/dealer/projectinfoadd?id=${id}&type=${type}`)
    }

    // 点击确认成交、交易未履行
    function dealProject(key:'showDealSureModal' | 'showDealReasonModal' | 'showWatchPayModal', id: string): void {
      modelForm[key] = true
    }
    // 点击查看费用弹窗
    function watchPay(index: number) {
      modelForm.current = index
      modelForm.showWatchPayModal = true
    }

    // 接收子组件点击确认成交弹窗
    function getSureClick(code: boolean): void {
      modelForm.showDealSureModal = code
    }
    // 接收子组件点击交易未履行弹窗
    function getNotDealClick(code: boolean): void {
      modelForm.showDealReasonModal = code
    }
    // 接收子组件点击查看费用的确定按钮
    function getWatchPay(code: boolean):void {
      modelForm.showWatchPayModal = code
    }
    return {
      ruleForm,
      modelForm,
      rules,
      submitForm,
      enterDeal,
      leaveDeal,
      goToDetail,
      dealProject,
      getSureClick,
      getNotDealClick,
      watchPay,
      getWatchPay,
      ProjectStatusArr,
      ReleaseStatusArr
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
.btnStyle {
  display: block;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
</style>