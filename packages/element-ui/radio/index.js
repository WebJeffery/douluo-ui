import Radio from './src/radio.vue'
import { createNamespace } from '../../../src/utils/use-namespace.js'

Radio.install = (Vue, options = {}) => {
  Vue.component(createNamespace('Radio', { prefix: options.prefix }), Radio)
}

export default Radio
