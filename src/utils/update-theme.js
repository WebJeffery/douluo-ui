import { themeConfigFunc } from './themePicker'
import { cssNamespace } from './use-namespace'

/**
 * @description 8位颜色Hex码 定义颜色透明度
 * @param {string} color
 * @param {number} alpha 0 - 1 透明度
 */
 export function colorPalette(color, alpha) {
  alpha = Math.round(alpha * 100) / 100
  alpha = Math.round(alpha * 255)

  let hex = (alpha + 0x10000).toString(16).substr(-2).toLocaleLowerCase()

  return `${color}${hex}`
}

export const updateTheme = async function (options) {
  const {
    primary,
    primarySecond,
    opacity = 0.7,
    disOpacity = 0.5,
    button = {
      disabledFontColorPrimary: '#fff',
      disabledBgColorPrimary: '#ccc',
      disabledFontColorPlain: '#999',
      disabledBgColorPlain: '#f5f5f5',
      disabledFontColorGhost: '#999',
      disabledBorderColorGhost: '#ccc',
    }
  } = options
  if (!primary) return

  const el = document.documentElement
  const themeConfig = themeConfigFunc()
  await themeConfig.updateElementUITheme({ themeColor: primary })

  // const primaryOpc = colorPalette(primary, opacity)
  const primarySecOpc = colorPalette(primarySecond, opacity)
  // const primaryDis = colorPalette(primary, disOpacity)
  // const primarySecDis = colorPalette(primarySecond, disOpacity)
  const primaryLightColors = []

  el.style.setProperty(`--${cssNamespace}-color-primary`, primary)
  for (let i = 1; i <= 9; i++) {
    const color = colorPalette(primary, 0.1 * (10-i))
    primaryLightColors.push(color)
    el.style.setProperty(`--${cssNamespace}-color-primary-light-${i}`, color)
  }

  // disabled primary
  el.style.setProperty(`--${cssNamespace}-button-disabled-font-color-primary`, button.disabledFontColorPrimary)
  el.style.setProperty(`--${cssNamespace}-button-disabled-bg-color-primary`, button.disabledBgColorPrimary)
  el.style.setProperty(`--${cssNamespace}-button-disabled-border-color-primary`, button.disabledBgColorPrimary)
  // plain
  el.style.setProperty(`--${cssNamespace}-button-disabled-font-color-primary-plain`, button.disabledFontColorPlain)
  el.style.setProperty(`--${cssNamespace}-button-disabled-bg-color-primary-plain`, button.disabledBgColorPlain)
  // ghost
  el.style.setProperty(`--${cssNamespace}-button-disabled-font-color-primary-ghost`, button.disabledFontColorGhost)
  el.style.setProperty(`--${cssNamespace}-button-disabled-border-color-primary-ghost`, button.disabledBorderColorGhost)

  // 两种主题
  if (primarySecond) {
    // primary
    el.style.setProperty(`--${cssNamespace}-button-font-color-primary`, primary)
    el.style.setProperty(`--${cssNamespace}-button-bg-color-primary`, primarySecond)
    el.style.setProperty(`--${cssNamespace}-button-hover-font-color-primary`, primary)
    el.style.setProperty(`--${cssNamespace}-button-hover-bg-color-primary`, primarySecOpc)
    el.style.setProperty(`--${cssNamespace}-button-active-font-color-primary`, primary)
    el.style.setProperty(`--${cssNamespace}-button-active-bg-color-primary`, primarySecond)
    // plain
    el.style.setProperty(`--${cssNamespace}-button-font-color-primary-plain`, primarySecond)
    el.style.setProperty(`--${cssNamespace}-button-bg-color-primary-plain`, primaryLightColors[7])
    el.style.setProperty(`--${cssNamespace}-button-hover-font-color-primary-plain`, primarySecond)
    el.style.setProperty(`--${cssNamespace}-button-hover-bg-color-primary-plain`, primaryLightColors[8])
    el.style.setProperty(`--${cssNamespace}-button-active-font-color-primary-plain`, primarySecond)
    el.style.setProperty(`--${cssNamespace}-button-active-bg-color-primary-plain`, primaryLightColors[7])
  }
}
