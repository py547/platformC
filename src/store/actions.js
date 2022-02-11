//进行请求发送，将http请求获取的数据再调用mutation更改
import { collectionsList } from '../api/opensea'

async function get_data(context,lineDataType){
    let data
    if(lineDataType=="number"){
        data =  await get_line_data_number(lineDataType)
    }else if(lineDataType=="project"){
        data = get_line_data_project(lineDataType)
    }else{
        data = get_line_data_user(lineDataType)
    }
    context.commit("SET_LINE_DATA", data)

}


async function get_line_data_number(context, params) {
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
    return data;
}
function get_line_data_project(){
    let data =[
        { time: '1991', value: 3 },
        { time: '1992', value: 4 },
        { time: '1993', value: 3.5 },
        { time: '1994', value: 5 },
        { time: '1995', value: 4.9 },
        { time: '1996', value: 6 },
        { time: '1997', value: 7 },
        { time: '1998', value: 9 },
        { time: '1999', value: 13 },
      ]
    return data
        
    
}

function get_line_data_user(){
    let data =[
        { time: '1991', value: 5 },
        { time: '1992', value: 4 },
        { time: '1993', value: 3.5 },
        { time: '1994', value: 5 },
        { time: '1995', value: 4.9 },
        { time: '1996', value: 6 },
        { time: '1997', value: 7 },
        { time: '1998', value: 9 },
        { time: '1999', value: 13 },
      ]
    return data
        
    
}
export  default {
    get_data
} 
