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

// 默认主题
const themeColor = {
    // basic
    '--color-primary': '#632cd5',
    '--app-default-color': '#333',

    // hover
    '$--color-primary-hover': colorPalette('#632cd5', 0.1),
    '--app-info-color-hover': '#409eff14',
    // bg
    '--app-primary-bg-hover': colorPalette('#632cd5', 0.08)
}

export default {
    ...themeColor,

    // 按钮
    '--btn-primary-color': '#fff',
    '--btn-primary-ghost-color': themeColor['$--color-primary'],
    '--btn-primary-plain-color': themeColor['$--color-primary'],

    '--btn-primary-bg': themeColor['$--color-primary'],
    '--btn-primary-plain-bg': colorPalette(themeColor['$--color-primary'], 0.1),

    '--btn-primary-border-color': themeColor['$--color-primary'],
    '--btn-primary-ghost-border-color': colorPalette(themeColor['$--color-primary'], 0.4),

    // 导航
    '--tabs-highlight-color': themeColor['$--color-primary'],

    // 输入框
    '--input-hover-border-color': themeColor['$--color-primary'],

    // 多选框
    '--checkbox-check-bg': themeColor['$--color-primary'],
    '--radio-button-color': '#fff',
    '--radio-button-bg': themeColor['$--color-primary'],
    '--radio-button-hover-color': themeColor['$--color-primary'],

    // 分页
    '--pagination-caret-reverse': themeColor['$--color-primary'],
    '--pagination-item-bg-active': themeColor['$--color-primary'],
    '--pagination-item-hover-color': themeColor['$--color-primary'],
    '--pagination-dropdown-hover-bg': themeColor['$--color-primary-hover'],
    '--pagination-dropdown-hover-color': themeColor['$--color-primary'],
    '--pagination-dropdown-selected-color': themeColor['$--color-primary'],

    // 单选框
    '--radio-check-bg': themeColor['$--color-primary'],
}
