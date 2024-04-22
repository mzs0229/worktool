import './assets/main.css'

import { createApp,ref } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import './assets/main.css'
import '@/styles/common.scss'

// import { getJsonData } from './apis/testAPI'
import { axiosGetData } from './utils/util'

const cateUlr = "../src/assets/data/category.json"
const categoryList= ref([])

// getCategory(cateUlr).then(res =>{
//     console.log(res)
// })
const getCategoryData = async () =>{
    const res = await axiosGetData(cateUlr)
    // console.log('cate-res',res.category)
    
    categoryList.value = res.category
}
getCategoryData()


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
