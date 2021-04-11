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