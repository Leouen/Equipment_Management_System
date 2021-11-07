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
export function maintainPlanSearchList (data) {
  return request({
    url: '/api/maintainPlan/searchList',
    method: 'get',
    data
  })
}

// 保养单提交
export function maintainSubmit (data) {
  return request({
    url: '/api/maintainPlan/submit',
    method: 'post',
    data
  })
}

// 保养单删除
export function maintainDelete (data) {
  return request({
    url: '/api/maintainPlan/del/%7BmaintainPlanId%7D?maintainPlanId='+data,
    method: 'delete',
    data
  })
}

// 保养单删除
export function repairDelete (data) {
  return request({
    url: '/api/repair/del/%7BrepairNo%7D?repairNo='+data,
    method: 'delete',
    data
  })
}

// 修改维修状态 /api/repair/updateStatus
export function repairUpdateStatus (data) {
  return request({
    url: '/api/repair/updateStatus',
    method: 'PUT',
    data
  })
}


