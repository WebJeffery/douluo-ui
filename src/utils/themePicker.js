// 样式资源包
let chalk = ''

const getThemeCluster = function (theme) {
  const tintColor = (color, tint) => {
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

  const shadeColor = (color, shade) => {
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

function themeConfigFunc(defaultTheme = '#409EFF') {
  return {
    defaultTheme,
    theme: '',
    updateElementUITheme: async function (options = {}) {
      const { version = '2.15.8', themeColor, appendDom, insertAfter, cssUrl, chalkStyle = 'chalk-style' } = options
      if (typeof themeColor !== 'string') return

      const oldVal = chalk ? this.theme : this.defaultTheme
      const themeCluster = getThemeCluster(themeColor.replace('#', ''))
      const originalCluster = getThemeCluster(oldVal.replace('#', ''))

      const getHandler = (id) => {
        return () => {
          const originalCluster = getThemeCluster(this.defaultTheme.replace('#', ''))
          const newStyle = updateStyle(chalk, originalCluster, themeCluster)

          let styleTag = document.querySelector(id)
          if (!styleTag) {
            styleTag = document.createElement('style')
            styleTag.setAttribute('id', id)
            if (appendDom) {
              if (insertAfter) {
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
      }

      if (!chalk) {
        const url = cssUrl || `https://unpkg.com/element-ui@${version}/lib/theme-chalk/index.css`
        await getCSSString(url)
      }

      const chalkHandler = getHandler(chalkStyle)

      chalkHandler()

      this.theme = themeColor

      const styles = [].slice.call(document.querySelectorAll('style')).filter((style) => {
        const text = style.innerText
        return new RegExp(oldVal, 'i').test(text) && !/Chalk Variables/.test(text)
      })
      styles.forEach((style) => {
        const { innerText } = style
        if (typeof innerText !== 'string') return
        style.innerText = updateStyle(innerText, originalCluster, themeCluster)
      })
    }
  }
}

export { themeConfigFunc }
