<template>
    <NLayout class="w-layout">
        <NLayoutHeader bordered class="flex items-center px-5">
            <NMenu mode="horizontal" :options="menuOptions">
            </NMenu>

            <!-- 右侧切换主题 -->
            <div class="ml-auto right-nav">
                <NSwitch
                    v-model:value="active"
                    size="medium"
                    @update-value="switchChange"
                >
                    <template #checked-icon>
                        🌙
                    </template>
                    <template #unchecked-icon>
                        🌤
                    </template>
                </NSwitch>
            </div>
        </NLayoutHeader>
        <NLayoutContent class="flex-1">
            <router-view></router-view>
        </NLayoutContent>
    </NLayout>
</template>

<script lang="ts" setup>
import { NSpace, NLayout,NLayoutHeader,NLayoutContent,NMenu, NIcon,NSwitch } from 'naive-ui'
import {AppstoreOutlined, HomeOutlined} from '@vicons/antd'
import type { MenuOption } from 'naive-ui';
import { Component, h, ref } from 'vue';
import {RouterLink} from 'vue-router'
import { useProjectStore } from '../../../store/project';
function renderIcon(icon:Component){
    return ()=>h(NIcon,null,{default: ()=>h(icon)})
}
function renderRouter(name:string,label:string){
    return ()=> h(RouterLink,{
        to:{
            name
        }
    },{ default: () => label })
}
const menuOptions:MenuOption[] = [
    {
        label:renderRouter('scene','主页'),
        key:'scene',
        icon: renderIcon(HomeOutlined)
    },
    {
        label:renderRouter('project','项目'),
        key:'project',
        icon: renderIcon(AppstoreOutlined)
    }
]
const active = ref<boolean>(false)
const project = useProjectStore()
function switchChange(){
    project.setTheme(active.value)
}
</script>

<style lang="scss" scoped>
.w-layout{
    & :deep(.n-layout-scroll-container){
        
        display: flex;
        flex-direction: column;
        
    }
}
</style>