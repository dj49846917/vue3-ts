import { isTelPhone } from '@/utils/validate'
// 手机号码
export function myCheckPhone(rule:any, value: string, callback: Function) {
  if (value === '') {
    return callback(new Error('请输入手机号'));
  }
  if (!isTelPhone(value)) {
    return callback(new Error("手机号码格式错误"))
  }
  return callback()
}