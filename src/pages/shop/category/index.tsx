import {useState} from "react";
import {TabPane, Tabs} from "@nutui/nutui-react-taro";
import Goods from "../goods";
import Taro from "@tarojs/taro";

const Index = () => {
    const [windowHeight, _setWindowHeight] = useState(Taro.getWindowInfo().windowHeight)
    const [tabValue, serTabValue] = useState('0')
    const list = Array.from(new Array(10).keys()) //种类
    const goods = [{ //商品
        id: 0,
        name: '燕麦呼呼拿铁',
        img: 'https://bkimg.cdn.bcebos.com/pic/b3119313b07eca806538dba0e67580dda144ad342567?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2UxMTY=,g_7,xp_5,yp_5',
        intro: '浓醇牛奶加入飘香，浓醇的牛奶加入飘香的红茶，再搭配芬芳的玫瑰与软糯的麻薯。摘选平阴重瓣玫瑰，喝得到真实的玫瑰花瓣！满杯溢出馥郁的花香',
        price: 13
    }]
    for (let i = 0; i < 7; i++) {
        goods.push({
            id: i + 1,
            name: '燕麦呼呼拿铁',
            img: 'https://bkimg.cdn.bcebos.com/pic/b3119313b07eca806538dba0e67580dda144ad342567?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2UxMTY=,g_7,xp_5,yp_5',
            intro: 'i',
            price: i
        },)
    }
    return (
        <>
            <Tabs value={tabValue} titleScroll direction={'vertical'}
                  onChange={({paneKey}) => serTabValue(paneKey)}
                  style={{height: windowHeight + 'px'}}>
                {list.map(item => {
                    return (
                        <TabPane key={item} title={`Tab ${item}`}>
                            页面{item}
                            {goods.map(item => {
                                return (
                                    <Goods name={item.name} img={item.img} intro={item.intro}
                                           price={item.price} id={item.id}></Goods>
                                )
                            })}
                        </TabPane>
                    )
                })}
            </Tabs>
        </>
    );
};

export default Index;