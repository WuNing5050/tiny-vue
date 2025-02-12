/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */

import {
  getRows,
  handleYearTableClick,
  watchDate,
  markRange,
  handleMouseMove,
  getIsDisabled,
  getIsCurrent,
  getIsDefault
} from './index'

export const api = ['state', 'handleYearTableClick', 'handleMouseMove', 'getIsDisabled', 'getIsCurrent', 'getIsDefault']

export const renderless = (props, { computed, reactive, watch }, { emit, vm }) => {
  const api = {}
  const state = reactive({
    tableRows: [[], [], []],
    rows: computed(() => api.getRows()),
    currentYear: new Date().getFullYear()
  })

  Object.assign(api, {
    state,
    handleYearTableClick: handleYearTableClick({ emit, props, state }),
    markRange: markRange({ props, state }),
    watchDate: watchDate({ api, props }),
    getRows: getRows({ props, state, vm }),
    handleMouseMove: handleMouseMove({ api, emit, props, state }),
    getIsDisabled: getIsDisabled({ props }),
    getIsCurrent: getIsCurrent({ props }),
    getIsDefault: getIsDefault({ props })
  })

  watch(
    () => props.rangeState,
    (value, oldValue) => value !== oldValue && api.markRange(props.minDate, value.endDate),
    { deep: true }
  )

  watch(() => props.minDate, api.watchDate)

  watch(() => props.maxDate, api.watchDate)

  return api
}
