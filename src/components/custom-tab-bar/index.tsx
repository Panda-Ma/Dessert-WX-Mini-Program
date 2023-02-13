import {Tabbar, TabbarItem} from '@nutui/nutui-react-taro';
import {useState} from "react";
import Taro from "@tarojs/taro";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {setSelected} from "../../store/containers/tabBarSlice";


const Index = () => {
    const dispatch=useAppDispatch()
    let idx=useAppSelector((state)=>state.tabBar.selected)

    const [state] = useState([
        {
            text: '首页'
            , icon: 'home'
            , pagePath: '/pages/home/index'
        },
        {
            text: '点单'
            , icon: 'shop'
            , pagePath: '/pages/shop/index'
        },
        {
            text: '订单'
            , icon: 'order'
            , pagePath: '/pages/order/index'
        },
        {
            text: '我的'
            , icon: 'my'
            , pagePath: '/pages/my/index'
        }
    ]);
    const switchTab = (_child,idx) => {
        dispatch(setSelected(idx))
        Taro.switchTab({url:state[idx].pagePath})
    }
    return (
        <>
            <Tabbar bottom style={{paddingBottom: '30px'}} onSwitch={switchTab} visible={idx}>
                {
                    state.map((item) => {
                        return (
                            <TabbarItem tabTitle={item.text} icon={item.icon}></TabbarItem>
                        )
                    })
                }
            </Tabbar>
        </>
    )

}
export default Index