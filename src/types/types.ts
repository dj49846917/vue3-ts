// 用户信息
export interface UserInfo {
  DealerInfo: null | {
    [propName: string]: any
  },
  LoginUserInfo: {
    [propName: string]: any
  }
}

// 数据字典
export interface DicType {
  DicCode: number,
  DicName: string,
  SubTypeCode: number | null,
  SubTypeName: number | null,
  [propName: string]: any
}

// 数据字典入参
export interface DicParams {
  SubTypeCode?: string
}

// 新增标的物
export interface projectInfoAddformProp {
  dicList: DicType[]
  NoticeTitle: string // 公告标题
  NoticeContent: string //公告详情
  AssetType: number | null // 类目
  ProjectName: string // 项目名称
  /*---------------- 房产 ----------*/
  HouseAuctionInfo_TransferMode: number | null // 流转方式
  HouseAuctionInfo_PropertyType: number | null // 物业类型
  HouseAuctionInfo_HouseUse: number | null // 房屋类型
  HouseAuctionInfo_Provice: string // 省
  HouseAuctionInfo_City: string // 市
  HouseAuctionInfo_RegionID: number | null // 区域
  HouseAuctionInfo_AddressDetial: string // 详细地址
  HouseAuctionInfo_Longitude: number| null // 经度
  HouseAuctionInfo_Latitude: number| null // 纬度
  HouseAuctionInfo_ResidentialCommunityName: string // 小区名称
  HouseAuctionInfo_Orientation: number | null // 朝向
  HouseAuctionInfo_BedRoom: number | null // 室
  HouseAuctionInfo_LivingRoom: number | null // 厅
  HouseAuctionInfo_BathRoom: number | null // 卫
  HouseAuctionInfo_HousingType: number | null // 房源类型
  HouseAuctionInfo_DecorateLevel: number | null // 装修程度
  HouseAuctionInfo_AtFloor?: number| null // 所在楼层
  HouseAuctionInfo_TotalFloor: number| null // 总楼层
  HouseAuctionInfo_IsTax?: number| null // 税费情况
  HouseAuctionInfo_BuildCompleteDate?: string // 建成时间
  HouseAuctionInfo_OwnerShipProperty?: number| null // 权属性质
  HouseAuctionInfo_CertificateRegistrationDate?: string // 房产证登记日期
  HouseAuctionInfo_CoveredArea: number| null // 建筑面积
  HouseAuctionInfo_InsideArea?: number| null // 套内面积
  HouseAuctionInfo_HouseDescription: string // 描述内容
   /*---------------- 房产 ----------*/
}
