<template>
    <div id="cityBuilding" ref="buildingRef"></div>
</template>

<script lang="ts" setup name="BuildingView">
import { getGlbData } from '@/myApi/scene';
import * as Cesium from 'cesium'
import { onMounted, reactive } from 'vue';

const data = reactive({
    ce: null as unknown as Cesium.Viewer
})
async function initScene(){

    const customLayer = new Cesium.ArcGisMapServerImageryProvider({
        url:'https://services.arcgisonline.com/ArcGis/rest/services/World_Street_Map/MapServer'
    })
    data.ce = new Cesium.Viewer('cityBuilding',{
        // baseLayerPicker:false,
        imageryProvider:customLayer,
        terrainProvider:Cesium.createWorldTerrain({
            requestWaterMask:true,
            requestVertexNormals:true
        })
    }) as Cesium.Viewer
    data.ce.camera.setView({
        destination: new Cesium.Cartesian3(1332761,-4662399,4137888),
        orientation:{
            heading: Cesium.Math.toRadians(57.53812991892656),
            pitch: Cesium.Math.toRadians(-19.74361760510513),
            roll: Cesium.Math.toRadians(0.164340324995592)
        }
    })
    const city =data.ce.scene.primitives.add(new Cesium.Cesium3DTileset({
        url: Cesium.IonResource.fromAssetId(3839)
    }))
    // 定义3d样式
    const highStyle = new Cesium.Cesium3DTileStyle({
        color:{
            conditions:[
                ["${height} >= 300","color('rgba(45,0,75,0.5)')"],
                ["${height} >= 200","color('rgb(102,71,175)')"],
                ['${height} >= 100','rgba(175,162,204,0.5)'],
                ['${height} >= 50','rgba(224,226,238,0.5)'],
                ['${height} >= 25','rgba(252,230,175,0.5)'],
                ['${height} >= 10','rgba(145,0,25,0.5)'],
                ["true","color('rgb(125,75,65)')"]
            ]
        }
    })
    city.style = highStyle
    // geo json 文件加载
    const url = await getGlbData('/json/sampleNeighborhoods.geojson')
    const neighborHoodsPromise = Cesium.GeoJsonDataSource.load(url)
    let neighborhoods;
    neighborHoodsPromise.then(res=>{
        console.log(res);
        
        data.ce.dataSources.add(res);
        neighborhoods = res.entities
        const neighborhoodsEntitis = res.entities.values
        for(let i =0;i<neighborhoodsEntitis.length;i++){
            const entity = neighborhoodsEntitis[i]
            if(Cesium.defined(entity.polygon)){
                entity.name = entity.properties?.neighborhood;
                entity.polygon!.material = Cesium.Color.fromRandom({
                    red:0.1,
                    maximumGreen:0.5,
                    minimumBlue:0.5,
                    alpha:0.6
                }) as any

                entity.polygon!.classificationType = Cesium.ClassificationType.TERRAIN  as any;
                const polyPositions = entity.polygon?.hierarchy?.getValue(Cesium.JulianDate.now()).positions;
                let polyCenter = Cesium.BoundingSphere.fromPoints(polyPositions).center;
                polyCenter = Cesium.Ellipsoid.WGS84.scaleToGeocentricSurface(polyCenter)
                entity.position = polyCenter as any

                // 生成标签
                entity.label = {
                    text:entity.name,
                    showBackground:true,
                    scale:0.6,
                    horizontalOrigin:Cesium.HorizontalOrigin.CENTER,
                    verticalOrigin:Cesium.VerticalOrigin.BOTTOM,
                    distanceDisplayCondition:new Cesium.DistanceDisplayCondition(10,8000),
                    disableDepthTestDistance:100
                } as any
            }
        }
    })

    const kmlOptions = {
        camera : data.ce.scene.camera,
        canvas : data.ce.scene.canvas,
        // 如果我们想要将几何特征（多边形、线串和线性环）固定在地面上，则为 true。
        clampToGround : true
    }
    const geocachePromise = Cesium.KmlDataSource.load('/SampleData/sampleGeocacheLocations.kml', kmlOptions)
    geocachePromise.then(dataSource =>{
        data.ce.dataSources.add(dataSource);

        // 获取实体数组
        let geocacheEntities = dataSource.entities.values;

        for (let i = 0; i < geocacheEntities.length; i++) {
            let entity = geocacheEntities[i];
            if (Cesium.defined(entity.billboard)) {
                // 调整垂直原点，使图钉位于地形上
                entity.billboard!.verticalOrigin = Cesium.VerticalOrigin.BOTTOM as any;
                entity.billboard!.image = '/imgs/tagpark.png' as any;
                // 禁用标签以减少混乱
                entity.label = undefined;
                // 添加距离显示条件
                entity.billboard!.distanceDisplayCondition = new Cesium.DistanceDisplayCondition(10.0, 20000.0) as any;
                // 以度为单位计算纬度和经度
                let cartographicPosition = Cesium.Cartographic.fromCartesian(entity.position!.getValue(Cesium.JulianDate.now())!);
                let latitude = Cesium.Math.toDegrees(cartographicPosition.latitude);
                let longitude = Cesium.Math.toDegrees(cartographicPosition.longitude);
                // 修改描述
                let description = '<table class="cesium-infoBox-defaultTable cesium-infoBox-defaultTable-lighter"><tbody>' +
                    '<tr><th>' + "Longitude" + '</th><td>' + longitude.toFixed(5) + '</td></tr>' +
                    '<tr><th>' + "Latitude" + '</th><td>' + latitude.toFixed(5) + '</td></tr>' +
                    '<tr><th>' + "实时人流" + '</th><td>' + Math.floor(Math.random()*20000)  + '</td></tr>' +
                    '<tr><th>' + "安全等级" + '</th><td>' + Math.floor(Math.random()*5)  + '</td></tr>' +
                    '</tbody></table>';
                entity.description = description as any;
            }
        }
    })

    // 从czml文件加载飞行路径
    let dronePromise = Cesium.CzmlDataSource.load('/SampleData/sampleFlight.czml');

    // 无人机实体
    let drone;
    const uris = await getGlbData('/CesiumDrone.gltf')
    dronePromise.then(function(dataSource){
        data.ce.dataSources.add(dataSource);
        drone = dataSource.entities.getById('Aircraft/Aircraft1');
        drone!.model = {
            uri:uris,
            minimumPixelSize:128,
            maximumScale:1000,
            silhouetteColor:Cesium.Color.WHITE,
            silhouetteSize:2
        } as any

        drone!.orientation = new Cesium.VelocityOrientationProperty(drone!.position);
        drone!.viewFrom = new Cesium.Cartesian3(0,-30,30) as any
        data.ce.clock.shouldAnimate = true;
    })
    // const viewer = new Cesium.Viewer('cityBuilding', {
    //     terrainProvider : new Cesium.ArcGISTiledElevationTerrainProvider({
    //         url: 'https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer'
    //     })
    // });

    // viewer.camera.setView({
    //     destination: Cesium.Cartesian3.fromDegrees(-121.82283810552254, 36.20978697451458, 2830.3061574691405),
    //     orientation: {
    //         heading: Cesium.Math.toRadians(57.53812991892656),
    //         pitch: Cesium.Math.toRadians(-19.74361760510513),
    //         roll: Cesium.Math.toRadians(0.164340324995592)
    //     }
    // });

}

onMounted(initScene)
</script>

<style>
body,#cityBuilding{
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
}
#cityBuilding{
    overflow: hidden;
}
</style>