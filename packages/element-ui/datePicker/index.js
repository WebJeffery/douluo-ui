import DatePicker from './src/datePicker.vue'
import { createNamespace } from '../../../src/utils/use-namespace'

DatePicker.install = (Vue, options = {}) => {
  Vue.component(createNamespace('datePicker', { prefix: options.prefix }), DatePicker)
}

export default DatePicker
