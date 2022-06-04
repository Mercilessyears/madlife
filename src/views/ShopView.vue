<template>
    <n-spin :show="data.loading">
        <template #description>
            <div class="flex items-center w-52">
               <span class="w-20"> 加载中：</span>
               <n-progress v-if="!!data.progress" :percentage="data.progress"></n-progress>
            </div>
        </template>
        <!-- 物品描述 -->
        <div 
            class="absolute px-3 py-2 bg-gray-200 bg-opacity-75 desc-wrapper w-80 top-10 left-96"
            :class="{active:index === data.descIndex}"
            v-for="(des,index) in descList"
            :key="index">
            <div class="text-lg font-semibold title">
                {{des.title}}
            </div>
            <div class="content">
                {{des.content}}
            </div>
        </div>

        <!-- 3d场景 -->
        <div id="shopScene" ref="shopRef"></div>
        <!-- 左侧产品列表 -->
        <div class="left-pro" :class="{hidden:data.isFullScreen}">
            <div class="flex items-center p-2 text-xl">
                <div class="flex back">
                    <n-button text style="font-size: 24px" @click="handleBack">
                        <n-icon>
                            <ArrowLeftOutlined />
                        </n-icon>
                    </n-button>
                </div>
                <div class="flex-1 text-center title">产品列表</div>
            </div>
            <div class="card-wrapper">
                <n-card 
                    class="cursor-pointer"
                    @click="handleCard(pro)"
                    :class="activeName===pro.id ? 'is-active' : ''"
                    v-for="(pro,index) in products"
                    :key="pro.id"
                    hoverable
                >
                    <template #cover>
                        <img :src="pro.imgsrc" style="height: 200px;" />
                    </template>
                    <div class="flex items-center flex-1">
                        <div class="truncate">
                            {{pro.title}}
                        </div>
                        <div class="flex ml-auto text-lg transition-all duration-300 hover:scale-150" @click.stop="handleCast">
                            <n-icon>
                                <ShoppingCartOutlined />
                            </n-icon>
                        </div>
                        </div>
                </n-card>
                
            </div>
        </div>
        <!-- 右侧场景列表 -->
        <div class="bg-gray-300 right-scene w-300px" :class="{hidden:data.isFullScreen}">
            <div class="text-xl text-center">
                切换场景
            </div>
            <div class="items-center card-wrapper">
                <div
                    class="m-3 cursor-pointer item"
                    @click="handleScene(scene,i)"
                    v-for="(scene,i) in scenes"
                    :key="i"
                >
                    <img :class="sceneActiveName===scene ? 'active' : ''" :src="`./files/hdr/${scene}.jpg`" style="height: 125px;" />
                </div>
                
            </div>
        </div>
        <!-- 滑轮 -->
        <div class="tip" v-show="showTip">
            <span>
                上下滚动鼠标滚轮
            </span>
            <n-icon>
                <ArrowUpOutlined />
            </n-icon>
            <n-icon>
                <ArrowDownOutlined />
            </n-icon>
        </div>
    </n-spin>
</template>

<script lang="ts" setup name="ShopView">
import { computed, nextTick, onMounted, reactive, ref, shallowReactive } from 'vue';
import Basic3d from '../utils/basic3d';
import {productList,hdrList, IProduct} from '@/source/shop'
import { NCard,NSpin,NProgress,NButton,NIcon, useMessage } from 'naive-ui';
import {ArrowLeftOutlined,ShoppingCartOutlined,ArrowUpOutlined,ArrowDownOutlined} from '@vicons/antd'
import { useRouter } from 'vue-router';
import { getGlbData } from '@/myApi/scene';

