import { TX_COS_URL } from "@/enums/commEnum";
import axios from "axios";

const defHttp = axios.create({
    baseURL:'/backend'
    // baseURL:'http://rcwonz1wg.hn-bkt.clouddn.com/'
})

export const txDefHttp = axios.create({
    baseURL:TX_COS_URL
})

export default defHttp