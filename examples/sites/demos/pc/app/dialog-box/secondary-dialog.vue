<template>
  <div>
    <tiny-button @click="boxVisibility = true">二级弹窗</tiny-button>
    <tiny-dialog-box v-model:visible="boxVisibility" title="父弹窗" width="60%">
      <span>父弹窗内容</span>
      <tiny-dialog-box append-to-body v-model:visible="boxVisibility2" title="子弹窗" width="30%">
        <span>子弹窗内容</span>
        <template #footer>
          <tiny-button type="primary" @click="boxVisibility2 = false">确 定</tiny-button>
        </template>
      </tiny-dialog-box>
      <template #footer>
        <tiny-button type="primary" @click="boxVisibility2 = true">子弹窗</tiny-button>
        <tiny-button @click="boxVisibility = false">取 消</tiny-button>
      </template>
    </tiny-dialog-box>
  </div>
</template>

<script lang="jsx">
import { TinyButton, TinyDialogBox } from '@opentiny/vue'

export default {
  components: {
    TinyButton,
    TinyDialogBox
  },
  data() {
    return {
      boxVisibility: false,
      boxVisibility2: false
    }
  }
}
</script>
