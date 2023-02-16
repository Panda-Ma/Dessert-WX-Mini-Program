import {useState} from "react";
import {TabPane, Tabs} from "@nutui/nutui-react-taro";

const Index = () => {
    const [tabValue, serTabValue] = useState('0')
    const list = Array.from(new Array(10).keys())

    return (
        <>
            <Tabs value={tabValue} titleScroll direction={'vertical'}
                  onChange={({paneKey}) => serTabValue(paneKey)}
                  style={{height: '300px'}}>
                {list.map(item => {
                    return (
                        <TabPane key={item} title={`Tab ${item}`}>
                            页面{item}
                        </TabPane>
                    )
                })}
            </Tabs>
        </>
    );
};

export default Index;