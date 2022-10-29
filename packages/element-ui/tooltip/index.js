import Tooltip from './src/tooltip.vue'
import { createNamespace } from '../../../src/utils/use-namespace.js'

Tooltip.install = (Vue, options = {}) => {
  Vue.component(createNamespace('Tooltip', { prefix: options.prefix }), Tooltip)
}

export default Tooltip
