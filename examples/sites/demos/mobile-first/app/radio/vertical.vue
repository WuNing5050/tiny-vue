<template>
  <tiny-radio-group v-model="value" vertical @change="change">
    <tiny-radio label="1"> 备选项1 </tiny-radio>
    <tiny-radio label="2"> 备选项2 </tiny-radio>
    <tiny-radio label="3"> 备选项3 </tiny-radio>
  </tiny-radio-group>
</template>

<script>
import { TinyRadio, TinyRadioGroup, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyRadio,
    TinyRadioGroup
  },
  data() {
    return {
      value: '1'
    }
  },
  methods: {
    change(val) {
      TinyModal.message({ message: `当前变化的值：${val}`, status: 'info' })
    }
  }
}
</script>
