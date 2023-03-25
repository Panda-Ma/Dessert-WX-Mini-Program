import request from "../index";
const getInfo=()=>{
    return request('/order/getInfo','GET')
}
const submitOrder=(data)=>{
    return request('/order/submitOrder',"POST",data)
}
export{
    getInfo,
    submitOrder
}