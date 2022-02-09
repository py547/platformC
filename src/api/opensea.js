//opensea平台请求
import http from './public'

const baseUrl = "https://api.opensea.io/api/v1"

//collections获取
export const collectionsList = (params) => {
    return http.fetchGet(baseUrl + '/collections', params)
}

//......