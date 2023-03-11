import {createSlice} from "@reduxjs/toolkit";

interface cartState {
    // 购物车中的物品
    goods: Array<{
        id: number,
        num: number
    }>
}

const initialState: cartState = {
    goods: []
}
const carSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addGoods: (state, action) => {
            if (action.payload.num == 0) return;

            const arr = new Array<{
                id: number,
                num: number
            }>()
            let flag = false //新的商品是否已添加
            for (let i = 0; i < state.goods.length; i++) {
                const item = state.goods[i]
                if (item.id == action.payload.id) {
                    arr.push({id: item.id, num: item.num + action.payload.num})
                    flag = true
                } else arr.push(item)
            }
            if (!flag) arr.push(action.payload)
            state.goods = arr;
        }
    }
})
export const {addGoods} = carSlice.actions
export default carSlice.reducer