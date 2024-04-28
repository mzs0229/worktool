
<script setup>

import { useScroll } from '@vueuse/core'

const { y } = useScroll(window)

</script>


<template>
    我是主页

    {{ y }}
    <div style="height: 2500px">aaa
        <div class="test">
            <input type="button" value="">
            <input type="text" name="" id="">
            <input type="time" name="" id="">
            {{ y }}
        </div>
     


    </div>
</template>

<style scope lang="scss">
.test {
    display: flex
}
</style>