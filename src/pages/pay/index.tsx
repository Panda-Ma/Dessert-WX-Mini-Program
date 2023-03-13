import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {useEffect} from "react";
import {addGoods} from "../../store/containers/cartSlice";
import {Text} from "@tarojs/components";
import {Icon} from "@nutui/nutui-react-taro";

definePageConfig({
    navigationBarTitleText: '订单结算'
})

const Pay = () => {
    const cart = useAppSelector(state => state.cart.goods)
    const total = useAppSelector(state => state.cart.total)
    const num = useAppSelector(state => state.cart.num)
    const dispathch = useAppDispatch()
    useEffect(() => {
        for (let i = 0; i < 3; i++) {
            dispathch(addGoods({
                id: i,
                name: '燕麦呼呼拿铁',
                img: 'https://bkimg.cdn.bcebos.com/pic/b3119313b07eca806538dba0e67580dda144ad342567?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2UxMTY=,g_7,xp_5,yp_5',
                price: 13,
                num: 1
            }))
        }

    }, [])
    return (
        <>
            <div style={{margin: '20px 10px',}}>
                <div style={{padding: '10px 10px', background: '#fff', borderRadius: '10px'}}>
                    <h3 style={{fontWeight: 500, fontSize: '15px', paddingBottom: '10px'}}>订单详情</h3>
                    <div style={{
                        paddingTop: '20px',
                        borderWidth: '1px 0 1px 0',
                        borderStyle: 'solid',
                        borderColor: '#eee'
                    }}>
                        {
                            cart.map(item => {
                                return (
                                    <>
                                        <div style={{display: "flex", marginBottom: '17px'}}>
                                            <div style={{borderRadius: '10px',}}>
                                                <img src={item.img}
                                                     style={{
                                                         height: '75px',
                                                         width: '75px',
                                                         borderRadius: '6px'
                                                     }}></img>
                                            </div>
                                            <div style={{flex: 1}}>
                                                <div style={{
                                                    paddingLeft: '10px',
                                                    display: "flex",
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center'
                                                }}>
                                                    <h3 style={{
                                                        fontSize: '15px',
                                                        fontWeight: 'normal'
                                                    }}>{item.name}</h3>
                                                    <div style={{
                                                        fontSize: '14px',
                                                        fontWeight: 'bold'
                                                    }}>¥{item.price.toFixed(1)}</div>
                                                </div>
                                                <div style={{
                                                    fontSize: '13px',
                                                    textAlign: 'right',
                                                    color: '#ccc',
                                                    marginTop: '5px'
                                                }}>x{item.num}</div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div style={{textAlign: 'right', marginTop: '10px', fontSize: '15px'}}>共{num}件商品，小计：
                        <Text style={{
                            fontSize: '17px',
                            fontWeight: 'bold'
                        }}>¥{total.toFixed(1)}</Text></div>
                </div>
                <div style={{marginTop: '10px', padding: '10px 10px', background: '#fff', borderRadius: '10px',fontSize: '15px'}}>
                   <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                       <h3 style={{fontWeight: 500, }}>备注</h3>
                       <div style={{color:'#ddd',display:'flex',alignItems:'center'}}>留下备注信息<Icon name="rect-right"></Icon></div>
                   </div>
                </div>
            </div>
        </>
    )
}
export default Pay