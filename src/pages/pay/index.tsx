import {useAppSelector} from "../../store/hooks";
import {useState} from "react";
import {Text} from "@tarojs/components";
import {Icon, Popup, TextArea} from "@nutui/nutui-react-taro";
import {submitOrder} from "../../request/api/order";

definePageConfig({
    navigationBarTitleText: '订单结算'
})

const Pay = () => {
    const goods = useAppSelector(state => state.cart.goods)
    const total = useAppSelector(state => state.cart.total)
    const num = useAppSelector(state => state.cart.num)
    const [isShow, setIsShow] = useState(false)
    const [remark, setRemark] = useState('')
    const pay = () => {
        submitOrder({
            sum: total,
            num,
            note:remark,
            goods
        }).then(res => {

        })
    }
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
                            goods.map(item => {
                                return (
                                    <div style={{display: "flex", marginBottom: '17px'}} key={item.id}>
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
                <div style={{
                    marginTop: '10px',
                    padding: '10px 10px',
                    background: '#fff',
                    borderRadius: '10px',
                    fontSize: '15px'
                }}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <h3 style={{fontWeight: 500,}}>备注</h3>
                        <div style={{color: '#ddd', display: 'flex', alignItems: 'center'}} onClick={() => {
                            setIsShow(true)
                        }}>
                            <Text style={{
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                maxWidth: '200px'
                            }}>{
                                remark == '' ? '留下备注信息' : remark
                            }</Text>
                            <Icon name="rect-right"></Icon></div>
                    </div>
                </div>
            </div>

            <div style={{background: "#fff", position: 'fixed', bottom: 0, width: '100%', height: '80px'}}>
                <div style={{
                    fontSize: '18px',
                    fontWeight: 460,
                    textAlign: "center",
                    background: "#d5ba7c",
                    color: 'white',
                    height: 40,
                    lineHeight: '40px',
                    borderRadius: '8px',
                    margin: '10px 20px 0 0',
                    width: '100px',
                    float: 'right'
                }}
                     onClick={() => {
                         pay()
                     }}
                >
                    抵扣
                </div>
            </div>

            <Popup round position={"bottom"} visible={isShow} style={{height: '45%'}} closeable onClose={() => {
                setIsShow(false)
            }}>
                <h3 style={{fontWeight: 'bold', textAlign: 'center', fontSize: '18px', marginTop: '18px'}}>备注</h3>
                <TextArea defaultValue={remark} maxlength="30" placeholder={'输入一些备注信息（口味、偏好）'}
                          style={{background: '#eee', borderRadius: '10px', padding: '20px'}}
                          onChange={(val) => {
                              setRemark(val)
                          }
                          }/>
                <div style={{
                    fontSize: '18px',
                    fontWeight: 460,
                    textAlign: "center",
                    background: "#d5ba7c",
                    color: 'white',
                    height: 40,
                    lineHeight: '40px',
                    borderRadius: '8px',
                    margin: '20px 25px'
                }}
                     onClick={() => {
                         setIsShow(false)
                     }}
                >
                    确定
                </div>
            </Popup>
        </>
    )
}
export default Pay