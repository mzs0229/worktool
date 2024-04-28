<script setup>

// import {getFunctionAPI} from '@/apis/function'
// import { onMounted,ref } from 'vue'
import { useFunctionStore } from '@/stores/function'


const functionStore = useFunctionStore()

// const functionList = ref([])

// const getFunction = async () =>{
//     const res = await getFunctionAPI()
//     console.log(res.function)
//     functionList.value = res.function
// }

// onMounted(()=>{
//     getFunction()
// })
</script>


<template>
  <header class='app-header'>
    <div class="container">
      <div class="logo">
        <RouterLink to="/"></RouterLink>
      </div>
      <div>
        <ul class="app-header-nav">
          <li class="home" v-for="item in functionStore.functionList" :key="item.id">
            <RouterLink :to="`/${item.name}`">{{ item.name }}</RouterLink>
          </li>
        </ul>
      </div>
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜">
      </div>
      <!-- 头部购物车 -->
    </div>
  </header>
</template>




<style scoped lang='scss'>
.app-header {
  background: #fff;
  border-bottom: 3px solid black;

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 100%;

    a {
      display: block;
      height: 50px;
      // line-height: 100px;
      width: 80px;
      margin-top: 15px;
      background: url('@/assets/images/bybit.png') no-repeat center 0px/contain;
    }
  }

  .app-header-nav {
    width: 1000px;
    display: flex;
    padding-left: 40px;
    position: relative;

    li {
      width: 28px;
      margin-right: 40px;
      text-align: center;

      a {
        font-size: 16px;
        line-height: 32px;
        height: 32px;
        // display: inline-block;

        &:hover {
          color: $xtxColor;
          // border-bottom: 1px solid $xtxColor;
        }
      }

      .active {
        color: $xtxColor;
        border-bottom: 1px solid $xtxColor;
      }
    }
  }
  .search {
    display: flex;
    width: 170px;
    height: 32px;
    // position: relative;
    border-bottom: 1px solid #e7e7e7;
    line-height: 32px;

    .icon-search {
      font-size: 18px;
      margin-left: 5px;
    }

    input {
      width: 140px;
      padding-left: 5px;
      color: #666;
    }
  }
}
</style>