//当前平台数据获取请求

import http from './public'

const baseUrl = "https://api.opensea.io/api/v1/"

export const collectionsList = (params) => {
    return http.fetchGet(baseUrl + '/collections', params)
}