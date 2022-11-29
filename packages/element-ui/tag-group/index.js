import TagGroup from '../tag/src/tag-group.vue'
import { createNamespace } from '../../../src/utils/use-namespace.js'

TagGroup.install = (Vue, options = {}) => {
  Vue.component(createNamespace('TagGroup', { prefix: options.prefix }), TagGroup)
}

export default TagGroup
