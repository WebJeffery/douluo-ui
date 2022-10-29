import TimePicker from './src/time-picker.vue'
import { createNamespace } from '../../../src/utils/use-namespace.js'

TimePicker.install = (Vue, options = {}) => {
  Vue.component(createNamespace('TimePicker', { prefix: options.prefix }), TimePicker)
}

export default TimePicker
