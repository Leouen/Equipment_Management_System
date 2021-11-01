import { request } from './request'

// 用户注册
export function userRegister (data) {
  return request({
    url: '/api/staff/register',
    method: 'post',
    data
  })
}

// 用户登陆
export function userLogin (data) {
  return request({
    url: '/api/staff/login',
    method: 'post',
    data
  })
}

// 删除用户
export function getUserPlayList (uid) {
  return request({
    url: '/user/playlist',
    params: {
      uid
    }
  })
}


// 查询所有用户
export function getBinding (uid) {
  return request({
    url: '/user/binding',
    params: {
      uid
    }
  })
}


