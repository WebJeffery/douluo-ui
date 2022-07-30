import Vue from 'vue';
import ElementUI from 'element-ui';
import hljs from 'highlight.js';
import 'highlight.js/styles/a11y-dark.css';
// import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import DouluoUI from '../src';
import router from './router';
import demoBlock from './components/demo-block.vue';
import ShowMark from './components/ShowMark';

Vue.component('demo-block', demoBlock);
Vue.component('ShowMark', ShowMark);

router.afterEach(() => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
});

Vue.use(DouluoUI);

DouluoUI.useThemes('diamond');

Vue.use(ElementUI);
Vue.config.productionTip = false;


const initApp = async function () {

  const themeConfig = DouluoUI.getThemeConfigFunc()
  await themeConfig.updateElementUITheme({ themeColor: '#632cd5' })
  new Vue({
    router,
    render: (h) => h(App)
  }).$mount('#app');
}

initApp()
