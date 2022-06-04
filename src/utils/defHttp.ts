import axios from "axios";

const defHttp = axios.create({
    baseURL:'/backend'
})

export default defHttp