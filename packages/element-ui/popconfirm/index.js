import Popconfirm from './src/popconfirm.vue'
import { createNamespace } from '../../../src/utils/use-namespace'

Popconfirm.install = (Vue, options = {}) => {
  Vue.component(createNamespace('Popconfirm', { prefix: options.prefix }), Popconfirm)
}

export default Popconfirm
