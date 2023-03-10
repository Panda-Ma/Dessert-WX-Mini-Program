import request from "../index";
import config from "../config";
const getCount=()=>{
    return request(config.countUrl)
}
export {
    getCount,
}