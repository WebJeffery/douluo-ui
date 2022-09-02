import RadioGroup from '../radio/src/radio-group.vue'
import { createNamespace } from '../../../src/utils/use-namespace'

RadioGroup.install = (Vue, options = {}) => {
  Vue.component(createNamespace('RadioGroup', { prefix: options.prefix }), RadioGroup)
}

export default RadioGroup
