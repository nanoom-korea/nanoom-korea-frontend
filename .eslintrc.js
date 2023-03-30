module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "no-unused-vars": ["error", { vars: "all", args: "none" }],
    "no-console": "warn",
    "react-hooks/exhaustive-deps": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
