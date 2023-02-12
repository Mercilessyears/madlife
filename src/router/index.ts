import { createRouter,createWebHashHistory, RouteRecordRaw } from "vue-router";
import { Layout } from "../components/Layout";
const routes:RouteRecordRaw[] = [
    {
        path:'/',
        name:'Layout',
        component:Layout,
        redirect:'/scene',
        children:[
            {
                path:'home',
                name:'home',
                component:()=>import(/**chunkName:Home */ '../views/HomeView.vue')
            },
            {
                path:'project',
                name:'project',
                component:()=>import(/**chunkName:Home */ '../views/ProjectView.vue')
            },
        ]
    },
    {
        path:'/scene',
        name:'scene',
        component: ()=> import('@/views/HomeSceneView.vue')
    },
    {
        path:'/building',
        name:'building',
        component: ()=> import('@/views/BuildingView.vue')
    },
    {
        path:'/shop',
        name:'shop',
        component: ()=> import('@/views/ShopView.vue')
    },
    {
        path:'/flutterApp',
        name:'flutterApp',
        component:()=>import(/**chunkName:FlutterAppView */ '@/views/FlutterAppView.vue')
    },
    {
        path:'/tunnel',
        name:'tunnel',
        component:()=>import(/**chunkName:TunnelView */ '@/views/TunnelView.vue')
    },
]
const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router