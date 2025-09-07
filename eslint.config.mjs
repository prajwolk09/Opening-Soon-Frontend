import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extend from Next.js and TypeScript recommended rules
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Custom config block
  {
    rules: {
      // Disable rule that fails build due to apostrophes in JSX
      "react/no-unescaped-entities": "off",

      // Optional: Disable unused variable warnings (e.g., unused functions like handleEmailClick)
      "@typescript-eslint/no-unused-vars": "off",
    },
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
