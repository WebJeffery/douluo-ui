// .husky/lint-staged.config.js
module.exports = {
  'packages/**.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': ['prettier --write--parser json'],
  'package.json': ['prettier --write'],
  'packages/***.vue': ['eslint --fix', 'prettier --write', 'stylelint --fix'],
  'packages/***.{scss,less,styl,html}': ['stylelint --fix', 'prettier --write'],
};
