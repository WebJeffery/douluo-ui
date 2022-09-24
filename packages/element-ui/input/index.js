import Input from './src/input.vue'
import { createNamespace } from '../../../src/utils/use-namespace'

Input.install = (Vue, options = {}) => {
  Vue.component(createNamespace('Input', { prefix: options.prefix }), Input)
}

export default Input
