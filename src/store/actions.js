//进行请求发送，将http请求获取的数据再调用mutation更改
import { collectionsList } from '../api/opensea'
export default {
    async get_data_test(context, params) {
        const data = await collectionsList(params)
        console.log(data);
    }
} 