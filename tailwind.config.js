// tailwind.config.js
export const content = ["./src/**/*.{js,jsx,ts,tsx,html}"];
export const theme = {
  extend: {
    animation: {
      "meteor-effect": "meteorEffect 2s linear infinite",
    },
    keyframes: {
      meteorEffect: {
        "0%": { transform: "translate(-50%, -50%) rotate(215deg)", opacity: "1" },
        "50%": { transform: "translate(-50%, -50%) rotate(315deg)", opacity: "0.5" },
        "100%": { transform: "translate(-50%, -50%) rotate(415deg)", opacity: "0" },
      },
    },
  },
};
export const plugins = [];
