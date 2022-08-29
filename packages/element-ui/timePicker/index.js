import TimePicker from './src/timePicker.vue'
import { createNamespace } from '../../../src/utils/use-namespace'

TimePicker.install = (Vue, options = {}) => {
  Vue.component(createNamespace('timePicker', { prefix: options.prefix }), TimePicker)
}

export default TimePicker
