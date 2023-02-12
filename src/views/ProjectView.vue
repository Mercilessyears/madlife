<template>
    <n-grid class="p-12" x-gap="12" :cols="4">
        <n-grid-item v-for="pro in projects" :key="pro.id"  @click="handleCard(pro)">
            <n-card
                :title="pro.name"
                hoverable
                class="cursor-pointer"
            >
                <template #cover>
                    <img :src="pro.src" style="height: 260px;" />
                </template>
            </n-card>
        </n-grid-item>
    </n-grid>
</template>

<script lang="ts" setup>
import {NGrid,NGridItem,NCard} from 'naive-ui'
import { ref } from 'vue';
import { useRouter } from 'vue-router';
interface IProjectInfo{
    src:string,
    name:string,
    id:number,
    routeName:string,
    projectId:string
}
const projects = ref<IProjectInfo[]>([
    {
        src:'imgs/pag.jpg',
        name:'3d商城',
        id:1,
        routeName:'shop',
        projectId:'shop'
    },
    // {
    //     src:'imgs/building.jpg',
    //     name:'智慧城市',
    //     id:2,
    //     routeName:'building',
    //     projectId:'building'
    // },
    {
        src:'imgs/suidao.jpg',
        name:'智慧隧道',
        id:4,
        routeName:'tunnel',
        projectId:'tunnel'
    },
    {
        src:'imgs/flutter_pro_img.jpeg',
        name:'手机app开发(Flutter)',
        id:3,
        routeName:'flutterApp',
        projectId:'flutterApp'
    }
])
const router = useRouter()
function handleCard(pro:IProjectInfo){
    router.push({name:pro.routeName})
}
</script>