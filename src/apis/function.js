
import { axiosGetData } from "@/utils/util"

export function getFunctionAPI(){
    return axiosGetData("../src/assets/data/function.json")
}


export function getCategoryAPI(){
    return axiosGetData("../src/assets/data/chat/category.json")
}