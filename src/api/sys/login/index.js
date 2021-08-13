import request from '@/plugin/axios'

// export function AccountLogin (data) {
//     return request({
//         url: '/login',
//         method: 'post',
//         data
//     })
// }
export function AccountLogin (data) {
  return request({
    url: 'api/v1/login',
    method: 'post',
    data
  })
}
