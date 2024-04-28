<script setup >
import { useScroll } from '@vueuse/core'

import {ref} from 'vue'

const el = ref<HTMLElement | null>(null)
const { x, y } = useScroll(el)
</script>

<template>
  <div ref="el" />
  <button @click="x += 10">
    Scroll right 10px
  </button>
  <button @click="y += 10">
    Scroll down 10px
  </button>
</template>