import { purple } from "@mui/material/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./asset/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "custom-purple-transparent": "rgba(100, 61, 255, 0.05)",
        "white-opacity-20": "rgba(255, 255, 255, 0.20)",
      },
      backgroundImage: {
        "gradient-to-b-custom":
          "linear-gradient(180deg, #A7FFA7 0%, #00D300 100%)",
        "custom-gradient":
          "linear-gradient(93deg, #97FF98 32.88%, #FB96FF 51.47%, #AB96FF 68.18%)",
        "custom-radial":
          "radial-gradient(158.82% 374.34% at -5.86% -11.65%, rgba(100, 61, 255, 0.50) 5%, rgba(100, 61, 255, 0.00) 50%)",
        "custom-radial-reverse":
          "radial-gradient(158.82% 374.34% at -5.86% -11.65%, rgba(100, 61, 255, 0.00) 0%, rgba(100, 61, 255, 0.00) 30%, rgba(100, 61, 255, 0.50) 100%)",
        "subscribe-radial":
          "radial-gradient(104.87% 148.3% at -4.26% -5.46%, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%)",
        "custom-purple-gradient":
          "linear-gradient(180deg, #B7A5FF 0%, #643DFF 100%)",
      },

      backdropBlur: {
        custom: "50px",
        reason: "60px",
        subscribe: "32px",
        "75": "75px",
      },
      borderRadius: {
        custom: "40px",
      },
      borderWidth: {
        custom: "2.5px",
      },
      borderColor: {
        "custom-rgba": "rgba(194, 179, 255, 0.80)",
      },
      textColor: {
        transparent: "transparent",
      },
      fontWeight: {
        thin: "100",
        "extra-light": "200",
        light: "300",
        regular: "400",
        medium: "500",
        "semi-bold": "600",
        bold: "700",
        "extra-bold": "800",
        black: "900",
      },
      fontFamily: {
        Ubuntu: ["var(--font-ubuntu)", "sans-serif"],
        "open-sans": ["var(--font-open-sans)", "sans-serif"],
      },
      fontSize: {
        // Header element styles
        "h-xl": ["4.5rem", { lineHeight: "111.111%", fontWeight: 700 }],
        "h-l": ["3.75rem", { lineHeight: "120%", fontWeight: 500 }],
        "h-ls": ["3.5rem", { lineHeight: "120%", fontWeight: 500 }],
        "h-m": ["3.75rem", { lineHeight: "120%", fontWeight: 400 }],
        "h-r": ["2.0625rem", { lineHeight: "121.212%", fontWeight: 500 }],
        "h-s": ["1.75rem", { lineHeight: "121.429%", fontWeight: 500 }],
        "h-xs": ["1.75rem", { lineHeight: "121.429%", fontWeight: 400 }],
        "h-xxs": ["1.4375rem", { lineHeight: "121.739%", fontWeight: 500 }],
        "h-xxxs": ["1.125rem", { lineHeight: "120%", fontWeight: 500 }],
        "h-xxxxs": ["0.7875rem", { lineHeight: "121.429%", fontWeight: 600 }],
        // Body variant styles - [Large, Medium, Regular, Small]
        "body-xl": ["1.5rem", { lineHeight: "2rem", fontWeight: 700 }],
        "body-l": ["1.75rem", { lineHeight: "121.429%", fontWeight: 400 }],
        "body-m": ["1.4375rem", { lineHeight: "121.739%", fontWeight: 400 }],
        "body-ms": ["1.4375rem", { lineHeight: "121.739%", fontWeight: 300 }],
        "body-r": ["1.25rem", { lineHeight: "120%", fontWeight: 400 }],
        "body-s": ["1.125rem", { lineHeight: "120%", fontWeight: 500 }],
        "body-xs": ["1.125rem", { lineHeight: "120%", fontWeight: 400 }],
        "body-xxs": ["1rem", { lineHeight: "118.75%", fontWeight: 600 }],
        "body-xxss": ["1rem", { lineHeight: "118.75%", fontWeight: 500 }],
        "body-xxsx": ["1rem", { lineHeight: "118.75%", fontWeight: 400 }],
        "body-xxxs": ["1.0125rem", { lineHeight: "120%", fontWeight: 500 }],
        number: ["6rem", { lineHeight: "83.333%", fontWeight: 700 }],
        eventMint: ["0.75rem", { lineHeight: "125%", fontWeight: 500 }],
        "modal-head": [
          "2.4375rem",
          { lineHeight: "120.513%", fontWeight: 500 },
        ],
        small: ["0.875rem", { lineHeight: "121.429%", fontWeight: 400 }],
      },
      colors: {
        buttonColor: "#003500",
        fontgreenishColor: "#A7FFA7",
        fontBodyMGreyishColor: "#B8C0CC",
        fontBodyRGreyishColor: "#E7EAEE",
        fontAvatarGreyishColor: "#A0ABBB",
        fontBodyPurpishColor: "#CDC0FF",
        fontBodyWhiteishColor: "#F7F8F9",
        numberPurple: "#643dff3d",
        purplesoon: `#B7A5FF`,
        purpletwo: `#7957FF`,
        greenone: `#A7FFA7`,
        "Neutral-Neutral-500": "#64748B",
      },
      screens: {
        mxl: { max: "1279px" },
        // => @media (max-width: 1279px){...}

        mlg: { max: "1023px" },
        // => @media (max-width: 1023px){...}

        mmd: { max: "769px" },
        // => @media (max-width: 767px){...}

        msm: { max: "639px" },
        // => @media (max-width: 639px){...}

        mxs: { max: "480px" },
        // => @media (max-width: 480px){...}

        mxxs: { max: "400px" },
        // => @media (max-width: 400px){...}

        mxxxs: { max: "320px" },
        // => @media (max-width: 320px){...}

        "ms-height": { raw: "(max-height: 700px)" },

        "mxl-height": { raw: "(max-height: 850px)" },
      },
    },
  },
  plugins: [],
};
