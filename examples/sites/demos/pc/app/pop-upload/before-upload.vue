<template>
  <tiny-pop-upload :action="action" :before-upload="handleUpload"></tiny-pop-upload>
</template>

<script lang="jsx">
import { TinyPopUpload, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyPopUpload
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload'
    }
  },
  methods: {
    handleUpload(file) {
      // return false  支持同步返回 也支持 Promise异步返回
      return new Promise((resolve, reject) => {
        TinyModal.confirm(`确定上传 ${file.name}？`).then((res) => {
          res === 'confirm' ? resolve() : reject(new Error())
        })
      })
    }
  }
}
</script>
