<template>
  <div>
    <tiny-button @click="handler">{{ loading ? '显示' : '隐藏' }}</tiny-button>
    <br /><br />
    <tiny-skeleton :loading="loading">
      <template #default>
        <p class="paragraph">内容比较短的一段文字</p>
      </template>
      <template #placeholder>
        <tiny-skeleton-item></tiny-skeleton-item>
      </template>
    </tiny-skeleton>
  </div>
</template>

<script>
import { TinySkeleton, TinyButton, TinySkeletonItem } from '@opentiny/vue'

export default {
  components: {
    TinySkeleton,
    TinyButton,
    TinySkeletonItem
  },
  data() {
    return {
      loading: true
    }
  },
  methods: {
    handler() {
      this.loading = !this.loading
    }
  }
}
</script>
