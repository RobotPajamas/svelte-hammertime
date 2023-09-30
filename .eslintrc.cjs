module.exports = {
  root: true,
  plugins: ["@typescript-eslint", "testing-library"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:svelte/recommended",
    "prettier",
  ],
  ignorePatterns: ["*.cjs"],
  overrides: [
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    extraFileExtensions: [".svelte"],
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  rules: {
    "svelte/infinite-reactive-loop": "error",
    "svelte/no-reactive-functions": "error",
    "svelte/no-reactive-literals": "error",
    "svelte/no-useless-mustaches": "error",

    // These are rules that we probably want to enable, but need to be fixed first.
    // "svelte/no-reactive-reassign": "error",
    // "svelte/no-target-blank": "error",
    // "svelte/button-has-type": "error",
    // "svelte/no-immutable-reactive-statements": "error",

    // These are ones to read into a bit more, and see if we want to enable.
    // "svelte/valid-prop-names-in-kit-pages": "error"
    // "svelte/prefer-destructured-store-props": "error",
    // "svelte/require-event-dispatcher-types": "error",
  },
};
