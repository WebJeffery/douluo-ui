import Tag from './src/tag.vue'
import { createNamespace } from '../../../src/utils/use-namespace.js'

Tag.install = (Vue, options = {}) => {
  Vue.component(createNamespace('tag', { prefix: options.prefix }), Tag)
}

export default Tag
