/** @type {import("eslint").Linter.Config} */
const config = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  plugins: [
    "react",
    "jsx-a11y",
    "react-hooks",
    "prettier",
    "tailwindcss",
    "@typescript-eslint"
  ],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:tailwindcss/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  rules: {
    "prettier/prettier": "error",
    'no-console': 'error',
    'no-unused-vars': 'off',
    'no-empty-pattern': 'warn',
    "react/jsx-sort-props": "error",
    "react/jsx-curly-brace-presence": "error",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/no-unused-vars': ["error", { "argsIgnorePattern": "^_" }],
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        "prefer": "type-imports",
        "fixStyle": "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-misused-promises": [
      2,
      {
        "checksVoidReturn": { "attributes": false },
      },
    ],
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
  },
};

module.exports = config;
