<template>
  <div id="boxeight"></div>
</template>

<script>
import { TinyLoading } from '@opentiny/vue'

export default {
  data() {
    return {
      size: 'large'
    }
  },
  mounted() {
    TinyLoading.service({
      lock: true,
      text: '加载中',
      target: '#boxeight', // 可传DOM节点对应ID名或类名字符串，也可以传入DOM对象，例如：domObj，let domObj = document.getElementById('boxeight').
      size: 'mini',
      tiny_mode: 'mobile-first'
    })
  }
}
</script>

<style scoped>
#boxeight {
  height: 150px;
}
</style>
