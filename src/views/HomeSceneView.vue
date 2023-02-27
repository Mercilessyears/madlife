<template>
<n-spin :show="loading" class="h-screen">
    <div class="home-scene">

        <div id="homeSceneBox"></div>
        <div class="content-wrapper">
            <div class="header">
                <div class="flex items-center justify-between mx-12">
                    <n-gradient-text
                        class="font-serif text-3xl select-none title"
                        gradient="linear-gradient(90deg, yellow 0%, pink 50%, red 100%)"
                    >
                        MADLIFE
                    </n-gradient-text>
                    <div class="flex">
                        <div class="item"  :class="m.path === $route.path? 'active' :'' " v-for="m in menu" :key="m.path" @click="handleMenu(m)">
                            {{m.name}}
                        </div>
                    </div>
                </div>
            </div>
            <div class="main">
                <div class="main-scroll">
                    
                    <div class="desc1">
                        <p class="item">我是一个<strong>「</strong>前端<strong>」</strong>爱好者，现居成都市，有四年相关从业经验！</p>
                        <div class="cursor-pointer item" @mouseenter="moveEnter('VUE.jpg')" @mouseleave="moveLeave">熟练<span class="text-lg font-bold text-red-400 "> Vue </span>及vue全家桶，可结合element-ui、vuetify、ant-design-vue等UI框架开发中后台网页</div>
                        <div class="cursor-pointer item" @mouseenter="moveEnter('rect.jpg')" @mouseleave="moveLeave">熟悉<span class="text-lg font-bold text-red-400 "> React </span> ，可结合Ant Design开发中后台网页</div>
                        <div class="cursor-pointer item" @mouseenter="moveEnter('node.jpg')" @mouseleave="moveLeave">熟练<span class="text-lg font-bold text-red-400 "> Flex </span>、Grid+HTML+CSS实现网页布局</div>
                        <div class="cursor-pointer item">熟悉<span class="text-lg font-bold text-red-400 "> Threejs</span>、Echarts、ES6、Typescript、、webpack、less、sass、微前端qiankun等</div>
                        <div class="cursor-pointer item">熟悉<span class="text-lg font-bold text-red-400 "> Git </span>版本管理工具</div>
                        <div class="cursor-pointer item">熟悉<span class="text-lg font-bold text-red-400 "> 微信 </span>小程序</div>
                        <div class="cursor-pointer item" @mouseenter="moveEnter('flutter.jpg')" @mouseleave="moveLeave">知晓<span class="text-lg font-bold text-red-400 "> Flutter </span>基本用法，vue-test-utils、jest等单元测试工具</div>
                    </div>
                    <div class="contanct">
                        <p class="text-3xl">联系我🌝</p>
                        <div class="phone"> <n-icon class="mr-2"><PhoneOutlined /></n-icon> 电话：18202817965</div>
                        <div class="email"> <n-icon class="mr-2"><MailOutlined /></n-icon> 邮箱：wenjunanjun@163.com</div>
                    </div>
                    <div class="tootip">
                        滚动鼠标滚轮
                        <n-icon ref="iconRef" class="arrow"><ArrowsAltOutlined /></n-icon>
                    </div>
                </div>
            </div>
        </div>
    </div>
</n-spin>
</template>

