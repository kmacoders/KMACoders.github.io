module.exports = {
  extends: [
    'stylelint-config-standard'
  ],
  rules: {
    'at-rule-no-unknown': [true, {
      ignoreAtRules: ['function', 'if', 'else', 'each', 'include', 'mixin', 'return']
    }]
  }
}
