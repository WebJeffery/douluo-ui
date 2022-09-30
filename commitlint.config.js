module.exports = {
  ignores: [(commit) => commit.includes('init')],
  // extends: ['@commitlint/config-conventional', 'cz'],
  extends: ['gitmoji'],
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 108],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'subject-case': [0],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        ':sparkles: feat',
        'fix',
        'perf',
        'style',
        'docs',
        'test',
        'refactor',
        'build',
        'ci',
        ':construction_worker: ci',
        'chore',
        'revert',
        'wip',
        'workflow',
        'types',
        'release'
      ]
      // [
      //   'feat',
      //   'fix',nvm 
      //   'perf',
      //   'style',
      //   'docs',
      //   'test',
      //   'refactor',
      //   'build',
      //   'ci',
      //   'chore',
      //   'revert',
      //   'wip',
      //   'workflow',
      //   'types',
      //   'release'
      // ]
    ]
  }
}
