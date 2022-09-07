import CheckboxGroup from '../checkbox/src/checkbox-group.vue'
import { createNamespace } from '../../../src/utils/use-namespace'

CheckboxGroup.install = (Vue, options = {}) => {
  Vue.component(createNamespace('CheckboxGroup', { prefix: options.prefix }), CheckboxGroup)
}

export default CheckboxGroup
