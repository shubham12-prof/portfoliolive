import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        // Main Theme
        background: "#050816",
        foreground: "#f8fafc",

        // Cards / Sections
        card: "#0f172a",
        "card-light": "#111c34",

        // Text
        muted: "#94a3b8",

        // Borders
        border: "rgba(148,163,184,0.15)",

        // Primary Neon Accent
        accent: "#8b5cf6",
        "accent-light": "#a78bfa",
        "accent-dark": "#7c3aed",

        // Secondary Accent
        cyan: "#06b6d4",
        pink: "#ec4899",
        green: "#22c55e",

        // Gradient Support
        gradient: {
          from: "#8b5cf6",
          via: "#06b6d4",
          to: "#ec4899",
        },
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      boxShadow: {
        glow: "0 0 25px rgba(139,92,246,0.45)",
        cyan: "0 0 20px rgba(6,182,212,0.35)",
      },

      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 50%, #ec4899 100%)",

        "card-gradient":
          "linear-gradient(145deg, rgba(15,23,42,0.95), rgba(30,41,59,0.85))",

        mesh: "radial-gradient(at 40% 20%, rgba(139,92,246,0.35) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(6,182,212,0.25) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(236,72,153,0.25) 0px, transparent 50%)",
      },

      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2.5s ease-in-out infinite alternate",
        pulseSlow: "pulse 4s infinite",
      },

      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },

        glow: {
          "0%": {
            boxShadow: "0 0 15px rgba(139,92,246,0.3)",
          },
          "100%": {
            boxShadow: "0 0 35px rgba(139,92,246,0.7)",
          },
        },
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },

  plugins: [],
};

export default config;
