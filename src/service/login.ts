import request from '@/utils/request'
import { requestPackage } from '@/utils/utils'

// post
export function loginService(params?: any) {
  return request({
    url: "/Login/DoLogin",
    method: "post",
    data: params
  });
}

// post
