<!-- <template>
    <div>Layout</div>
    <router-view/>
</template>

<script>
export default {
    
}
</script> -->


<script setup>
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutNav from "./components/LayoutNav.vue";
import LayoutFooter from "./components/LayoutFooter.vue"
import LayoutFixed from "./components/LayoutFixed.vue"
import Test from "./components/Test.vue"


import { useFunctionStore } from "../../stores/function"
import { onMounted } from "vue"

const functionStore = useFunctionStore()
onMounted(() => functionStore.getFunction())


</script>


<template>
    <div>
        <!-- <Test /> -->
        <!-- <LayoutFixed /> -->
        <!-- <LayoutNav /> -->
        <LayoutHeader />
        <RouterView />
        <!-- <LayoutFooter /> -->
    </div>

</template>