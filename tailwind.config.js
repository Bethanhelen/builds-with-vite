/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans:["Nunito Sans", "sans-serif"],
    },
    backgroundImage: {
      'home': "url('/Images/Home.png')",
      'about': "url('/Images/About.png')",
      'programs': "url('/Images/Programs.png')",
      'contact': "url('/Images/Contact.png')",
    },
    fontWeight:{
    sm:["200"],
    lg:["300"],
    xl:["400"],
    "2xl":["500"],
    "3xl":["600"],
    "4xl":["700"],
    "5xl":["800"],
    },
    },
  },
  plugins: [],
}

