const md = require('markdown-it')(); // 引入markdown-it
const { slugify } = require('transliteration'); // 引入transliteration中的slugify方法
const markdownItAnchor = require('markdown-it-anchor');
const markdownItContainer = require('markdown-it-container');

module.exports = {
  raw: true,
  preventExtract: true, // 这个加载器将自动从html令牌内容中提取脚本和样式标签
  // 定义处理规则， 关于规则，可以参考这里 https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js  这里有很多默认定制的规则，可参照修改
  preprocess: (MarkdownIt, source) => {
    const mditRender = Object.prototype.hasOwnProperty.call(MarkdownIt, 'renderer') ? MarkdownIt.renderer : {};
    // 对于markdown中的table,  table_open 是开标签，对应还有 table_close
    mditRender.rules.table_open = () => '<table class="doctable">';
    // 对于代码块去除v - pre, 添加高亮样式;
    const defaultRender = md.renderer.rules.fence;
    mditRender.rules.fence = (
      tokens,
      idx,
      options,
      env,
      self,
    ) => {
      const token = tokens[idx];
      // 判断该 fence 是否在 :::demo 内
      const prevToken = tokens[idx - 1];
      const isInDemoContainer = prevToken
                && prevToken.nesting === 1
                && prevToken.info.trim().match(/^demo\s*(.*)$/);
      if (token.info === 'html' && isInDemoContainer) {
        return `<template slot="highlight"><pre v-pre><code class="html">${md.utils.escapeHtml(
          token.content,
        )}</code></pre></template>`;
      }
      return defaultRender(tokens, idx, options, env, self);
    };
    return source;
  },
  use: [
    // 标题锚点
    [
      markdownItAnchor,
      {
        level: 2, // 添加超链接锚点的最小标题级别, 如: #标题 不会添加锚点
        slugify, // 自定义slugify, 我们使用的是将中文转为汉语拼音,最终生成为标题id属性
        permalink: true, // 开启标题锚点功能
        permalinkBefore: true, // 在标题前创建锚点
      },
    ],
    // :::demo ****
    //
    // :::
    // 匹配:::后面的内容 nesting == 1,说明:::demo 后面有内容
    // m为数组,m[1]表示 ****
    [
      markdownItContainer,
      'demo',
      {
        validate(params) {
          return params.trim().match(/^demo\s*(.*)$/);
        },

        render(tokens, idx) {
          const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
          if (tokens[idx].nesting === 1) {
            //
            const description = m && m.length > 1 ? m[1] : ''; // 获取正则捕获组中的描述内容,即::: demo xxx中的xxx
            const content = tokens[idx + 1].type === 'fence'
              ? tokens[idx + 1].content
              : '';

            return `<demo-block>
                <div slot="source">${content}</div>
                ${description ? `<div>${md.render(description)}</div>` : ''}
                `;
          }
          return '</demo-block>';
        },
      },
    ],
    [markdownItContainer, 'tip'],
    [markdownItContainer, 'warning'],
  ],
};
