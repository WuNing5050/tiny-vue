<template>
  <div class="demo-autocomplete">
    <tiny-autocomplete v-model="value" disabled name="name" label="autocompleteLabel"></tiny-autocomplete>
  </div>
</template>

<script>
import { TinyAutocomplete } from '@opentiny/vue'

export default {
  components: {
    TinyAutocomplete
  },
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style scoped>
.demo-autocomplete .tiny-autocomplete {
  width: 270px;
}
</style>
