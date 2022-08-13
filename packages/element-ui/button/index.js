import _default from "./src/button.vue";
import { createNamespace } from "../../../src/utils/use-namespace";

_default.install = (Vue, options = {}) => {
  Vue.component(createNamespace("button", { prefix: options.prefix }), _default);
};

export default _default;
