import { nextTick, ref, Ref, unref } from "vue";

export function usePicker(arr:Ref<any[]>){
    const refIns = ref<any>(null)

    function register(ins:any){
        refIns.value = ins
        // console.log(refIns.value);

    }

     function changes(){
        refIns.value.handlechange()
        // data.value.timer = 1

        
    }
    
    return  {
            register,
            changes,
            refIns

        }
    
}