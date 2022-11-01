import Icon from './src/icon.vue'
import { createNamespace } from '../../../src/utils/use-namespace.js'

Icon.install = (Vue, options = {}) => {
  Vue.component(createNamespace('icon', { prefix: options.prefix }), Icon)
}

export default Icon
