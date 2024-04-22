import axios from "axios";


function axiosGetData(path){
    return axios.get(path).then(res =>{
        console.log(res.data)
        return res.data
    })
}


export {axiosGetData}