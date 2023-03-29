import {Icon} from "@nutui/nutui-react-taro";
import {useEffect} from "react";
import Taro from "@tarojs/taro";

definePageConfig({
    navigationBarTitleText: '支付成功'
})
const Index = () => {
    useEffect(() => {
        Taro.showToast({
            title: '订单提交成功',
            duration:500
        })
    })
    return (
        <div>
            <div style={{
                position: "fixed",
                top: '40%',
                left: '50%',
                textAlign: 'center',
                width: '200px',
                height: '50px',
                transform: 'translate(-50%, -50%)'
            }}>
                <div><Icon name="success" size={40} color={'green'}></Icon></div>
                <h3 style={{fontWeight: 'bold'}}>支付成功</h3>
            </div>
        </div>
    );
};

export default Index;