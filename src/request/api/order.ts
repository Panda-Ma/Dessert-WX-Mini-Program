import request from "../index";
import config from "../config";
const inc=()=>{
    return request(config.countUrl)
}
export{
    inc,

}