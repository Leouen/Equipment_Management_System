import { request } from './request'

// 填写单号 维修单提交
export function repairSubmit (data) {
  return request({
    url: '/api/repair/submit',
    method: 'post',
    data
  })
}






