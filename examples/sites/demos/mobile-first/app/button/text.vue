<template>
  <div>
    <tiny-button type="text"> 文本按钮 </tiny-button>
    <tiny-button type="text" text="text属性"></tiny-button>
  </div>
</template>

<script>
import { TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyButton
  }
}
</script>

<style scoped>
button {
  margin: 0 16px 16px 0;
}
</style>
