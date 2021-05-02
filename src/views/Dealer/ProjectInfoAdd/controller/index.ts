import { projectInfoAddformProp } from "@/types/types";
import { computed, reactive } from 'vue'
export const addRules = {
  NoticeTitle: [
    { required: true, message: "请输入公告标题", trigger: "blur" },
    { max: 150, message: "内容不能超过150个字", trigger: "blur" },
  ],
  NoticeContent: [
    { required: true, message: "请输入公告详情", trigger: "blur" },
    { max: 4000, message: "内容不能超过4000个字", trigger: "blur" },
  ],
  AssetType: [{ required: true, message: "请选择类目", trigger: "change" }],
  ProjectName: [
    { required: true, message: "请输入名称", trigger: "blur" },
    { max: 30, message: "内容不能超过30个字", trigger: "blur" },
  ],
  HouseAuctionInfo_TransferMode: [{ required: true, message: "请选择流转方式", trigger: "change" }],
  HouseAuctionInfo_PropertyType: [{ required: true, message: "请选择物业类型", trigger: "change" }],
  HouseAuctionInfo_Provice: [{ required: true, message: "请选择省", trigger: "change" }],
  HouseAuctionInfo_City: [{ required: true, message: "请选择市", trigger: "change" }],
  HouseAuctionInfo_RegionID: [{ required: true, message: "请选择区", trigger: "change" }],
  HouseAuctionInfo_AddressDetial: [{ required: true, message: "请输入详细地址", trigger: "blur" }],
  HouseAuctionInfo_Longitude: [{ required: true, message: "请输入经度", trigger: "change" }],
  HouseAuctionInfo_Latitude: [{ required: true, message: "请输入纬度", trigger: "blur" }],
};

// 表单数据源
export function ProjectInfoAddController() {
  let addForm: projectInfoAddformProp = reactive({
    dicList: [],
    NoticeTitle: "", // 公告标题
    NoticeContent: "", //公告详情
    AssetType: null, // 类目
    ProjectName: "", // 项目名称
    HouseAuctionInfo_TransferMode: null,
    HouseAuctionInfo_PropertyType: null,
    HouseAuctionInfo_HouseUse: null, // 房屋类型
    HouseAuctionInfo_Provice: "", // 省
    HouseAuctionInfo_City: "", // 市
    HouseAuctionInfo_RegionID: null, // 区域
    HouseAuctionInfo_AddressDetial: "", // 详细地址
    HouseAuctionInfo_Longitude: null, // 经度
    HouseAuctionInfo_Latitude: null, // 纬度
    HouseAuctionInfo_ResidentialCommunityName: "", // 小区名称
    HouseAuctionInfo_Orientation: null, // 朝向
    HouseAuctionInfo_BedRoom: null, // 室
    HouseAuctionInfo_LivingRoom: null, // 厅
    HouseAuctionInfo_BathRoom: null, // 卫
    HouseAuctionInfo_HousingType: null, // 房源类型
    HouseAuctionInfo_DecorateLevel: null, // 装修程度
    HouseAuctionInfo_AtFloor: null, // 所在楼层
    HouseAuctionInfo_TotalFloor: null, // 总楼层
    HouseAuctionInfo_IsTax: null, // 税费情况
    HouseAuctionInfo_BuildCompleteDate: "", // 建成时间
    HouseAuctionInfo_OwnerShipProperty: null, // 权属性质
    HouseAuctionInfo_CertificateRegistrationDate: "", // 房产证登记日期
    HouseAuctionInfo_CoveredArea: null, // 建筑面积
    HouseAuctionInfo_InsideArea: null, // 套内面积
    HouseAuctionInfo_HouseDescription: "" // 描述内容
  });

  // 类目数组
  const assetTypeArr = computed(() => {
    return addForm.dicList.filter((x) => x.SubTypeCode === 2060);
  });

  return {
    addForm,
    assetTypeArr,
  }
}