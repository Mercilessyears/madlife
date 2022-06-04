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
        src:'imgs/womenshoes.jpg',
        name:'3d商城',
        id:1,
        routeName:'shop',
        projectId:'shop'
    },
    {
        src:'imgs/building.jpg',
        name:'智慧城市',
        id:2,
        routeName:'building',
        projectId:'build'
    }
])
const router = useRouter()
function handleCard(pro:IProjectInfo){
    router.push({name:pro.routeName})
}
</script>