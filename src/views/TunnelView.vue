<script lang="ts" setup>
import Basic3dHome from '@/utils/basic3dHome';
import { getCurrentInstance, onBeforeUnmount, onMounted, reactive, ref } from 'vue';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from 'three';
import * as datGui from 'dat.gui'
import { GUI } from 'dat.gui';
import {BorderBox1 as DvBorderBox1,ScrollBoard,BorderBox13 as DvBorderBox13} from '@kjgl77/datav-vue3'
import {ArrowLeftOutlined} from '@vicons/antd'
import { NButton,NIcon} from 'naive-ui';
import { TX_COS_URL } from '@/enums/commEnum';
import { useRouter } from 'vue-router';


const router = useRouter()

let basic3d: any
let sdObj = {
    'opacity':0.5
}
let dat:GUI
let datItem: datGui.GUIController
let gltfGlobal:THREE.Group
const config = reactive({
    header: ['设备编号', '数据', '状态'],
    data: [] as string[],
    index: true,
    columnWidth: [50],
    align: ['center'],
})
const deviceList = ref<any[]>([])
const showDevice = reactive({
    name:'',
    data:'',
    status:''
})
const mousePoint = reactive({
    x:-100,
    y:-100,
    flag:false
})
function initFunc(){
    basic3d = new Basic3dHome('scene',()=>{},false)
    basic3d.camera.position.set(0, 10,40)

    const dirLight = new THREE.DirectionalLight('#192221',1) //  #192221
    basic3d.scene.add(dirLight)
    basic3d.initControls()
    addModel()
    addLight()
    gui()
    
}

function mouseClick(instersects:THREE.Intersection[],mouse:{x:number,y:number}){
    const devices = instersects.filter(it => it.object.name.startsWith('device'))
    if (devices.length){
        mousePoint.x = mouse.x+5
        mousePoint.y = mouse.y
        mousePoint.flag=true
        const firstName = devices[0].object.name
        const firstObj = deviceList.value.find(it=> it.name === firstName)
        showDevice.name = firstObj.name
        showDevice.data = firstObj.data
        showDevice.status = firstObj.status
    } else {
        mousePoint.x = -100
        mousePoint.y = -100
        mousePoint.flag=false
    }
}
function gui(){
    dat = new datGui.GUI({})
    datItem = dat.add(sdObj,'opacity',0,1).name('隧道透明度').onChange(changeOpacity)
}
function changeOpacity(value:number){
    const sd = gltfGlobal.getObjectByName('suidao')
    sd?.traverse((child:any)=>{
        if(child.isMesh){
            child.material.opacity = value
        }
    })
    
}
function test(value:number){
    const sd = gltfGlobal.getObjectByName('floor_2')
    sd?.traverse((child:any)=>{
        if(child.isMesh){
            child.material.map.repeat.set(value,20)
        }
    })
}
function handleBack(){
    router.push({name:'project'})
}
function addLight(){
    const light = new THREE.PointLight('#fefefe',1)
    light.position.set(0, 5, 15.5)
    basic3d.scene.add(light)

    const light1 = new THREE.PointLight('#fefefe',1)
    light.position.set(0, 5, 5.5)
    basic3d.scene.add(light1)

    const light2 = new THREE.PointLight('#fefefe',1)
    light.position.set(0, 5, -3.5)
    basic3d.scene.add(light2)

    const light3 = new THREE.PointLight('#fefefe',1)
    light.position.set(0, 5, -13.5)
    basic3d.scene.add(light3)
}
function addModel(){
    const texturea = new THREE.TextureLoader()
    const t = texturea.load(`${TX_COS_URL}/imgs/sd.jpg`)
    // t.wrapS = THREE.RepeatWrapping
    t.wrapT = THREE.RepeatWrapping
    t.repeat.set(3.5,20)
    t.offset.set(-1,1)
    const load = new GLTFLoader()
    load.load(`${TX_COS_URL}/models/suidao.glb`,gltf=>{
        console.log(gltf);
        gltfGlobal = gltf.scene
        const list:any[] = []
        const dList:any[] = []
        gltfGlobal.traverse((obj:any)=>{
            if(obj.isMesh){
                obj.material.emissive = obj.material.color
                obj.material.emissiveMap = obj.material.map
                if (obj.name.startsWith('suidao_body')){
                    obj.material.opacity = 0.5
                    obj.material.transparent = true
                }
                if (obj.name === "floor_2"){
                    obj.material.map = t
                }

                // 得到所有设备放入
                if (obj.name.startsWith('device')){
                    let status = '正常'
                    const randomNum = Math.random()
                    const row = [obj.name,randomNum.toFixed(2),status]
                    
                    if(randomNum >=0.5){
                        status='异常'
                        row[2]='异常'
                        for(let i=0;i<row.length;i++){
                            const r = row[i]
                            row[i]=`<span style="color:#ffdb5c;">${r}</span>`
                        }
                        // 改变材质颜色
                        const material = new THREE.MeshBasicMaterial({
                            color:'red'
                        })
                        obj.material = material
                    }
                    dList.push({name:obj.name,data:randomNum.toFixed(2),status})
                    list.push(row)
                }
                
            }
        })
        config.data = list
        deviceList.value = dList
        basic3d.scene.add(gltfGlobal)
    })
}

