import {Image, Popup} from "@nutui/nutui-react-taro";
import {forwardRef, useImperativeHandle, useState} from "react";
import Taro from "@tarojs/taro";

type Props = {
    name: string,
    img: string,
    intro: string,
    price: number
}
const Detail = forwardRef<any, Props>((props, ref) => {
    const [showPopup, setShowPopup] = useState(false)
    const [windowWidth,_setWindowWidth]=useState(Taro.getWindowInfo().windowWidth)
    useImperativeHandle(ref, () => ({setShowPopup}))
    return (
        <>
            <Popup closeable round position={"bottom"} visible={showPopup} style={{height:'80%'}} onClose={() => {
                setShowPopup(false)
            }}>
                <div style={{height:'250px',display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <Image src={props.img} width={windowWidth+'px'} height={windowWidth+'px'}  fit={"contain"}></Image>
                </div>
            </Popup>
        </>
    )
})

export default Detail