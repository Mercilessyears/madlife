<template>
    <main class="h-full bg-slate-100">
        <n-affix :top="20" class="left-4">
            <NButton quaternary circle type="primary" @click="backTo">
                <template #icon>
                    <n-icon><ArrowLeftOutlined /></n-icon>
                </template>
            </NButton>
        </n-affix>
        <div class="w-3/5 py-5 m-auto bg-white content-body">
            <NH1 class="text-center">Flutter-demo展示</NH1>
            <div class="content p-7">
                <template v-for="it in descList">
                    <NH3 class="my-3 bg-zinc-200">{{it.title}}</NH3>
                    <div class="text-center">
                        <img :src="it.src" height="160" />
                    </div>
                </template>
            </div>
        </div>
    </main>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import { useRouter } from 'vue-router';
import { NAffix,NButton,NIcon,NH1,NH3 } from 'naive-ui'
import { ArrowLeftOutlined} from '@vicons/antd'

const router = useRouter()
const descList = ref([
    {title:"登录界面",src:"/imgs/flutter_demo/f_login.jpg"},
    {title:"主界面",src:"/imgs/flutter_demo/f_ord.jpg"},
    {title:"详情界面",src:"/imgs/flutter_demo/f_detail.jpg"},
    {title:"交互功能",src:"/imgs/flutter_demo/f_phone.jpg"},
    {title:"个人中心",src:"/imgs/flutter_demo/f_center.jpg"},
    {title:"app下载二维码",src:"/imgs/flutter_demo/android_order.png"},
])

function backTo(){
    router.back()
}

</script>

<style lang="scss" scoped>
img{
    display: inline-block;
}
</style>