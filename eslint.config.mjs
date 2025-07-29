import eslintPluginImport from "eslint-plugin-import";
import js from "@eslint/js";
import path from "node:path";
import prettier from "eslint-plugin-prettier";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "node:url";

const compat = new FlatCompat({
  allConfig: js.configs.all,
  baseDirectory: path.dirname(fileURLToPath(import.meta.url)),
  recommendedConfig: js.configs.recommended,
});

const config = [
  {
    ignores: ["**/*.generated.ts", "internals/*"],
  },
  ...compat.extends("next/core-web-vitals", "prettier", "next/typescript"),
  {
    plugins: {
      prettier,
      "@typescript-eslint": typescriptEslint,
      import: eslintPluginImport,
    },

    rules: {
      "prettier/prettier": "error",
      "func-style": ["error", "declaration"],
      "import/no-namespace": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "react/prefer-read-only-props": "error",
    },
  },

  // Prevent e2e imports outside of e2e directory
  {
    files: ["src/**/*.ts", "src/**/*.tsx"],
    ignores: ["src/e2e/**"],
    rules: {
      "import/no-restricted-paths": [
        "error",
        {
          zones: [
            {
              target: "./src",
              from: "./src/e2e",
              message:
                "Test utilities from e2e directory should not be imported outside of e2e tests",
            },
          ],
        },
      ],
    },
  },
];

export default config;
