import { ref } from 'vue'
import { defineStore } from 'pinia'
import {getFunctionAPI} from '@/apis/function'


export const useFunctionStore = defineStore('function', () => {
  
const functionList = ref([])

const getFunction = async () =>{
    const res = await getFunctionAPI()
    // console.log(res.function)
    functionList.value = res.function
}

return {
    functionList,
    getFunction
}
})
