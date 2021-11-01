import { request } from './request'

// 填写单号 维修单提交
export function repairSubmit (data) {
  return request({
    url: '/api/repair/submit',
    method: 'post',
    data
  })
}



export function repairSearchlist (data) {
  return request({
    url: '/api/repair/searchlist',
    method: 'get',
    data
  })
}

export function maintainSubmit (data) {
  return request({
    url: '/api/maintainPlan/submit',
    method: 'post',
    data
  })
}





