import request from '@/utils/request'

// 用户登录
export function userLogin(data) {
  return request({
    url: '/v1/user/login',
    method: 'post',
    data
  })
}

// 注册
export function userRegister(data) {
  return request({
    url: '/v1/user/register',
    method: 'post',
    data
  })
}

