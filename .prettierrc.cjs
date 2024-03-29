module.exports = {
  bracketSameLine: true,
  overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
  plugins: ["prettier-plugin-svelte", "prettier-plugin-organize-imports"],
  organizeImportsSkipDestructiveCodeActions: true,
  printWidth: 100,
  tabWidth: 2,
  trailingComma: "es5",
};
