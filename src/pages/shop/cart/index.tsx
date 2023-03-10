import {Badge, Icon} from "@nutui/nutui-react-taro";
import Taro from "@tarojs/taro";
import bag from '../../../assets/bag.png'

const Cart = () => {
    const width = Taro.getWindowInfo().windowWidth
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
                overflow: "hidden"
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
                            <div style={{lineHeight: '70px',position:'relative'}}>
                                <Icon name={bag} size={35}></Icon>
                                <div style={{position:'absolute',top:'2px',right:'-6px',borderRadius:'50%',width:'13px',height:'13px',background:'#fff',color:'#000',fontSize:'10px',lineHeight:'13px',fontWeight:'bold',textAlign:'center'}}>1</div>
                            </div>
                            <div style={{fontSize: '20px', marginLeft: '20px'}}>¥18.5</div>
                        </div>
                    </div>
                    <div style={{background: "#d5ba7c", flex: 1, textAlign: "center"}}>
                        去结算
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cart