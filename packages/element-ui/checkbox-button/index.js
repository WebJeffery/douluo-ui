import CheckboxButton from '../checkbox/src/checkbox-button.vue'
import { createNamespace } from '../../../src/utils/use-namespace.js'

CheckboxButton.install = (Vue, options = {}) => {
  Vue.component(createNamespace('CheckboxButton', { prefix: options.prefix }), CheckboxButton)
}

export default CheckboxButton
