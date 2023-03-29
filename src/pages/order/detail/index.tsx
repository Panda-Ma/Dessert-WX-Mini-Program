import {useEffect, useState} from "react";
import Taro from "@tarojs/taro";

definePageConfig({
    navigationBarTitleText: '订单详情',
})
const Index = () => {
    const [orderId, setOrderId] = useState(0)
    useEffect(() => {
        // @ts-ignore
        setOrderId(Taro.getCurrentInstance().router.params.orderId)

    })
    return (
        <div>
            {orderId}
        </div>
    );
};

export default Index;