<template>
  <div class="demo-input">
    <tiny-input v-model="text" :maxlength="10" show-word-limit></tiny-input>
    <br />
    <tiny-input type="textarea" v-model="textarea" :maxlength="20" show-word-limit></tiny-input>
  </div>
</template>

<script>
import { TinyInput } from '@opentiny/vue'

export default {
  components: {
    TinyInput
  },
  data() {
    return {
      text: '',
      textarea: ''
    }
  }
}
</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
  display: block;
  margin: 5px 0;
}

.demo-input .tiny-textarea {
  width: 400px;
}
</style>
