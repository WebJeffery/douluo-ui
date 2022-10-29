import FormItem from '../form/src/form-item.vue'
import { createNamespace } from '../../../src/utils/use-namespace.js'

FormItem.install = (Vue, options = {}) => {
  Vue.component(createNamespace('FormItem', { prefix: options.prefix }), FormItem)
}

export default FormItem
