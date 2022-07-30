import _default from "./src/index.vue";
import { createNamespace } from "../../../src/utils/create";

_default.install = (Vue, options = {}) => {
  Vue.component(createNamespace("checkbox", { prefix: options.prefix }), _default);
};

export default _default;
