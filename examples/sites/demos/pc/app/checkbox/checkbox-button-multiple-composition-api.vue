<template>
  <tiny-checkbox-group v-model="checkboxGroup" size="small">
    <tiny-checkbox-button v-for="city in cities" :label="city" :key="city">{{ city }}</tiny-checkbox-button>
  </tiny-checkbox-group>
</template>

<script setup>
import { ref } from 'vue'
import { TinyCheckboxButton, TinyCheckboxGroup } from '@opentiny/vue'

const cities = ref(['上海', '北京', '广州', '深圳', '西安', '南京', '天津', '四川', '河北', '云南', '海南', '厦门'])
const checkboxGroup = ref(['上海'])
</script>
