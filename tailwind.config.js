module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#0D6EFD",

                    secondary: "#F7CD2E",

                    accent: "#6562d1",

                    neutral: "#271F2D",

                    "base-100": "#FFFFFF",

                    info: "#53D8F3",

                    success: "#2CDD8D",

                    warning: "#F5A52E",

                    error: "#FB283A",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
