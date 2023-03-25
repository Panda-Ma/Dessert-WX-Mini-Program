import {useState} from "react";
import {getUser} from "../../request/api/my";
import Taro from "@tarojs/taro";
import {useDidShow} from '@tarojs/taro'

definePageConfig({
    navigationBarTitleText: '我的',
})

const Index = () => {
    const [openid, setOpenid] = useState('0')
    const [balance, setBalance] = useState('0')
    useDidShow(() => { //返回界面触发请求（兑换优惠卷会使账户余额改变）
        getUser().then(res => {
            setOpenid(res.data.openid)
            setBalance((res.data.balance))
        })
    })

    return (
        <div>
            <div>
                <div style={{padding: '10px'}}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        background: 'white',
                        alignItems: 'center',
                        borderRadius: '10px',
                        padding: '15px 10px 15px 10px'
                    }}>
                        <div style={{color: '#ccc'}}>用户</div>
                        <div style={{
                            width: '200px',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                            textAlign: 'right'
                        }}>{openid}</div>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        background: 'white',
                        alignItems: 'center',
                        borderRadius: '10px',
                        padding: '15px 10px 15px 10px',
                        marginTop: '10px'
                    }}>
                        <div style={{color: '#ccc'}}>余额</div>
                        <div style={{
                            width: '200px',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                            textAlign: 'right'
                        }}>{balance}</div>
                    </div>
                </div>
                <div>
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
                             Taro.navigateTo({url: '/pages/my/coupon/index'})
                         }}
                    >
                        兑换优惠卷
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;