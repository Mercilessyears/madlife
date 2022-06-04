<template>
    <span>
        时间选择
    </span>
    <n-date-picker
        v-model="times"
        @update-value="handlechange"
    >
        
    </n-date-picker>
    {{count}}
</template>

<script lang="ts">
import { NDatePicker } from "naive-ui"
import { defineComponent, ref } from "vue"
export default defineComponent({
    name:"WRangePicker",
    components:{
        NDatePicker
    },
    emits:['register'],
    setup(props,{emit}){
        const times = ref<number[]>([])
        const count = ref(1)
        function handlechange(){
            count.value+=1
        }

        const ins:any = {
            times,
            count,
            handlechange
        }
        emit('register',ins)
        return {
            times,
            count,
            handlechange
        }
    }
})


</script>