<template>
  <div id="boxone"></div>
</template>

<script>
import { TinyLoading } from '@opentiny/vue'

export default {
  mounted() {
    TinyLoading.service({
      text: '加载中',
      tiny_mode: 'mobile-first',
      target: document.getElementById('boxone')
    })
  }
}
</script>

<style scoped>
#boxone {
  height: 120px;
}
</style>
