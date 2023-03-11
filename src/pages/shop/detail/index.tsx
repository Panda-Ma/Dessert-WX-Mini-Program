import {Icon, Image, InputNumber, Popup} from "@nutui/nutui-react-taro";
import {useEffect, useState} from "react";
import Taro from "@tarojs/taro";
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {close} from "../../../store/containers/popupSlice";
import {addGoods} from "../../../store/containers/cartSlice";


const Detail = () => {
    const dispatch = useAppDispatch()
    const id = useAppSelector(state => state.popup.id)
    const isShow = useAppSelector((state) => state.popup.isShow)
    const name = useAppSelector(state => state.popup.name)
    const img = useAppSelector(state => state.popup.img)
    const price = useAppSelector(state => state.popup.price)
    const intro = useAppSelector(state => state.popup.intro)
    const [windowWidth, _setWindowWidth] = useState(Taro.getWindowInfo().windowWidth)
    const [num, setNum] = useState(0)
    useEffect(() => {
        if (isShow)
            Taro.hideTabBar()
        else
            Taro.showTabBar()
    }, [isShow])

    const addToCart = () => {
        dispatch(addGoods({
            id,
            num
        }))
        dispatch(close())
        setNum(0)
    }
    return (
        <>
            <Popup round position={"bottom"} visible={isShow} style={{height: '80%'}} onClose={() => {
                dispatch(close())
            }}>
                <CloseIcon></CloseIcon>
                <div>
                    <Image src={img} width={windowWidth + 'px'} height={windowWidth + 'px'}
                           fit={"contain"}></Image>
                </div>
                <div style={{padding: '5px 15px'}}>
                    <h3 style={{
                        fontSize: '18px',
                        fontWeight: 'bolder',
                        marginTop: '5px',
                        marginBottom: '5px'
                    }}>{name}</h3>
                    <div style={{fontSize: '13px', color: '#ccc'}}>
                        {intro}
                    </div>
                    <div style={{display: "flex", justifyContent: 'space-between', margin: '10px 5px'}}>
                        <div style={{fontSize: '18px'}}>¥{price.toFixed(1)}</div>
                        <div>
                            <InputNumber modelValue={num} buttonSize="30" inputWidth="50" onChangeFuc={(value) => {
                                setNum(value as number)
                            }}/>
                        </div>
                    </div>
                    <div style={{
                        fontSize: '18px',
                        fontWeight: 460,
                        textAlign: "center",
                        background: "#d5ba7c",
                        color: 'white',
                        height: 40,
                        lineHeight: '40px',
                        borderRadius: '8px',
                        margin: '20px 10px'
                    }}
                         onClick={() => {
                             addToCart()
                         }}
                    >
                        加入购物袋
                    </div>
                </div>


            </Popup>
        </>
    )
}
const CloseIcon = () => {
    const dispatch = useAppDispatch()
    const windowHeight = Taro.getWindowInfo().windowHeight
    return (
        <>
            <div style={{
                background: '#d4d4d4',
                borderRadius: '50%',
                color: '#fff',
                height: '23px',
                lineHeight: '23px',
                position: 'fixed',
                right: '10px',
                textAlign: 'center',
                top: (windowHeight * 0.2 + 20),
                width: "23px",
                zIndex: 1,
            }} onClick={() => {
                dispatch(close())
            }}>
                <Icon name={'close-little'} size={10}></Icon>
            </div>

        </>
    )
}
export default Detail