import {useState} from "react";
import {Input} from "@nutui/nutui-react-taro";
import {redeemCoupon} from "../../../request/api/my";
import Taro from "@tarojs/taro";


const Index = () => {
    const [value, UpdateValue] = useState('')
    const redeem = () => {
        redeemCoupon({code: value}).then((res) => {
            Taro.showToast({
                title: res.data.msg
            })
        })
    }
    const clear=()=>{
        UpdateValue('')
    }
    return (
        <div>
            <div style={{marginTop: '30px', padding: '10px'}}>
                <Input name="text" defaultValue={value} placeholder="请输入兑换码"
                       onChange={(val) => {
                           UpdateValue(val)
                       }} style={{borderRadius: '10px'}}/>
            </div>
            <div style={{marginTop: '30px', width: '100%'}}>
                <div style={{
                    fontSize: '18px',
                    fontWeight: 460,
                    textAlign: "center",
                    background: "#d5ba7c",
                    color: 'white',
                    height: 40,
                    lineHeight: '40px',
                    borderRadius: '8px',
                    margin: '10px 10px'
                }}
                     onClick={() => {
                         redeem()
                     }}
                >
                    立即兑换
                </div>
            </div>
            <div style={{marginTop: '10px', width: '100%'}}>
                <div style={{
                    fontSize: '18px',
                    fontWeight: 460,
                    textAlign: "center",
                    background: "#fff",
                    color: '#000',
                    height: 40,
                    lineHeight: '40px',
                    borderRadius: '8px',
                    margin: '10px 10px',
                }}
                     onClick={() => {
                         clear()
                     }}
                >
                    清空
                </div>
            </div>
        </div>
    );
};

export default Index;