import { createNamespace } from './utils/create';
import { getThemeConfigFunc } from './utils/themePicker.js';
import { useThemes } from './theme/';

// 自动导入 全部 组件
const requireComponent = require.context('../packages/element-ui', true, /\.\/.+\/index\.js$/);

const components = {};

requireComponent.keys().forEach((fName) => {
  // // 获取组件配置
  const componentConfig = requireComponent(fName);

  const [, name] = fName.match(/^.*\/(.*)\/index.js$/i);

  // // 注册组件
  components[name] = componentConfig.default;
});

const install = (Vue, options = {}) => {
  // 判断是否安装
  if (install.installed) return;
  install.installed = true;

  // 遍历组件列表，将组件注入进vue组件中
  Object.entries(components).forEach(([key, value]) => {
    Vue.component(createNamespace(key, { prefix: options.prefix }), value);
  });
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
