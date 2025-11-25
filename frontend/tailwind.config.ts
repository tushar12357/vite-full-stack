import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        slate: {
          100: "hsl(var(--slate-100))",
          300: "hsl(var(--slate-300))",
          400: "hsl(var(--slate-400))",
          500: "hsl(var(--slate-500))",
          700: "hsl(var(--slate-700))",
          800: "hsl(var(--slate-800))",
          900: "hsl(var(--slate-900))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "scale-in": "scale-in 0.2s ease-out",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },
      fontSize: {
        // Poppins Desktop Scale: 1200 Minor Third, Base 16px
        'xs': ['12px', { lineHeight: '1.5', letterSpacing: '0' }],      // Small: 12px
        'sm': ['14px', { lineHeight: '1.5', letterSpacing: '0' }],      // Small-Medium
        'base': ['16px', { lineHeight: '1.5', letterSpacing: '0' }],    // Body: 16px
        'lg': ['18px', { lineHeight: '1.5', letterSpacing: '0' }],     // Headings 6: 18px
        'xl': ['20px', { lineHeight: '1.4', letterSpacing: '0' }],     // Large
        '2xl': ['24px', { lineHeight: '1.4', letterSpacing: '0' }],    // Headings 5: 24px
        '3xl': ['28px', { lineHeight: '1.3', letterSpacing: '0' }],    // Headings 4: 28px
        '4xl': ['32px', { lineHeight: '1.3', letterSpacing: '0' }],    // Headings 3: 32px
        '5xl': ['40px', { lineHeight: '1.2', letterSpacing: '0' }],    // Headings 2: 40px
        '6xl': ['48px', { lineHeight: '1.2', letterSpacing: '0' }],     // Headings 1: 48px
        '7xl': ['56px', { lineHeight: '1.1', letterSpacing: '0' }],
        '8xl': ['64px', { lineHeight: '1.1', letterSpacing: '0' }],
        '9xl': ['72px', { lineHeight: '1', letterSpacing: '0' }],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
