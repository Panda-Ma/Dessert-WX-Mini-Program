import {Avatar, InputNumber, Popup} from "@nutui/nutui-react-taro";
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {closePanel} from "../../../store/containers/cartSlice";

const CartPanel = () => {
    const cart = useAppSelector(state => state.cart.goods)
    const isShow = useAppSelector(state => state.cart.isPanelShow)
    const dispatch=useAppDispatch()
    return (
        <Popup round position={"bottom"} visible={isShow} style={{height: '70%'}} onClose={() => {
            dispatch(closePanel())
        }}  overlayStyle={{background: '#000', opacity: 0.3}} zIndex={50}>
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
                <div style={{display:"flex",padding:'30px 20px'}}>
                    {
                        cart.map(item => {
                            return (
                                <>
                                    <div>
                                        <div style={{height: '50px', borderRadius: '10px', overflow: 'hidden'}}>
                                            <Avatar url={item.img} shape={'square'}
                                                    style={{
                                                        height: '90px',
                                                        width: '90px',
                                                        borderRadius: '10px'
                                                    }}></Avatar>
                                        </div>
                                        <div>
                                            <h3>{item.name}</h3>
                                            <div style={{display: "flex", justifyContent: 'space-between'}}>
                                                <div style={{fontSize: '18px'}}>¥{item.price.toFixed(1)}</div>
                                                <div>
                                                    <InputNumber modelValue={1} buttonSize="30" inputWidth="50"
                                                                 onChangeFuc={(_value) => {
                                                                     // setNum(Number(value))
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