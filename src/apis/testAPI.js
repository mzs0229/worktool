import httpInstance from "@/utils/http";
import axiosInstance from "@/utils/util";


export function getCategory(){
    return httpInstance({
        url:'home/category/head'
    })
}

export function getJsonData() {
    // return axios.get(path).then(res=>{
    //     return res.data
    // })
    return axiosInstance({
        url:'./assets/data/category.json'
    })

}


// export default {getCategory, getJsonData}