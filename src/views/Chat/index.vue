<script setup>

import { onMounted, ref } from 'vue'
import { axiosGetData } from "@/utils/util"
import useClipboard from 'vue-clipboard3'
import { ElNotification, ElMessage } from 'element-plus'
import { getCategoryAPI } from '@/apis/function';


const categoryList = ref([])
const chatContent = ref([])
const getCategory = async () => {
  const res = await getCategoryAPI()
  categoryList.value = res.category
}

const getChatContent = async (path) => {
  // const basePath = "../src/assets/data/function.json"
  const res = await axiosGetData(`../src/assets/data/${path}.json`)
  console.log(res)
  chatContent.value = res.content

}
const { toClipboard } = useClipboard()
const copy = (val) => {
  toClipboard(val).then(() => {
    ElNotification.success({
      title: ' Copy successed',
      message: val,
      offset: 200,
      duration: 2000
    })
  }).catch(err => {
    console.log("catch", err)
    ElNotification.error({
      title: ' Copy Failed',
      message: "Text value is empty!!",
      offset: 200,
      duration: 1000
    })
  })

}

onMounted(() => getCategory())

</script>


<template>
  <!-- <div>我是chatTool</div> -->
  <div class="container">
    <div class="category">
    <ul class="app-header-nav">
      <li class="home" v-for="item in categoryList" :key="item.id" @click="getChatContent(item.name)">
        <p>{{ item.name }}</p>
      </li>
    </ul>
  </div>
  <div class="chatContent">
    <!-- {{ chatContent }} -->
    <table id="table1">
      <thead>
        <tr>
          <th class="desc">Desc</th>
          <th class="JPdetail">JPDetail</th>
          <th class="ENdetail">ENDetail</th>
          <th class="CNdetail">CNDetail</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in chatContent" :key="index">
          <td class="desc">{{ item.desc }}</td>
          <td class="detail">
            <el-button type="primary" icon="CopyDocument" size="small" color="#9ed929" @click="copy(item.JP_detail)">
            </el-button>
            <a :href="item.detail" target="_blank">{{ item.JP_detail }}</a>
          </td>
          <td class="detail">
            <el-button type="primary" icon="CopyDocument" size="small" color="#9ed929" @click="copy(item.EN_detail)">
            </el-button>
            <a :href="item.detail" target="_blank">{{ item.EN_detail }}</a>
          </td>
          <td class="detail">
            <el-button type="primary" icon="CopyDocument" size="small" color="#9ed929" @click="copy(item.CN_detail)">
            </el-button>
            <a :href="item.detail" target="_blank">{{ item.CN_detail }}</a>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
  </div>

</template>

<style scoped>
.container {
  width: 1200px;
  display: flex;
}
th {
  text-align: center;
  padding: 10px;
  border-bottom: 1px solid #9ed929;
  text-shadow: 1px 1px 1px #568f23;
  background-color: #9dd929;
  border-radius: 5px 5px 0px 0px;
  font-size: 16px;
}

#table1 thead th:empty {
  background-color: transparent;
  border: none;
}

#table1 tbody td {
  padding: 5px 5px;
  background-color: #def3ca;
  border-radius: 3px;
}

td.desc {
  font: bold;
  width: 150px;
  font-size: 14px;
  text-align: center;
}

td.detail {
  font-size: 12px;
  text-align: left;
}
</style>
