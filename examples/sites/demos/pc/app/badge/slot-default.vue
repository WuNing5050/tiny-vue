<template>
  <tiny-badge :value="2">
    <template #default>
      <span class="warning">自定义默认插槽</span>
    </template>
  </tiny-badge>
</template>

<script>
import { TinyBadge } from '@opentiny/vue'

export default {
  components: {
    TinyBadge
  }
}
</script>

<style scoped>
.warning {
  color: #fa9841;
}
</style>
