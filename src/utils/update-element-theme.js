// 样式资源包
let chalk = ''
// 默认主题
let defaultTheme = '#409EFF'

export const tintColor = (color, tint) => {
  color = color.replace('#', '')
  let red = parseInt(color.slice(0, 2), 16)
  let green = parseInt(color.slice(2, 4), 16)
  let blue = parseInt(color.slice(4, 6), 16)

  if (tint === 0) {
    // when primary color is in its rgb space
    return [red, green, blue].join(',')
  } else {
    red += Math.round(tint * (255 - red))
    green += Math.round(tint * (255 - green))
    blue += Math.round(tint * (255 - blue))

    red = red.toString(16)
    green = green.toString(16)
    blue = blue.toString(16)

    return `#${red}${green}${blue}`
  }
}

export const shadeColor = (color, shade) => {
  let red = parseInt(color.slice(0, 2), 16)
  let green = parseInt(color.slice(2, 4), 16)
  let blue = parseInt(color.slice(4, 6), 16)

  red = Math.round((1 - shade) * red)
  green = Math.round((1 - shade) * green)
  blue = Math.round((1 - shade) * blue)

  red = red.toString(16)
  green = green.toString(16)
  blue = blue.toString(16)

  return `#${red}${green}${blue}`
}

const getThemeCluster = function (theme) {
  const clusters = [theme]
  for (let i = 0; i <= 9; i++) {
    clusters.push(tintColor(theme, Number((i / 10).toFixed(2))))
  }
  clusters.push(shadeColor(theme, 0.1))
  return clusters
}

const getCSSString = function (url) {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        chalk = xhr.responseText.replace(/@font-face{[^}]+}/, '')
        resolve()
      }
    }
    xhr.onerror = (err) => {
      console.error('样式下载失败', err)
    }
    xhr.open('GET', url)
    xhr.send()
  })
}

const updateStyle = function (style, oldCluster, newCluster) {
  let newStyle = style
  oldCluster.forEach((color, index) => {
    newStyle = newStyle.replace(new RegExp(color, 'ig'), newCluster[index])
  })
  return newStyle
}

export const updateElementTheme = async function (options = {}) {
  const {
    version = '2.15.8',
    oldTheme,
    primaryColor,
    appendDom,
    insertBefore,
    cssUrl,
    chalkStyle = 'chalk-style'
  } = options
  if (typeof primaryColor !== 'string') return

  const themeCluster = getThemeCluster(primaryColor.replace('#', ''))
  const originalCluster = getThemeCluster((oldTheme || defaultTheme).replace('#', ''))

  const chalkHandler = (id) => {
    const newStyle = updateStyle(chalk, originalCluster, themeCluster)
    // 覆盖原来的样式
    chalk = newStyle

    let styleTag = document.querySelector(id)
    if (!styleTag) {
      styleTag = document.createElement('style')
      styleTag.setAttribute('id', id)
      if (appendDom) {
        if (insertBefore) {
          appendDom.parentNode.insertBefore(styleTag, appendDom.nextSibling)
        } else {
          appendDom.appendChild(styleTag)
        }
      } else {
        document.head.appendChild(styleTag)
      }
    }
    styleTag.innerText = newStyle
  }

  if (!chalk) {
    const url = cssUrl || `https://unpkg.com/element-ui@${version}/lib/theme-chalk/index.css`
    await getCSSString(url)
  }

  chalkHandler(chalkStyle)
  defaultTheme = primaryColor
}
