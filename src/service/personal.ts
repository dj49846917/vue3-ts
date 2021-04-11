import request from '@/utils/request'

// post
// 待交保列表
export function noPayEntryList(params?: any) {
  return request({
    url: "/Personal/GetProjectByNoPayEntryJson",
    method: "post",
    data: params
  });
}

// 我的参拍列表
export function projectByMyList(params?: any) {
  return request({
    url: "/Personal/GetProjectByMyEntryJson",
    method: "post",
    data: params
  });
}

// 已拍下列表
export function entryList(params?: any) {
  return request({
    url: "/Personal/GetProjectByOKEntryJson",
    method: "post",
    data: params
  });
}

// 保证金列表
export function projectByOKList(params?: any) {
  return request({
    url: "/Personal/GetEntryInfoListJson",
    method: "post",
    data: params
  });
}

// 银行卡列表
export function bankList(params?: any) {
  return request({
    url: "/Personal/GetBankCardList",
    method: "post",
    data: params
  });
}

