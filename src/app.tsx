import './app.scss'
import {Provider} from "react-redux";
import store from "./store";


const App = ({children}) => {
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
