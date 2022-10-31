import {
  updateElementTheme,
  tintColor
} from './update-element-theme.js'
import { cssNamespace } from './use-namespace.js'

export const updateUITheme = async function (options) {
  const {
    oldTheme = '#409EFF',
    primaryColor,
    primarySecondColor,
    opacity = 0.7,
    button = {
      disabledFontColorPrimary: '#fff',
      disabledBgColorPrimary: '#ccc',
      disabledFontColorPlain: '#999',
      disabledBgColorPlain: '#f5f5f5',
      disabledFontColorGhost: '#999',
      disabledBorderColorGhost: '#ccc',
    }
  } = options
  if (!primaryColor) return

  await updateElementTheme({
    oldTheme,
    primaryColor: primaryColor
  })

  // const primaryOpc = colorPalette(primary, opacity)
  // 第二种主题透明

  const primarySecOpc = primarySecondColor ? tintColor(primarySecondColor, Number((1 - opacity).toFixed(2))) : ''
  // const primaryDis = colorPalette(primary, disOpacity)
  // const primarySecDis = colorPalette(primarySecondColor, disOpacity)
  const primaryLightColors = []

  const el = document.documentElement
  el.style.setProperty(`--${cssNamespace}-color-primary`, primaryColor)
  for (let i = 1; i <= 9; i++) {
    const color = tintColor(primaryColor, Number((0.1 * i).toFixed(2)))
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

  const buttonTheme = {
    primary: {
      'button-font-color': primarySecondColor ? primaryColor : '#fff',
      'button-bg-color': primarySecondColor ? primarySecondColor : primaryColor,
      'button-hover-font-color': primarySecondColor ? primaryColor : '#fff',
      'button-hover-bg-color': primarySecondColor ? primarySecOpc : primaryLightColors[1],
      'button-active-font-color': primarySecondColor ? primaryColor : '#fff',
      'button-active-bg-color': primarySecondColor ? primarySecondColor : primaryColor
    },
    plain: {
      'button-font-color-primary': primarySecondColor ? primarySecondColor : primaryColor,
      'button-bg-color-primary': primarySecondColor ? primaryLightColors[3] : primaryLightColors[7],
      'button-hover-font-color-primary': primarySecondColor ? primarySecondColor : primaryColor,
      'button-hover-bg-color-primary': primarySecondColor ? primaryLightColors[4] : primaryLightColors[7],
      'button-active-font-color-primary': primarySecondColor ? primarySecondColor : primaryColor,
      'button-active-bg-color-primary': primarySecondColor ? primaryLightColors[3] : primaryLightColors[7],
    },
  }
  Object.keys(buttonTheme).forEach(type => {
    const item = buttonTheme[type]
    Object.keys(item).forEach(property => {
      el.style.setProperty(`--${cssNamespace}-${property}-${type}`, item[property])
    })
  })
}
