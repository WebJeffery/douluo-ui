import Select from './src/select.vue'
import { createNamespace } from '../../../src/utils/use-namespace.js'

Select.install = (Vue, options = {}) => {
  Vue.component(createNamespace('Select', { prefix: options.prefix }), Select)
}

export default Select
