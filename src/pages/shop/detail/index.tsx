import {Button, Image, Popup, Price} from "@nutui/nutui-react-taro";
import {useState} from "react";
import Taro from "@tarojs/taro";
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {close} from "../../../store/containers/popupSlice";


const Detail = () => {
    const dispatch = useAppDispatch()
    const isShow = useAppSelector((state) => state.popup.isShow)
    const name = useAppSelector(state => state.popup.name)
    const img = useAppSelector(state => state.popup.img)
    const price = useAppSelector(state => state.popup.price)
    const intro = useAppSelector(state => state.popup.intro)
    const [windowWidth, _setWindowWidth] = useState(Taro.getWindowInfo().windowWidth)
    return (
        <>
            <Popup closeable round position={"bottom"} visible={isShow} style={{height: '80%'}} onClose={() => {
                dispatch(close())
            }}>
                <div>
                    <Image src={img} width={windowWidth + 'px'} height={windowWidth + 'px'}
                           fit={"contain"}></Image>
                </div>
                <div style={{padding: '5px'}}>
                    <h3 style={{ fontSize:'18px',fontWeight: 'bolder', marginTop: '5px', marginBottom: '5px'}}>{name}</h3>
                    <div style={{fontSize: '13px', color: '#ccc'}}>
                        {intro}
                    </div>
                    <div style={{display: "flex", justifyContent: 'flex-end', marginRight: '5px'}}>
                        <Price price={price} size={'normal'} needSymbol decimalDigits={1}
                               style={{}}></Price>
                    </div>
                </div>
                <div style={{height: '900px'}}></div>
                <Button color={'green'} size={'small'}>选择</Button>

            </Popup>
        </>
    )
}

export default Detail