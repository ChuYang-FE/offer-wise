import js from "@eslint/js";
import { globalIgnores } from "eslint/config";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tailwind from "eslint-plugin-tailwindcss";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(globalIgnores(["dist"]), {
  extends: [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    ...tailwind.configs["flat/recommended"],
  ],
  files: ["**/*.{ts,tsx,js,jsx}"],
  languageOptions: {
    ecmaVersion: "latest",
    globals: globals.browser,
  },
  plugins: {
    "react-hooks": reactHooks,
    "react-refresh": reactRefresh,
    "simple-import-sort": simpleImportSort,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-unused-vars": "warn",
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
  },
});
