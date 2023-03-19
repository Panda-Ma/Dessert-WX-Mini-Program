import request from "../index";
const getInfo=()=>{
    return request('/order/getInfo','GET')
}
export{
    getInfo,
}