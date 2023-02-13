import {
    Button,
} from "@nutui/nutui-react-taro";
import './index.scss'
import Taro from "@tarojs/taro";


const Index = () => {
    const jump = () => {
        Taro.navigateTo({url: "/pages/order/index"})
    }
    return (
        <div className="nutui-react-demo">
            <div className="index">
                欢迎使用 NutUI React 开发 Taro 多端项目。
            </div>
            <div className="index">
                <Button type="primary" className="btn" onClick={() =>
                    jump()
                }>
                    NutUI React Button
                </Button>
            </div>
        </div>
    );
}

export default Index
