import DatePicker from './src/date-picker.vue'
import { createNamespace } from '../../../src/utils/use-namespace.js'

DatePicker.install = (Vue, options = {}) => {
  Vue.component(createNamespace('datePicker', { prefix: options.prefix }), DatePicker)
}

export default DatePicker
