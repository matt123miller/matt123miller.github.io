/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 2s linear infinite",
        "lerp-colour": "lerp-colour",
        "spin-logo": "lerp-colour, spin 2s linear infinite",
      },
      typography: ({ theme }) => {
        return {
          dracula: {
            css: {
              "--tw-prose-body": "hsl(var(--tw-dracula-foreground))",
              "--tw-prose-headings": "hsl(var(--tw-dracula-pink))",
              // "--tw-prose-lead": theme("colors.pink[700]"),
              "--tw-prose-links": "hsl(var(--tw-dracula-cyan))",
              // "--tw-prose-bold": theme("colors.pink[900]"),
              "--tw-prose-counters": "hsl(var(--tw-dracula-green))",
              "--tw-prose-bullets": "hsl(var(--tw-dracula-green))",
              "--tw-prose-hr": "hsl(var(--tw-dracula-pink))",
              // "--tw-prose-quotes": theme("colors.pink[900]"),
              // "--tw-prose-quote-borders": theme("colors.pink[300]"),
              // "--tw-prose-code": theme("colors.pink[900]"),
              // "--tw-prose-pre-code": theme("colors.pink[100]"),
              // "--tw-prose-pre-bg": theme("colors.pink[900]"),
              // "--tw-prose-th-borders": theme("colors.pink[300]"),
              // "--tw-prose-td-borders": theme("colors.pink[200]"),
            },
          },
        };
      },
    },
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      background: "hsl(var(--tw-dracula-background) / <alpha-value>)",
      foreground: "hsl(var(--tw-dracula-foreground) / <alpha-value>)",
      selection: "hsl(var(--tw-dracula-selection) / <alpha-value>)",
      comment: "hsl(var(--tw-dracula-comment) / <alpha-value>)",
      red: "hsl(var(--tw-dracula-red) / <alpha-value>)",
      orange: "hsl(var(--tw-dracula-orange) / <alpha-value>)",
      yellow: "hsl(var(--tw-dracula-yellow) / <alpha-value>)",
      green: "hsl(var(--tw-dracula-green) / <alpha-value>)",
      purple: "hsl(var(--tw-dracula-purple) / <alpha-value>)",
      cyan: "hsl(var(--tw-dracula-cyan) / <alpha-value>)",
      pink: "hsl(var(--tw-dracula-pink) / <alpha-value>)",

      "body-text": "hsl(var(--tw-dracula-foreground) / <alpha-value>)",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

/**
    --dracula-background: #282a36;
    --dracula-foreground: #f8f8f2;
    --dracula-selection: #44475a;
    --dracula-comment: #6272a4;
    --dracula-red: #ff5555;
    --dracula-orange: #ffb86c;
    --dracula-yellow: #f1fa8c;
    --dracula-green: #50fa7b;
    --dracula-purple: #bd93f9;
    --dracula-cyan: #8be9fd;
    --dracula-pink: #ff79c6;
 */
