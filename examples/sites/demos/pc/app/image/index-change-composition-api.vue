<template>
  <div class="demo-image__index-change">
    <tiny-image :src="url" :preview-src-list="srcList" @change-index="changeIndex"> </tiny-image>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyImage, TinyModal } from '@opentiny/vue'

const url = ref(`${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`)
const srcList = ref([
  `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`,
  `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/house.jpg`,
  `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/bridge.jpg`
])

function changeIndex(index) {
  console.log('sssss')
  TinyModal.message({ message: `图片切换事件触发，当前 index： ${index}`, status: 'info' })
}
</script>

<style scoped>
.demo-image__index-change {
  width: 200px;
  height: 200px;
}
</style>
