import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
           animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",

      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
          
        },
      },

    },
  },
  plugins: [addVariablesForColors],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
function flattenColorPalette(colors: any) {
  const result: Record<string, string> = {};

  function recurse(obj: any, prefix = '') {
    for (const key in obj) {
      const value = obj[key];
      const newKey = prefix ? `${prefix}-${key}` : key;
      if (typeof value === 'object' && value !== null) {
        recurse(value, newKey);
      } else {
        result[newKey] = value;
      }
    }
  }

  recurse(colors);
  return result;
}

