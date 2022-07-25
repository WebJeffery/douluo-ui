import Card from './card';
import Button from './button';
// 整体打包时需要引入全量的 scss
import './theme/index.scss';

const components = [Card, Button];

const install = function (Vue) {
  // 批量注册组件
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window.Vue !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  // 暴露方法
  install,
  // 组件
  Card,
  Button
};
