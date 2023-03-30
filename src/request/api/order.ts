import request from "../index";

const getInfo = () => {
    return request('/order/getInfo', 'GET')
}
const submitOrder = (data) => {
    return request('/order/submitOrder', "POST", data)
}
const getOrder = () => {
    return request('/order/getOrder')
}
const getOrderDetail = (data) => {
    return request('/order/getOrderDetail', 'GET', data)
}
export {
    getInfo,
    submitOrder,
    getOrder,
    getOrderDetail
};