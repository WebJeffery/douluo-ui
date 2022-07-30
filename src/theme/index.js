import cssVars from 'css-vars-ponyfill';
import { assign, omit } from 'lodash';

const requireTheme = require.context('./src', false, /\.js$/);
// 导入 主题
const themes = {};

requireTheme.keys().forEach((fName) => {
  // 获取主题配置
  const themeConfig = requireTheme(fName);
  // 获取主题名称
  const cName = fName.replace(/^.*\/(.+)\.js$/, '$1');

  themes[cName] = themeConfig.default || themeConfig;
});

export function useThemes(mark = 'normal', options = {}, customThemes = {}) {
  let variables = assign({}, themes.normal, customThemes.normal);

  if (themes[mark]) {
    variables = assign({}, themes[mark], customThemes[mark]);
  }

  cssVars({
    variables,
    watch: true,
    silent: true,
    onlyLegacy: true,
    ...omit(options, ['variables'])
  });
}

/**
 * @description 8位颜色Hex码 定义颜色透明度
 * @param {string} color
 * @param {number} alpha 0 - 1 透明度
 */
export function colorPalette(color, alpha) {
  alpha = Math.round(alpha * 100) / 100;
  alpha = Math.round(alpha * 255);

  let hex = (alpha + 0x10000).toString(16).substr(-2).toLocaleLowerCase();

  return `${color}${hex}`;
}
