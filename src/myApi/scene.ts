import defHttp, { txDefHttp } from "@/utils/defHttp";

export async function getGlbData(url:string){
    const data = await defHttp.get(url,{responseType:'blob'})
    const src = createUrl(data.data)
    return src
}

function createUrl(data:Blob){
    const blob = new Blob([data])
    const url = window.URL.createObjectURL(blob)
    return url
}

export  async function getJsonData(url:string){
    const data = await defHttp.get(url)
    const src = createUrl(data.data)
    return src
}

export async function getTxData(url:string){
    const data = await txDefHttp.get(url,{responseType:'blob'})
    const src = createUrl(data.data)
    return src
}