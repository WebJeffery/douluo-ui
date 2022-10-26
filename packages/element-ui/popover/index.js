import Popover from './src/popover.vue'
import { createNamespace } from '../../../src/utils/use-namespace'

Popover.install = (Vue, options = {}) => {
  Vue.component(createNamespace('Popover', { prefix: options.prefix }), Popover)
}

export default Popover
