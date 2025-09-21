import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize FlatCompat for backward compatibility
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// ESLint configuration
const eslintConfig = [
  // Extend Next.js and TypeScript configurations
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Customize rules or disable them
  {
    rules: {
      // Example: Disable specific ESLint rules
      "react/react-in-jsx-scope": "off", // React is always in scope in Next.js
      "@next/next/no-img-element": "off", // Allow the use of <img> elements
      "no-unused-vars": ["warn", { varsIgnorePattern: "^_", argsIgnorePattern: "^_" }], // Ignore unused variables prefixed with "_"
    },
  },
];

export default eslintConfig;
