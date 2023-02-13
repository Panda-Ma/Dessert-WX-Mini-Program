import {Tabbar, TabbarItem} from '@nutui/nutui-react-taro';
import { useState} from "react";
import Taro from "@tarojs/taro";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {setSelected} from "../store/containers/tabBarSlice";
import home from '../assets/home.png'
import shop from '../assets/shop.png'
import order from '../assets/order.png'
const Index = () => {
    // 虽然此tabBar组件使用了react redux状态管理，但是nutui tabbar的visibke属性不能实时更新，只能将激活颜色设与未激活一样
    const dispatch = useAppDispatch()
    const [idx, _setIdx] = useState(useAppSelector((state) => state.tabBar.selected))
    const [state] = useState([
        {
            text: '首页'
            , icon: home
            , pagePath: '/pages/home/index'
        },
        {
            text: '点单'
            , icon: shop
            , pagePath: '/pages/shop/index'
        },
        {
            text: '订单'
            , icon: order
            , pagePath: '/pages/order/index'
        },
        {
            text: '我的'
            , icon: 'my'
            , pagePath: '/pages/my/index'
        }
    ]);
    const switchTab = (_child, idx) => {
        dispatch(setSelected(idx))
        Taro.switchTab({url: state[idx].pagePath})
    }

    return (
        <>
            <Tabbar bottom style={{paddingBottom: '30px'}} onSwitch={switchTab} visible={idx} activeColor={'#000'}>
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
Index.options = {
    addGlobalClass: true
}
export default Index