const products = ref(productList)
const scenes = ref(hdrList)
const activeName = ref(0)
const sceneActiveName = ref('')
const router = useRouter()
const message=useMessage()
const time=ref(0)
const showTip = ref(true)
const data = reactive({
    loading:false,
    progress:0,
    basic3d:null as unknown as BasicModel,
    descIndex:0,
    isFullScreen:false
})
const sourceUrl = ref<{name:string,src:string}[]>([])
const descList = computed(()=>{
    const cur = productList.filter(it=>it.id===activeName.value) || []
    return cur[0]?.desc || []
})
async function handleCard(pro:IProduct){
    data.loading = true
    activeName.value = pro.id
    let url = ''
    const num= sourceUrl.value.findIndex(it=>it.name === pro.modelName)
    if (num > -1) {
        url = sourceUrl.value[num].src
    } else {
        url = await getGlbData(`/${pro.modelName}`) as string
        sourceUrl.value.push({name:pro.modelName,src:url})
    }
    data.basic3d.setModel(url).then(()=>{
        data.loading = false
    })
    data.basic3d.onProgress(progressFn)
}
function handleBack(){
    router.push({name:'project'})
}
function handleCast(){
    message.success('添加成功')
}
async function handleScene(scene:string,index:number){
    sceneActiveName.value=scene
    let url = ''
    const num= sourceUrl.value.findIndex(it=>it.name === scene)
    if (num > -1) {
        url = sourceUrl.value[num].src
    } else {
        url = await getGlbData(`/hdr/${scene}.hdr`)
        sourceUrl.value.push({name:scene,src:url})
    }
    data.basic3d.setEnvMap(url)
}
function initAction(){
    const first = productList[0]
    activeName.value = first.id
    const firstScen = hdrList[0]
    sceneActiveName.value = firstScen
}
function progressFn(e:any){
    let cur = Date.now()
    if (cur-time.value > 150) {
        const pro = e.loaded / e.total * 100
        data.progress = parseFloat(pro.toFixed(2))
        time.value = cur
    }
    
    
}
async function initScene(){
    data.loading = true
    initAction()
    // 请求数据
    const sceneUrl = await getGlbData('/bag2.glb')
    data.basic3d = new Basic3d('shopScene',onFinish)
    sourceUrl.value.push({name:'bag2.glb',src:sceneUrl})
    // 初始化scene
    data.basic3d.addMesh(sceneUrl)
    data.basic3d.onProgress(progressFn)
    const sceneUr2 = await getGlbData('/hdr/000.hdr')
    sourceUrl.value.push({name:'000',src:sceneUr2})
    data.basic3d.setEnvMap(sceneUr2)
    mouseEvent()
    
}
function onFinish(str:string){
    data.loading = false
    data.progress=0
}
function mouseEvent(){
    window.addEventListener('wheel',(e:any)=>{
        //@ts-ignore
        let duration = data.basic3d.animateAction._clip.duration
        let time = data.basic3d.animateAction.time
        let index = Math.floor((time/duration)*4)
        data.descIndex = index
        showTip.value = false
        if (e.deltaY > 0) {
            data.isFullScreen = true
        }

        if (e.deltaY < 0) {
            data.isFullScreen = false
        }
    })
}
onMounted(initScene)
</script>

<style lang="scss" scoped>
$shadow:2px 2px 5px #666, 0px 0px 10px red;
.left-pro,.right-scene{
    width: 300px;
    position: fixed;
    z-index: 1000;
    background-color: rgba(255,255,255,0.3);
    height: 100vh;
    display: flex;
    flex-direction: column;
    transition: all 0.5s ease;
    .card-wrapper{
        flex: 1;
        display: flex;
        flex-direction: column;
        .n-card{
            margin: 10px;
            width: unset;
            & :deep(.n-card__content){
                padding-top: 14px;
                font-size: 20px;
            }
        }
        .is-active{
            box-shadow:$shadow;
        }
    }
}
.left-pro{
    left: 0;
    top: 0;
}
.right-scene{
    right: 0;
    top: 0;
    transition: all 0.5s ease;
    .card-wrapper{
        img {
            width: 250px;
            border-radius: 10px;
            box-shadow: 2px 2px 10px #666;
            transition: all 0.3s;
            &.active {
                box-shadow: 0 0 5px 5px coral;
            }
            &:hover {
                transform: translate(0px, -5px);
                box-shadow: $shadow;
            }
            
        }
    }
}
.left-pro.hidden{
    transform: translate(-100%, 0);
}
.right-scene.hidden {
  transform: translate(100%, 0);
}
.desc-wrapper{
    transition: all 0.5s ease;
    transform: translateX(-300%);
}
.desc-wrapper.active{
    transform: translateX(0);
}
.tip{
    position: absolute;
    bottom: 150px;
    background-color: rgba(255,255,255,0.3);
    left: 50%;
    transform: translateX(-50%);
    font-size: 30px;
    color: rgb(6, 209, 245);
}
</style>