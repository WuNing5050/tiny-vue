<template>
  <tiny-pop-upload
    :action="action"
    accept="image/*"
    :upload-file-type="['.png', '.jpg']"
    :max-upload-file-size="10000"
  ></tiny-pop-upload>
</template>

<script lang="jsx">
import { TinyPopUpload } from '@opentiny/vue'

export default {
  components: {
    TinyPopUpload
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload'
    }
  }
}
</script>
