export interface IProduct {
    id:number,
    title:string,
    imgsrc:string,
    price:number,
    modelPath:string,
    modelName:string,
    desc:IProductDesc[],
}
interface IProductDesc{
    title:string,
    content:string,
}

const productList:IProduct[] = [
    { "id": 7589, "title": "GUCCI 古驰新款女包", "imgsrc": "./imgs/bag.png", "price": 17899, "modelPath": "./files/gltf/", "modelName": "bag2.glb", "desc": [
        { "title": "与一款全新的邮差包设计。", "content": "该系列手袋同时推出摩登廓形的水桶包款式" },
        { "title": "向60年前古驰的经典手袋致敬。", "content": "Gucci 1955马衔扣系列手袋延续经典手袋线条与造型" },
        { "title": "手袋结构设计精巧", "content": "搭配可调节长度的肩带，肩背或斜挎皆宜。" },
        { "title": "GUCCI 1955马衔扣系列手袋", "content": "标志性的马衔扣设计源于马术运动，由金属双环和一条衔链组合而成。" }
    ] },
    // { "id": 7590, "title": "Macbook Pro", "imgsrc": "./imgs/macpro.jpg", "price": 25899, "modelPath": "./files/gltf/", "modelName": "Macbookpro2.glb", "desc": [
    //     { "title": "超高速M1 Pro和M1 Max芯片", "content": "带来颠覆性表现和惊人续航" },
    //     { "title": "炫目的Liquid视网膜XDR显示屏", "content": "Macbookpro各类强大端口也都整装就位" },
    //     { "title": "战力更猛，耐力也更强！", "content": "无论是剪辑8K视频、编译代码都能随时随地轻松搞定" },
    //     { "title": "Pro到MAX，霸气不封顶", "content": "图形处理器速度最高提升至4倍，机器学习性能提升至5倍" }
    // ] },
    { "id": 7591, "title": "水晶凉鞋女细跟", "imgsrc": "./imgs/womenshoes.jpg", "price": 17899, "modelPath": "./files/gltf/", "modelName": "shoes.glb", "desc": [
        { "title": "白变女神季", "content": "性感潮品、优雅轻淑范！" },
        { "title": "舒适、焕新", "content": "手感光滑、富有弹性、舒适一整天" },
        { "title": "个性、魅力", "content": "水晶搭配金属，凸显柔美气质" },
        { "title": "全透、高端水晶", "content": "每一处的细节，都很到位!" }
    ] }
]

const hdrList:string[] = ["000", "080", "079", "077", "076", "067"]
export { productList,hdrList }
