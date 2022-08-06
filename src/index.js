import { createNamespace } from './utils/create';
import { getThemeConfigFunc } from './utils/themePicker';
import { useThemes } from './theme/index';
import components from './ui/index'

const install = (Vue, options = {}) => {
  // 判断是否安装
  if (install.installed) return;
  install.installed = true;

  components.forEach(component => {
    Vue.component(createNamespace(component.name, { prefix: options.prefix }), component);
  });

  useThemes()
};

// 判断调用vue加载器，实现全局加载
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

// Vue.use 和按需加载都可以
export default {
  install,
  useThemes,
  getThemeConfigFunc,
  ...components
};
