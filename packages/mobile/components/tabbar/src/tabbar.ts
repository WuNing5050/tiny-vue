export const tabbarProps = {
  activeColor: String,
  border: {
    type: Boolean,
    default: true
  },
  fixed: {
    type: Boolean,
    default: true
  },
  inactiveColor: String,
  modelValue: {
    type: [Number, String],
    default: 0
  },
  placeholder: Boolean,
  route: Boolean,
  safeAreaInsetBottom: Boolean,
  zIndex: [Number, String],
  showNumber: {
    type: Number,
    default: 5
  },
  itemList: {
    type: Array,
    default: () => []
  }
}
