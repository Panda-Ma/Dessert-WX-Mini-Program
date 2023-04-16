import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface cartState {
    // 购物车中的物品
    goods: Array<goodsState>,
    total: number,//总价
    num: number,//总数
    isBarShow: boolean,
    isPanelShow: boolean
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
    isBarShow: false,
    isPanelShow: false
}
const carSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addGoods: (state, action: PayloadAction<goodsState>) => { //添加新商品到购物车
            if (action.payload.num == 0) return;

            const arr = new Array<goodsState>()
            let flag = false //新的商品是否已在购物车中
            //循环购物车，若商品已存在，则增加数量
            for (let i = 0; i < state.goods.length; i++) {
                const item = state.goods[i]
                arr.push(item)
                if (item.id == action.payload.id) {
                    arr[i].num += action.payload.num
                    flag = true
                }
            }
            if (!flag) arr.push(action.payload)
            state.goods = arr; //替换购物车
            state.total += (action.payload.num * action.payload.price) //加入总价
            state.num += action.payload.num //加入总数
        },
        //修改单件商品数量
        changeNum: (state, action: PayloadAction<{ id: number, num: number }>) => {
            const arr = new Array<goodsState>() //新的购物车商品
            for (let i = 0; i < state.goods.length; i++) {
                const item = state.goods[i]
                arr.push(item)
                if (item.id == action.payload.id) {
                    const gap = action.payload.num - item.num // 新增或者减少的数值
                    const gapMoney = gap * item.price
                    state.num += gap //更新总数
                    // 由于js精度计算会导致小数部分错误，加减法的解决方法：
                    state.total = (state.total * 1000 + gapMoney * 1000) / 1000 //更新总价
                    arr[i].num = action.payload.num //更新单个商品个数
                    if (action.payload.num == 0) arr.pop() //如果商品个数为0，删除该商品
                }
            }
            state.goods = arr
        },
        openPanel: (state) => {
            state.isPanelShow = true
        },
        closePanel: (state) => {
            state.isPanelShow = false
        },
        togglePanle: (state) => {
            state.isPanelShow = !state.isPanelShow
        },
        openBar: (state) => {
            state.isBarShow = true
        },
        closeBar: (state) => {
            state.isBarShow = false
        },
        resetData: (state) => {
            state.goods = []
            state.total = 0
            state.num = 0
            state.isBarShow = false
            state.isPanelShow = false
        }
    }
})
export const {addGoods, changeNum, openBar, closeBar, openPanel, closePanel, togglePanle, resetData} = carSlice.actions
export default carSlice.reducer