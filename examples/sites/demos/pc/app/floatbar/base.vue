<template>
  <div>
    <p>看右侧浮动块</p>
    <tiny-floatbar>
      <ul>
        <li><a>Default-A</a></li>
        <li><a>B</a></li>
        <li><a>C</a></li>
        <li><a>D</a></li>
      </ul>
    </tiny-floatbar>
  </div>
</template>

<script lang="jsx">
import { TinyFloatbar } from '@opentiny/vue'

export default {
  components: {
    TinyFloatbar
  }
}
</script>
