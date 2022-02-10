//进行请求发送，将http请求获取的数据再调用mutation更改
import { collectionsList } from '../api/opensea'
export default {
    async get_data_test(context, params) {
        const mydata = await collectionsList(params)
        console.log(mydata);
        //过去一个月的[(key，0),()]
        let lastMonth = [];
        //所有的key[key,key]
        let lastmonthkey = []
        let beforeNumber = 0;
        let index = 0;
        let data = []
        for (let i = 0; i < 30; i++) {
            let time = new Date(new Date()
                .setDate(new Date().getDate() - i))
                .toLocaleDateString().replaceAll("/", "-");
            lastMonth.unshift({ [time]: 0 })
            lastmonthkey.unshift(time)
        }

        //数据源的数据放入桶内
        for (let onedata of mydata.collections) {
            //onedata是单个创建时间
            //datatime是处理过的时间
            let datatime = onedata.created_date.split("T")[0].replaceAll("-0", "-");
            //datatime是否在指定时间内
            if (lastmonthkey.indexOf(datatime)) {
                //如果在，则给指定数量+1
                //keyvalue是{data:value}

                for (var keyvalue of lastMonth) {
                    if (Object.keys(keyvalue) == datatime) {
                        lastMonth[index][datatime]++;
                        break;
                    }
                    index++;
                }
                index = 0;
            } else {
                //如果不在，给前置数量加+1
                beforeNumber++;
            }
        }
        //获取最终数据格式
        for (let i = 0; i < lastMonth.length; i++) {
            let finnalData = lastMonth[i][lastmonthkey[i]]
            let lastData = beforeNumber;
            if (i > 0) {
                lastData = lastMonth[i - 1][lastmonthkey[i - 1]]
            }
            lastMonth[i][lastmonthkey[i]] = finnalData + lastData
            data.push({ time: lastmonthkey[i], value: lastMonth[i][lastmonthkey[i]] })
        }
        context.commit("SET_LINE_DATA", data)

    }
}