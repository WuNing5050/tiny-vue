<template>
  <tiny-rate v-model="rate1" show-text :colors="['#FADB14', '#ff7a45', '#ffa940']"></tiny-rate>
</template>

<script>
import { TinyRate } from '@opentiny/vue'

export default {
  components: {
    TinyRate
  },
  data() {
    return {
      rate1: 3
    }
  }
}
</script>
