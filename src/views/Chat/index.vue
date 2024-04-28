<script setup>

import { onMounted, ref } from 'vue'
import { axiosGetData } from "@/utils/util"
import useClipboard from 'vue-clipboard3'
import { ElNotification, ElMessage } from 'element-plus'
import { getCategoryAPI } from '@/apis/function';


const categoryList = ref([])
const chatContent = ref([])
const currentCategoryIndex = ref(0)
const getCategory = async () => {
  const res = await getCategoryAPI()
  categoryList.value = res.category
}

const getChatContent = async (path, index) => {
  const res = await axiosGetData(`../src/assets/data/chat/${path}.json`)
  chatContent.value = res.content
  currentCategoryIndex.value = index

}
const { toClipboard } = useClipboard()
const copy = (val) => {
  toClipboard(val).then(() => {
    ElNotification.success({
      title: ' Copy Succeed',
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

  <div class="container">
    <div class="category">
      <ul class="app-header-nav">
        <li :class="currentCategoryIndex == index ? 'selected' : ''" v-for="(item, index) in categoryList" :key="index"
          @mouseover="getChatContent(item.name, index)">

          <p>{{ item.name }}</p>

        </li>

      </ul>
    </div>
    <div class="chatContent">
      <table id="table">
        <thead>
          <tr>
            <th class="desc">Desc</th>
            <th class="detail">JPDetail</th>
            <th class="detail">ENDetail</th>
            <th class="detail">CNDetail</th>
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

<style scoped lang="scss">
.container {
  // width: 1500px;
  // background-color: green;
  color: black;
  display: flex;

  .category {
    width: 10%;
    float: left;

    li {
      height: 40px;
      line-height: 40px;
      background-color: white;
      margin-bottom: 2px;
      list-style: none;
      border-radius: 5%;
      border-bottom: 1px solid;
      margin-right: 5px;
    }

    li.selected {
      background-color: #9dd929;
      text-align: center;
    }
  }

  .chatContent {
    width: 90%;
    float: left;
    // background-color: yellow;

    table {
      width: 1300px;
      height: 100%;
      table-layout: fixed;
      font-size: 12px;

      th {
        text-align: center;
        padding: 10px;
        border-bottom: 1px solid #9ed929;
        text-shadow: 1px 1px 1px #568f23;
        background-color: #9dd929;
        border-radius: 5px 5px 0px 0px;
        font-size: 16px;

        &.desc {
          width: 100px;
        }

      }

      td {
        padding: 5px 5px;
        background-color: #def3ca;
        border-radius: 3px;
      }
    }
  }

}


</style>
