import Popover from './src/popover.vue'
import { createNamespace } from '../../../src/utils/use-namespace.js'

Popover.install = (Vue, options = {}) => {
  Vue.component(createNamespace('Popover', { prefix: options.prefix }), Popover)
}

export default Popover
