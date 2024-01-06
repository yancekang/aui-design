module.exports = {
  extends: require.resolve('@umijs/lint/dist/config/eslint'),
  rules: {
    //可配置一些自己的规则
    'no-console': 0,
    // 忽略定义未使用
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    //如果您不希望this在类或类对象之外收到关于关键字使用情况的通知，则可以安全地禁用此规则。
    '@typescript-eslint/no-invalid-this': 'off',
    //
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false,
        },
      },
    ],
  },
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
    REACT_APP_ENV: true,
  },
};
