import Pagination from './src/pagination.vue'
import { createNamespace } from '../../../src/utils/use-namespace.js'

Pagination.install = (Vue, options = {}) => {
  Vue.component(createNamespace('Pagination', { prefix: options.prefix }), Pagination)
}

export default Pagination
