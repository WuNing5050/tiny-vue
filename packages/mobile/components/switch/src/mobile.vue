<!--
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 -->
<template>
  <span :class="state.wrapClasses" :disabled="disabled" tabindex="0" @click="toggle" @keydown.space="toggle">
    <div v-if="loading" class="tiny-mobile-switch-loading">
      <div class="tiny-mobile-switch-loading-inner"></div>
    </div>
  </span>
</template>

<script lang="ts">
import { renderless, api } from './renderless/vue'
import { setup, defineComponent } from '../../../vue-common'
import '@opentiny/vue-theme-mobile/switch/index.less'
import { switchProps } from './switch'

export default defineComponent({
  props: switchProps,
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
