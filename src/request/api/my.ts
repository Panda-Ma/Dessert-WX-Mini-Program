import request from '../index'
const getUser=()=>{
    return request('/my/getUser','GET')
}
export{
    getUser
}