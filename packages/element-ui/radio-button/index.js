import RadioButton from '../radio/src/radio-button.vue'
import { createNamespace } from '../../../src/utils/use-namespace.js'

RadioButton.install = (Vue, options = {}) => {
  Vue.component(createNamespace('RadioButton', { prefix: options.prefix }), RadioButton)
}

export default RadioButton
