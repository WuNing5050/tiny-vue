<template>
  <div class="placeholder-container">
    <div class="placeholder-default">
      <p>默认</p>
      <tiny-image :src="url"></tiny-image>
    </div>

    <div>
      <p>自定义</p>
      <tiny-image :src="url">
        <template #placeholder>
          <div class="image-slot">加载中<span class="dot">...</span></div>
        </template>
      </tiny-image>
    </div>
  </div>
</template>

<script>
import { TinyImage } from '@opentiny/vue'

export default {
  components: {
    TinyImage
  },
  data() {
    return {
      url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`
    }
  }
}
</script>

<style scoped>
.placeholder-container {
  width: 60%;
  display: flex;
}
.placeholder-default {
  margin-right: 30px;
}
p {
  font-size: 14px;
  line-height: 1.5;
  padding: 16px 0;
}
</style>