<script lang="ts" setup>
import {nextTick, onBeforeUnmount, onMounted, reactive, ref,onDeactivated,onActivated} from 'vue'
import {NIcon,NSpin,NGradientText} from 'naive-ui'
import Basic3dHome from '@/utils/basic3dHome'
import { RouteLocationRaw, useRouter } from 'vue-router';
import {PhoneOutlined,MailOutlined,ArrowsAltOutlined} from '@vicons/antd'
import gsap from 'gsap';
import { getGlbData, getTxData } from '@/myApi/scene';
import { TX_COS_URL } from '@/enums/commEnum';
const menu = [
    {name:'主页',path:'/scene',key:'1'},
    {name:'示例',path:'/project',key:'2'},
]
const urllist=ref([
    {name:'love.jpg',text:'永远爱编程',src:`${TX_COS_URL}/imgs/love.jpg`},
    {name:'VUE.jpg',text:'永远爱vue,src:""'},
    {name:'rect.jpg',text:'永远爱react',src:""},
    {name:'node.jpg',text:'永远爱nodejs',src:""},
    {name:'flutter.jpg',text:'永远爱flutter',src:""},
])
const router = useRouter()
const iconRef = ref()
const loading = ref(true)
const data = reactive({
    scene:null as any
})
function onFinish(){
    loading.value=false
}
async function getPicList(){
    const promiseAll = urllist.value.map(it=>getTxData(`/imgs/${it.name}`).catch(()=>{}))
    const ul = await Promise.all(promiseAll) as string[]
    urllist.value.forEach((el,index) => {
        el.src = ul[index]
    });
}
function handleMenu(item: any){
    router.push(item.path)
}
async function initFunc(){
    gsap.to('.arrow',{
        translateY:5,
        duration:1,
        repeat:-1
    })
    loading.value=true
    getPicList()
    // 加载scene
    // const url = await getGlbData('/scene.glb')
    const url = `${TX_COS_URL}/scene.glb`
    const url1 = urllist.value[0].src
    data.scene = new Basic3dHome('homeSceneBox',onFinish)
    // console.log(data.scene);
    data.scene.addMesh(url,url1)
}
async function moveEnter(id:string){
    const url = urllist.value.filter(it=>it.name === id)[0].src
    data.scene.checkoutImg(url)
}
async function moveLeave(){
    const url =  urllist.value[0].src
    data.scene.checkoutImg(url)
}
onMounted(()=>{
    initFunc()
})
onBeforeUnmount(()=>{
    data.scene.clearThree()
    data.scene = null
})
onActivated(()=>{
    const bindFunc = data.scene.onDocumentMouse.bind(data.scene)
    const wheelBindFunc = data.scene.wheelChange.bind(data.scene)
    window.addEventListener('mousemove',bindFunc)
    window.addEventListener('wheel',wheelBindFunc)
    onDeactivated(()=>{
        window.removeEventListener('mousemove',bindFunc)
        window.removeEventListener('wheel',wheelBindFunc)
    })
})
</script>

<style lang="scss" scoped>
$active:aquamarine;
.linkStyle{
    &::after{
        content: ' ';
        background-color: $active;
        position: absolute;
        bottom: 4px;
        left: 50%;
        height: 2px;
        width: 50%;
        transform: translateX(-50%);
        transition: all 0.5s ease;
    }
}

    .home-scene{
        position: relative;
        height: 100%;
        & :deep(.n-spin-container){
            background-color: black;
        }
        #myHome{
            height: 100%;
        }
        .content-wrapper{
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            right:0;
            bottom: 0;
            overflow: auto;
            .header{
                box-sizing: border-box;
                position: fixed;
                top: 45px;
                width: 100%;
                color: white;
                z-index: 10;
                div{
                    box-sizing: border-box;
                }
                .item{
                    margin-left: 10px;
                    color: white;
                    cursor: pointer;
                    padding-bottom: 4px;
                    &:hover{
                        color: $active;
                    }
                }
                .active{
                    color: $active;
                    position:relative;
                    @extend .linkStyle;
                }
            }
            .main{
                box-sizing: border-box;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                margin-top: 120px;
                padding-left: 100px;
                padding-right: 100px;
                color:white;
                .main-scroll{
                    display: flex;
                    flex-direction: column;
                }

                .desc1{
                    width: 40%;
    
                }
                .item{
                    padding-top: 15px;
                    padding-bottom: 15px;
                    &:hover{
                        transform: translateX(15px);
                        transition: all 0.3s ease-in-out;
                    }
                }
    
                .contanct{
                    margin-top: 220px;
                    div{
                        display: flex;
                        align-items: center;
                    }
                }
                .tootip{
                    position: fixed;
                    left: 30px;
                    bottom: 150px;
                    width: 20px;
                    .arrow{
                        font-size: 38px;
                        transform: rotate(-45deg) translateX(-18px);
                    }
                }
            }
        }
    }
</style>