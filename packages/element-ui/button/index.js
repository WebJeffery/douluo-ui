import Button from './src/button.vue'
import { createNamespace } from '../../../src/utils/use-namespace.js'

Button.install = (Vue, options = {}) => {
  Vue.component(createNamespace('button', { prefix: options.prefix }), Button)
}

export default Button
