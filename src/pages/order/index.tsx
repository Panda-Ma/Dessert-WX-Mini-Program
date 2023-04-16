import {Text} from "@tarojs/components";
import Taro, {useDidShow} from "@tarojs/taro";
import {getOrder} from "../../request/api/order";
import {useState} from "react";
import {Icon} from "@nutui/nutui-react-taro";

definePageConfig({
    navigationBarTitleText: '全部订单',
})

const Index = () => {
    const [order, setOrder] = useState<any>([])
    useDidShow(() => {
        getOrder().then(res => {
            if (res.code == 200) {
                setOrder(res.data.order)
            }
        })
    })
    const orderDetail = (id) => {
        Taro.navigateTo({
            url: `/pages/order/detail/index?orderId=${id}`
        })
    }
    if (order.length == 0) return (
        <>

            <div style={{textAlign: 'center', color: '#ccc', fontSize: '16px', marginTop: '30%'}}>
                <div><Icon name="order" size={30}></Icon></div>
                未有订单
            </div>
        </>
    )
    else return (
        <>
            <div style={{padding: '10px', paddingTop: '20px'}}>
                {
                    order.map(item => {
                        return (
                            <div onClick={() => {
                                orderDetail(item.id)
                            }} style={{
                                background: '#fff',
                                borderRadius: '10px',
                                padding: '10px',
                                marginTop: '30px',
                                // backgroundImage: "linear-gradient(to bottom left,#d5ba7c 5%,10% , white 30%)",
                                boxShadow:'10px 5px 5px rgba(0, 0, 0, 0.2)'
                            }}>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <Text
                                        style={{color: '#ccc'}}>{item.time.replace(/-/, '年').replace(/-/, '月').replace(/T/, '日 ').split('.')[0]}</Text>
                                    <Text>{item.state}</Text>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '20px'}}>
                                    <div style={{color: '#ccc'}}>备注：{item.note==''?'未留下信息':item.note}</div>
                                    <div>
                                        <div style={{fontSize: '16px', fontWeight: 'bold'}}>¥{item.sum}</div>
                                        <div style={{color: '#ccc'}}>共{item.num}件</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default Index;