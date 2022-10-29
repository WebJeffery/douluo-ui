import Form from './src/form.vue'
import { createNamespace } from '../../../src/utils/use-namespace.js'

Form.install = (Vue, options = {}) => {
  Vue.component(createNamespace('Form', { prefix: options.prefix }), Form)
}

export default Form
