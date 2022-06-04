import {defineStore} from 'pinia'
import {darkTheme} from 'naive-ui'
export const useProjectStore = defineStore('project',{
    state: ()=>({
        theme:null as any
    }),
    actions:{
        setTheme(flag:boolean){
            this.theme=flag ? darkTheme : null
        }
    },
    getters:{
        getTheme(state){
            return state.theme
        }
    }
})