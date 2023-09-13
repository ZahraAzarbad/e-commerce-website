/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-bg": "url('./src/assets/img/bglogin.png')",
        makeup: "url('./src/assets/img/makeupbg.jpg')",
        mask: "url('./src/assets/img/maskbg.jpg')",
        skincare: "url('./src/assets/img/skincarebg.jpg')",
        behdashti: "url('./src/assets/img/behdashtibg.jpg')",
      },
      colors: {
        // bgcolor: "#E2DBC7",
        bgcolor: "#D5CCAF",
        btncolor: "#8CBBA0",
      },
    },
  },
  plugins: [],
};
