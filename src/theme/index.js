import cssVars from 'css-vars-ponyfill';
import diamond from './src/diamond';
import gold from './src/gold';
import normal from './src/normal';

export function useThemes(mark = 'normal') {
  let variables = Object.assign({}, normal);

  if (mark === 'diamond') {
    variables = Object.assign({}, diamond);
  } else if (mark === 'gold') {
    variables = Object.assign({}, gold,);
  }

  cssVars({
    variables,
    watch: true,
    silent: true,
    onlyLegacy: true,
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