onMounted(()=>{
    initFunc()
    const getMouseFun = basic3d.getMoseObj.bind(basic3d,mouseClick)
    window.addEventListener('mousemove',getMouseFun)
    onBeforeUnmount(() => {
        window.removeEventListener('mousemove',getMouseFun)
    })
})
onBeforeUnmount(() => {
    // window.removeEventListener('mousemove',basic3d.getMoseObj.bind(basic3d,mouseClick))
    basic3d.clearThree()
    basic3d.scene = null
    basic3d = null
    dat.destroy()
})
</script>

<template>
    <div id="scene"></div>
    <div class="info-body">

        <div class="header">
            <div class="title">
                智慧隧道
            </div>
            <img src="@/assets/imgs/head_bg.png">
        </div>
        <n-button circle size="tiny" style="font-size: 14px;margin-left: 5px; color:wheat;cursor: pointer;pointer-events: auto;" @click="handleBack" title="返回项目">
            <n-icon>
                <ArrowLeftOutlined />
            </n-icon>
        </n-button>
        <div class="table-auto w-[540px] h-[260px]">
            <DvBorderBox1>
                <div class="flex p-5 justify-centerh-20 w-50">
                    <div>
                    <ScrollBoard ref="scrollBoard" :config="config" style="width:500px;height:220px" />
                    </div>
                </div>
            </DvBorderBox1>
        </div>

        <div class="mask-point"  :style="{left:mousePoint.x+'px',top:mousePoint.y+'px',opacity:mousePoint.flag?1:0}">
            <DvBorderBox13>
               <div class="px-2 py-3 point-text">
                <p>设备编号： {{ showDevice.name }}</p>
                <p>设备数据： {{ showDevice.data }}</p>
                <p>设备状态： {{ showDevice.status }}</p>
               </div>
            </DvBorderBox13>
        </div>
    </div>
</template>

<style lang="scss">
.dg.ac{
    top:80px !important;
}
#scene{
    z-index: 999;
}
.info-body{
    position: absolute;
    pointer-events:none;
    top: 0;
    left: 0;
    width: 100%;
    .header{
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        .title{
            position: absolute;
            font-size: 28px;
            color: white;
            font-weight: 600;
            text-align: center;
            width: 100%;
            line-height: 70px;
        }
        img{
            height: 80px;
            width: 100%;
        }
    }
    .table-auto{
        pointer-events:auto;
    }
    .mask-point{
        position: fixed;
        .point-text{
            width: 200px;
            color: #ffffff;
            p{
                margin-top: 12px;
            }
        }
    }
}
</style>