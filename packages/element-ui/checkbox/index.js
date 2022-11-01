import Checkbox from './src/checkbox.vue'
import { createNamespace } from '../../../src/utils/use-namespace.js'

Checkbox.install = (Vue, options = {}) => {
  Vue.component(createNamespace('Checkbox', { prefix: options.prefix }), Checkbox)
}

export default Checkbox
