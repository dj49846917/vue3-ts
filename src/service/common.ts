import { DicParams } from '@/types/types';
import request from '@/utils/request'
import { requestPackage } from '@/utils/utils'

// get
export function getDicList(params: DicParams) {
  return request({
    url: requestPackage('/Home/GetCommonDicList', params),
  });
}
