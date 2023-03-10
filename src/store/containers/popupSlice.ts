import {createSlice} from "@reduxjs/toolkit";

interface PopupState {
    isShow: boolean,//是否展示popup
    name: string,// 商品名
    img: string,// 图片链接
    price: number,// 价格
    intro: string
}

const initialState: PopupState = {
    isShow: false,
    name: '',
    img: '',
    price: -1,
    intro: ''
}
export const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        open: (state) => {
            state.isShow = true
        },
        close: (state) => {
            state.isShow = false
        },
        initInfo: (state, action) => {
            state.name = action.payload.name
            state.img = action.payload.img
            state.price = action.payload.price
            state.intro=action.payload.intro
        }
    }
})
export const {open, close, initInfo} = popupSlice.actions
export default popupSlice.reducer;