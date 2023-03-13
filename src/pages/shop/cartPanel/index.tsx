import {Avatar, InputNumber, Popup} from "@nutui/nutui-react-taro";
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {changeNum, closePanel} from "../../../store/containers/cartSlice";
import {useEffect} from "react";

const CartPanel = () => {
    const cart = useAppSelector(state => state.cart.goods)
    const isShow = useAppSelector(state => state.cart.isPanelShow)
    const num = useAppSelector(state => state.cart.num)

    const dispatch = useAppDispatch()
    useEffect(()=>{
        if(num==0)dispatch(closePanel())
    },[num])
    return (
        <Popup round position={"bottom"} visible={isShow} style={{height: '70%'}} onClose={() => {
            dispatch(closePanel())
        }} overlayStyle={{background: '#000', opacity: 0.3}} zIndex={50}>
            <div>
                <div style={{
                    background: '#eee',
                    fontSize: '12px',
                    height: '30px',
                    lineHeight: '30px',
                    paddingLeft: '20px',
                    color: '#000',
                    fontWeight: 'normal'
                }}>
                    已选商品
                </div>
                <div style={{padding: '30px 20px',marginBottom:'100px'}}>
                    {
                        cart.map(item => {
                            return (
                                <>
                                    <div style={{display: "flex",marginBottom:'30px'}}>
                                        <div style={{borderRadius: '10px',}}>
                                            <Avatar url={item.img} shape={'square'}
                                                    style={{
                                                        height: '75px',
                                                        width: '75px',
                                                        borderRadius: '10px'
                                                    }}></Avatar>
                                        </div>
                                        <div style={{
                                            paddingLeft: '10px',
                                            flex: 1,
                                            display: "flex",
                                            flexDirection: 'column',
                                            justifyContent: 'space-between'
                                        }}>
                                            <h3 style={{fontSize: '18px',fontWeight:'bolder'}}>{item.name}</h3>
                                            <div style={{display: "flex", justifyContent: 'space-between',}}>
                                                <div style={{fontSize: '16px',fontWeight:'bold'}}>¥{item.price.toFixed(1)}</div>
                                                <div>
                                                    <InputNumber modelValue={item.num} min={0} buttonSize="30" inputWidth="50"
                                                                 onChangeFuc={(value) => {
                                                                     dispatch(changeNum({
                                                                         id: item.id,
                                                                         num: Number(value)
                                                                     }))
                                                                 }}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </Popup>
    )
}
export default CartPanel