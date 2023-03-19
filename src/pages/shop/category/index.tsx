import {useEffect, useState} from "react";
import {TabPane, Tabs} from "@nutui/nutui-react-taro";
import Goods from "../goods";
import Taro from "@tarojs/taro";
import {getInfo} from "../../../request/api/order";

interface List {
    id: number,
    name: string
}



const Index =  () => {
    const [windowHeight, _setWindowHeight] = useState(Taro.getWindowInfo().windowHeight)
    const [tabValue, serTabValue] = useState("0")

    const [list, setList] = useState<List[]>([])
    const [goods, setGoods] = useState<any>([])

    useEffect(() => {
        getInfo().then(res => {
            console.log(res.data.goods);
            setList(res.data.list)
            setGoods(res.data.goods)
        })
    }, [])
    return (
        <>
            <Tabs value={tabValue} titleScroll direction={'vertical'}
                  onChange={({paneKey}) => serTabValue(paneKey)}
                  style={{height: windowHeight + 'px'}}>
                {list.map((item, idx) => {
                    return (
                        <TabPane key={item.id} title={`${item.name}`} >
                            {goods[idx].map(item => {
                                return (
                                    <Goods name={item.name} img={item.img} intro={item.intro}
                                           price={Number(item.price)} id={item.id} key={item.id}></Goods>
                                )
                            })}
                            <div style={{height: '200px'}}></div>
                        </TabPane>
                    )
                })}
            </Tabs>
        </>
    );
};

export default Index;