<script setup>
// import LayoutHeaderUl from './LayoutHeaderUl.vue'
// vueUse
import { useScroll } from '@vueuse/core'
import {useFunctionStore} from '@/stores/function'
import { onMounted } from 'vue'
const { y } = useScroll(window)

const functionStore = useFunctionStore()
// onMounted(()=>{
//   console.log("test",y)
// })
</script>

<template>
  <!-- <div class="app-header-sticky" :class="{ show: y > 78 }"> -->
    <div class="app-header-sticky show">
    {{ y }}
    <div class="container">
      <RouterLink class="logo" to="/" />

      <ul class="app-header-nav">
        <li class="home" v-for="item in functionStore.functionList" :key="item.id">
          <RouterLink :to="`/${item.name}`">{{ item.name }}</RouterLink>
        </li>
        {{ y }}
      </ul>
      <!-- 导航区域 -->

      <!-- <LayoutHeaderUl /> -->
      <div class="right">
        <RouterLink to="/">品牌</RouterLink>
        <RouterLink to="/">专题</RouterLink>
      </div>
    </div>
  </div>
</template>


<style scoped lang='scss'>


.app-header-sticky {
  width: 100%;
  height: 60px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  // 此处为关键样式!!!
  // 状态一：往上平移自身高度 + 完全透明
  transform: translateY(-100%);
  opacity: 0;

  // 状态二：移除平移 + 完全不透明
  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;
    height: 60px;
    background: url("@/assets/images/logo.png") no-repeat right 2px;
    background-size: 150px auto;
  }
  .app-header-nav {
    width: 820px;
    display: flex;
    padding-left: 30px;
    position: relative;
    z-index: 998;
  }

  li {
    width: 50px;
    &:hover {
        color:red;
      }

  }

  .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid $xtxColor;

    a {
      width: 60px;
      margin-right: 60px;
      font-size: 16px;
      line-height: 2;

      // &:hover {
      //   color: $xtxColor;
      // }
    }
  }
}
</style>