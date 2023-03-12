import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface cartState {
    // 购物车中的物品
    goods: Array<goodsState>,
    total: number,//总价
    num: number,//总数
    isBarShow:boolean,
    isPanelShow:boolean
}

interface goodsState {
    id: number, //id
    name: string,//商品名
    img: string,//图片
    num: number, //选择的商品数量
    price: number //单价
}

const initialState: cartState = {
    goods: [],
    total: 0,
    num: 0,
    isBarShow:false,
    isPanelShow:false
}
const carSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addGoods: (state, action: PayloadAction<goodsState>) => {
            if (action.payload.num == 0) return;

            const arr = new Array<goodsState>()
            let flag = false //新的商品是否已添加
            //循环购物车，若商品已存在，则增加数量
            for (let i = 0; i < state.goods.length; i++) {
                const item = state.goods[i]
                arr.push(item)
                if (item.id == action.payload.id) {
                    arr[i].num+=action.payload.num
                    flag = true
                }
            }
            if (!flag) arr.push(action.payload)
            state.goods = arr; //替换购物车
            state.total += (action.payload.num * action.payload.price) //加入总价
            state.num += action.payload.num //加入总数
        },
        openPanel:(state)=>{
            state.isPanelShow=true
        },
        closePanel:(state)=>{
            state.isPanelShow=false
        },
        openBar:(state)=>{
            state.isBarShow=true
        },
        closeBar:(state)=>{
            state.isBarShow=false
        },
    }
})
export const {addGoods,openBar,closeBar,openPanel,closePanel} = carSlice.actions
export default carSlice.reducer