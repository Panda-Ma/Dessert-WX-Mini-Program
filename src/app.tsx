import './app.scss'
import {Provider} from "react-redux";
import store from "./store";
import Taro from "@tarojs/taro";
import {useLaunch} from "@tarojs/taro";
import config from "./request/config";


const App = ({children}) => {
    useLaunch(()=>{
        // 在调用云开发各 API 前，需先调用初始化方法 init 一次（全局只需一次，多次调用时只有第一次生效）
        Taro.cloud.init({
            env:config.env
        })
    })
    return (
        // children 是将要会渲染的页面
        <>
            <Provider store={store}>
                {children}
            </Provider>
        </>
    )
}
export default App
