<template>
  <div class="demo-select">
    <tiny-select
      v-model="value"
      placeholder="请选择"
      multiple
      popper-class="drop"
      :popper-append-to-body="false"
      placement="top"
      title="标题"
    >
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
  </div>
</template>

<script>
import { TinySelect, TinyOption } from '@opentiny/vue'

export default {
  components: {
    TinySelect,
    TinyOption
  },
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: ''
    }
  }
}
</script>

<style>
.demo-select {
  min-height: 200px;
}

.demo-select .drop {
  background-color: darkgrey;
}
</style>
