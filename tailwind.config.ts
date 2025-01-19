import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        violeta: '#7b2cbf',
        morado: '#9d4edd',
        rojo: '#e63946',
        negro: '#1a1a1a',
        gris700: '#374151',
        azul800: '#1e40af',
        gris900:'#111827',
        glassBg: "rgba(17, 25, 40, 0.56)",
        glassBorder: "rgba(255, 255, 255, 0.125)",
        titulo: "#FFFFFF",
        titulo2: "#d1d5db",
        titulo3: "#9ca3af",

      },
    },
  },
  plugins: [],
} satisfies Config;
