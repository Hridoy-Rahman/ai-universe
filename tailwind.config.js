/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#ed7d88",
        
"secondary": "#1e48bc",
        
"accent": "#097c13",
        
"neutral": "#23303E",
        
"base-100": "#E5EAF0",
        
"info": "#94C9F5",
        
"success": "#3BDE87",
        
"warning": "#EDCB45",
        
"error": "#FC4F2C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

