import defHttp from "@/utils/defHttp";

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