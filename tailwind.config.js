/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors: {
      "light-red": "hsl(0, 100%, 67%)",
      "orange-yellow": "hsl(39, 100%, 56%)",
      "green-teal": "hsl(166, 100%, 37%)",
      "cobalt-blue": "hsl(234, 85%, 45%)",
      "light-slate-blue": "hsl(252, 100%, 67%)",
      "light-royal-blue": "hsl(241, 81%, 54%)",
      "violet-blue": "hsla(256, 72%, 46%, 1)",
      "persian-blue": "hsla(241, 72%, 46%, 0)",
      white: "hsl(0, 0%, 100%)",
      "pale-blue": "hsl(221, 100%, 96%)",
      "light-lavender": "hsl(241, 100%, 89%)",
      "dark-gray-blue": "hsl(224, 30%, 27%)",
    },

    screens: {
      mobile: "375px",
      laptop: "1440px",
    },

    extend: {
      fontFamily: {
        "hanken-grotesk": ["Hanken Grotesk", "sans-serif"],
      },
      fontWeight: {
        medium: 500,
        bold: 700,
        "extra-bold": 800,
      },
      backgroundImage: {
        "gradient-blue-lavender": `linear-gradient(to bottom, hsl(252, 100%, 67%) 0%, hsl(241, 81%, 54%) 100%)`,
        "gradient-violet-royal":
          "linear-gradient(to bottom, hsla(256, 72%, 46%, 1) 0%, hsl(241, 81%, 54%) 100%)",
      },
    },
  },
  plugins: [],
};
