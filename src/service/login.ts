import request from '@/utils/request'

// post
export function loginService(params?: any) {
  return request({
    url: "/Login/DoLogin",
    method: "post",
    data: params
  });
}
