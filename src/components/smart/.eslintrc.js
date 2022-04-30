 module.exports = {
    extends: '../../../.eslintrc.json',
    rules: {
      'no-restricted-imports': [
        'error',
        {
          paths: [{
            name: 'styled-components',
            message: 'Styled components should only be in components/dumb'
          }]
        }
      ],
      'react/forbid-component-props': [2, { forbid: ['style'] }],
      'react/forbid-dom-props': [2, { forbid: ['style'] }]
    }
  }
  