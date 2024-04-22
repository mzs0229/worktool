
import { axiosGetData } from "@/utils/util"

export function getFunctionAPI(){
    return axiosGetData("../src/assets/data/function.json")
}