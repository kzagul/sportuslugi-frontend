// .eslintrc.js
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  plugins: ["@typescript-eslint"],
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended"],
  rules: {},
};

// module.exports = {
//   root: true,
//   env: {
//     browser: true,
//     es2021: true,
//     node: true,
//   },
//   extends: [
//     "plugin:@typescript-eslint/recommended",
//     "plugin:nuxt/recommended",
//     "plugin:vue/vue3-recommended",
//   ],
//   parserOptions: {
//     ecmaVersion: "latest",
//     parser: "@typescript-eslint/parser",
//     sourceType: "module",
//   },
//   plugins: ["@typescript-eslint"],
//   rules: {
//     'vue/multi-word-component-names': 'off'
//   },
// };
