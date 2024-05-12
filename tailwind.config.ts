import type {Config} from "tailwindcss";

const sizes = {
    2.25: "0.5625rem",
    2.75: "0.6875rem",
    3.25: "0.8125rem",
    17: "4.25rem",
};

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            margin: {...sizes},
            padding: {...sizes},
            inset: {...sizes},
            maxWidth: {
                limit: "960px",
                ["limit-lg"]: "1200px",
                ["limit-sm"]: "540px",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
