import {Icon} from "@nutui/nutui-react-taro";
import Taro from "@tarojs/taro";
import bag from '../../../assets/bag.png'
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {closeBar, togglePanle} from "../../../store/containers/cartSlice";
import {useEffect} from "react";

const Cart = () => {
    const width = Taro.getWindowInfo().windowWidth
    const total = useAppSelector(state => state.cart.total)
    const num = useAppSelector(state => state.cart.num)
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (num == 0) dispatch(closeBar())
    }, [num])

    return (
        <>
            <div style={{
                position: "absolute",
                bottom: '10px',
                width: (width - 20) + 'px',
                height: '50px',
                background: `#fff`,
                left: 0,
                right: 0,
                margin: "auto",
                borderRadius: '15px',
                overflow: "hidden",
                zIndex: 2100
            }}>
                <div style={{
                    display: "flex",
                    color: "#eee",
                    fontSize: '18px',
                    fontWeight: "460",
                    height: '100%',
                    lineHeight: '50px'
                }}>
                    <div style={{background: `#221f20`, flex: 3, paddingLeft: "20px"}}>
                        <div style={{display: "flex",}}>
                            <div style={{lineHeight: '70px', position: 'relative'}} onClick={() => {
                                dispatch(togglePanle())
                            }}>
                                <Icon name={bag} size={35}></Icon>
                                <div style={{
                                    position: 'absolute',
                                    top: '2px',
                                    right: '-6px',
                                    borderRadius: '50%',
                                    width: '13px',
                                    height: '13px',
                                    background: '#fff',
                                    color: '#000',
                                    fontSize: '10px',
                                    lineHeight: '13px',
                                    fontWeight: 'bold',
                                    textAlign: 'center'
                                }}>{num}
                                </div>
                            </div>
                            <div style={{fontSize: '20px', marginLeft: '20px'}}>¥{total}</div>
                        </div>
                    </div>
                    <div style={{background: "#d5ba7c", flex: 1, textAlign: "center"}} onClick={()=>{
                        Taro.navigateTo({url:'/pages/shop/pay/index'})
                    }
                    }>
                        去结算
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cart