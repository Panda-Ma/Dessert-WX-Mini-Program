import Taro from "@tarojs/taro";
import config from "./config";

type Result={
    code:number,
    data:any
}

function request(url,method='GET', data = {} ):Promise<Result> {
    return new Promise(resolve => {
        Taro.cloud.callContainer({
            path: url,
            header: {
                "X-WX-SERVICE": config.X_WX_SERVICE,
                "content-type": "application/json"
            },
            // @ts-ignore
            method: method,
            data: data,
            success: function (res) {
                // @ts-ignore
                resolve(res.data)
            }
        })
    })
}
// 调用示例
// request('/order').then(res=>{
//     Taro.showToast({
//         title: '成功'+res,
//         icon: 'success',
//         duration: 2000
//     })
// })

export default request
