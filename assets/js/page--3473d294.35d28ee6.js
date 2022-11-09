(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{672:function(t,s,a){"use strict";a.r(s);var e=["$--font-size-extra-large","$--font-size-large","$--font-size-medium","$--font-size-base","$--font-size-small","$--font-size-extra-small"],n={font_size_extra_large:"20px",font_size_large:"18px",font_size_medium:"16px",font_size_base:"14px",font_size_small:"13px",font_size_extra_small:"12px"},r={created:function(){},mounted:function(){this.setGlobal()},methods:{tintColor:function(t){function s(s,a){return t.apply(this,arguments)}return s.toString=function(){return t.toString()},s}((function(t,s){return tintColor(t,s)})),setGlobal:function(){window.userThemeConfig&&(this.global=window.userThemeConfig.global)}},data:function(){return{global:{},font_size_extra_large:"",font_size_large:"",font_size_medium:"",font_size_base:"",font_size_small:"",font_size_extra_small:""}},watch:{global:{immediate:!0,handler:function(t){var s=this;e.forEach((function(a){var e=a.replace("$--","").replace(/-/g,"_");t[a]?s[e]=t[a]:s[e]=n[e]}))}}}},_=a(0),i=Object(_.a)(r,(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"typography-字体"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typography-字体"}},[t._v("#")]),t._v(" Typography 字体")]),t._v(" "),s("p",[t._v("我们对字体进行统一规范，力求在各个操作系统下都有最佳展示效果。")]),t._v(" "),s("h3",{attrs:{id:"字体"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字体"}},[t._v("#")]),t._v(" 字体")]),t._v(" "),s("div",{staticClass:"demo-term-box"}),t._v(" "),s("h3",{attrs:{id:"字号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字号"}},[t._v("#")]),t._v(" 字号")]),t._v(" "),s("table",{staticClass:"demo-typo-size"},[s("tbody",[s("tr",[s("td",[t._v("层级")]),t._v(" "),s("td",[t._v("字体大小")]),t._v(" "),s("td",{staticClass:"color-dark-light"},[t._v("举例")])]),t._v(" "),s("tr",{style:{fontSize:t.font_size_extra_small}},[s("td",[t._v("辅助文字")]),t._v(" "),s("td",{staticClass:"color-dark-light"},[t._v(t._s(t.font_size_extra_small)+" Extra Small")]),t._v(" "),s("td",[t._v("用 Element 快速搭建页面")])]),t._v(" "),s("tr",{style:{fontSize:t.font_size_small}},[s("td",[t._v("正文（小）")]),t._v(" "),s("td",{staticClass:"color-dark-light"},[t._v(t._s(t.font_size_small)+" Small")]),t._v(" "),s("td",[t._v("用 Element 快速搭建页面")])]),t._v(" "),s("tr",{style:{fontSize:t.font_size_base}},[s("td",[t._v("正文")]),t._v(" "),s("td",{staticClass:"color-dark-light"},[t._v(t._s(t.font_size_base)+" Base")]),t._v(" "),s("td",[t._v("用 Element 快速搭建页面")])]),t._v(" "),s("tr",{style:{fontSize:t.font_size_medium}},[s("td",[t._v("小标题")]),t._v(" "),s("td",{staticClass:"color-dark-light"},[t._v(t._s(t.font_size_medium)+" Medium")]),t._v(" "),s("td",[t._v("用 Element 快速搭建页面")])]),t._v(" "),s("tr",{style:{fontSize:t.font_size_large}},[s("td",[t._v("标题")]),t._v(" "),s("td",{staticClass:"color-dark-light"},[t._v(t._s(t.font_size_large)+" large")]),t._v(" "),s("td",[t._v("用 Element 快速搭建页面")])]),t._v(" "),s("tr",{style:{fontSize:t.font_size_extra_large}},[s("td",[t._v("主标题")]),t._v(" "),s("td",{staticClass:"color-dark-light"},[t._v(t._s(t.font_size_extra_large)+" Extra large")]),t._v(" "),s("td",[t._v("用 Element 快速搭建页面")])])])]),t._v(" "),s("h3",{attrs:{id:"行高"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#行高"}},[t._v("#")]),t._v(" 行高")]),t._v(" "),s("div",[s("ul",{staticClass:"lineH-right"},[s("li",[t._v("line-height:1 "),s("span",[t._v("无行高")])]),t._v(" "),s("li",[t._v("line-height:1.3 "),s("span",[t._v("紧凑")])]),t._v(" "),s("li",[t._v("line-height:1.5 "),s("span",[t._v("常规")])]),t._v(" "),s("li",[t._v("line-height:1.7 "),s("span",[t._v("宽松")])])])]),t._v(" "),s("h3",{attrs:{id:"font-family-代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#font-family-代码"}},[t._v("#")]),t._v(" Font-family 代码")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Helvetica Neue"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Helvetica"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PingFang SC"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hiragino Sans GB"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Microsoft YaHei"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"微软雅黑"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Arial"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("sans-serif"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])}),[],!1,null,null,null);s.default=i.exports}}]);