import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      rotate: {
        "-15": "-15deg",
      },
      colors: {
        app: {
          blue: {
            "50": "#E6F3F9",
            "100": "#B0D9EC",
            "200": "#8AC7E2",
            "300": "#54ADD5",
            "400": "#339DCD",
            "500": "#0085C1",
            "600": "#0079B0",
            "700": "#005E89",
            "900": "#00283A",
          },
          "dark-blue": {
            "500": "#003EA7",
            "600": "#262498",
            "900": "#100F40",
          },
          violet: {
            "400": "#75529A",
            "500": "#522781",
            "800": "#2D1547",
          },
          yellow: {
            "500": "#FFEB66",
            "900": "#4F4A27",
          },
          orange: {
            "400": "#F98167",
            "500": "#F86241",
          },
          green: {
            "500": "#54c100",
          },
          neutral: {
            "5": "#FAFAFA",
            "10": "#F5F5F5",
            "50": "#E6E8EC",
            "100": "#B0B7C4",
            "200": "#8A95A7",
            "300": "#54647F",
            "400": "#334666",
            "600": "#00163A",
            "700": "#00112D",
            "900": "#000A1B",
          },
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        roboto: ["var(--font-roboto)", "sans-serif"],
        anton: ["var(--font-anton)", "sans-serif"],
        kalam: ["var(--font-kalam)", "cursive"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      maxWidth: {
        "1440": "90rem",
        container: "1360px",
      },
      boxShadow: {
        custom:
          "-36px 74px 23px 0px rgba(28, 28, 28, 0.00), -23px 47px 21px 0px rgba(28, 28, 28, 0.01), -13px 27px 18px 0px rgba(28, 28, 28, 0.05), -6px 12px 13px 0px rgba(28, 28, 28, 0.09), -1px 3px 7px 0px rgba(28, 28, 28, 0.10)",
      },
      animation: {
        "spin-reverse": "spin-reverse 15s linear infinite",
        ripple: "ripple 3s infinite",
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
        "slow-ping": "slow-ping 4s infinite",
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        "spin-reverse": {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(-360deg)",
          },
        },
        ripple: {
          "0%": {
            transform: "scale(1)",
            opacity: "0.4",
          },
          "100%": {
            transform: "scale(2.5)",
            opacity: "0",
          },
        },
        "slow-ping": {
          "0%": {
            transform: "scale(1)",
            opacity: "0.2",
          },
          "50%": {
            transform: "scale(2.5)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "0.2",
          },
        },
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
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
