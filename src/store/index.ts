import {configureStore} from "@reduxjs/toolkit";
import tabBarReducer from "./containers/tabBarSlice";
import popupReducer from "./containers/popupSlice";
import cartReducer from './containers/cartSlice'

const store = configureStore({
    reducer: {
        tabBar: tabBarReducer,
        popup: popupReducer,
        cart: cartReducer
    },
})

// 从 store 本身推断 `RootState` 和 `AppDispatch` 类型.
// ReturnType:用来获取函数类型的返回值
export type RootState = ReturnType<typeof store.getState>;
// 推断类型：{posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;