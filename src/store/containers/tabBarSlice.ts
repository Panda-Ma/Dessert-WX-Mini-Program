import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface TabBarState{
    selected:number //tabBar页面选中的下标索引
}
const initialState:TabBarState={
    selected:0
}
export const tabBarSlice=createSlice({
    name:'tabBar',
    initialState,
    reducers:{
        setSelected:(state,action:PayloadAction<number>)=>{
            state.selected=action.payload
        }
    }
})
export const {setSelected}=tabBarSlice.actions
export default tabBarSlice.reducer;