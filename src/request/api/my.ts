import request from '../index'
const getUser=()=>{
    return request('/my/getUser','GET')
}
const redeemCoupon=(data)=>{
    return request('/my/redeem',"POST",data)
}
export{
    getUser,
    redeemCoupon
}