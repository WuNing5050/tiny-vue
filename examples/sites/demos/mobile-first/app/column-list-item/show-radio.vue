<template>
  <div>
    <tiny-column-list-item v-model="value" show-radio label="1" class="mb-3">
      <template #column1>
        <ul>
          <li class="text-sm mb-1 sm:mb-1.5">智能手机智能手机</li>
          <li class="mb-1 sm:mb-1.5 text-color-text-secondary"><span>品牌：</span><span>手机</span></li>
          <li class="text-color-text-secondary"><span>编码：</span><span>HYFVFHJGG1354</span></li>
        </ul>
      </template>
      <template #column2>
        <ul class="text-color-text-secondary">
          <li class="mb-1 sm:mb-1.5"><span>规格型号：</span><span>256G</span></li>
          <li class="mb-1 sm:mb-1.5"><span>计量单位：</span><span>1</span></li>
          <li><span>尺寸：</span><span>6.5英寸</span></li>
        </ul>
      </template>
    </tiny-column-list-item>
    <tiny-column-list-item v-model="value" show-radio label="2">
      <template #column1>
        <ul>
          <li class="text-sm mb-1 sm:mb-1.5">智能手机智能手机</li>
          <li class="mb-1 sm:mb-1.5 text-color-text-secondary"><span>品牌：</span><span>手机</span></li>
          <li class="text-color-text-secondary"><span>编码：</span><span>HYFVFHJGG1354</span></li>
        </ul>
      </template>
      <template #column2>
        <ul class="text-color-text-secondary">
          <li class="mb-1 sm:mb-1.5"><span>规格型号：</span><span>256G</span></li>
          <li class="mb-1 sm:mb-1.5"><span>计量单位：</span><span>1</span></li>
          <li><span>尺寸：</span><span>6.5英寸</span></li>
        </ul>
      </template>
    </tiny-column-list-item>
  </div>
</template>

<script>
import { TinyColumnListItem } from '@opentiny/vue'

export default {
  components: {
    TinyColumnListItem
  },
  data() {
    return {
      value: '1'
    }
  }
}
</script>
