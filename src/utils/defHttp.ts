import axios from "axios";

const defHttp = axios.create({
    // baseURL:'/backend'
    baseURL:'http://rcwonz1wg.hn-bkt.clouddn.com/'
})

export default defHttp