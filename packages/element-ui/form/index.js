import Form from './src/form.vue'
import { createNamespace } from '../../../src/utils/use-namespace'

Form.install = (Vue, options = {}) => {
  Vue.component(createNamespace('Form', { prefix: options.prefix }), Form)
}

export default Form
