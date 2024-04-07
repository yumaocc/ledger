module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'no-var': 2, // 禁用var，用let和const代替
    strict: 2, // 使用严格模式
    'react/react-in-jsx-scope': 'off', // 自 React 17 起，在作用域中不需要引入React
    'react-native/no-unused-styles': 'warn', // 警告未使用的样式
    'react-native/split-platform-components': 'warn', // 当必要时强制使用特定于平台的文件
    'react-hooks/rules-of-hooks': 'error', // 检查Hooks规则
    'react-hooks/exhaustive-deps': 'warn', // 检查effect依赖
    'jsx-quotes': ['error', 'prefer-double'], // 强制在JSX属性中使用双引号
  },
};
