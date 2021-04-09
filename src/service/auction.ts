import request from '@/utils/request'
import { requestPackage } from '@/utils/utils'

// get
export function getList(params?: any) {
  return request({
    url: requestPackage('/Auction/GetListJson', params),
  });
}
