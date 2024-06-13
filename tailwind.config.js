/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      height: {
        '600px': '500px',
        '400px':'450px',
        '700px':'550px',
        '50%':'50%',
        '300px':'300px',
        '250px':'250px',


        },
        width:{
          '100p':'100px',
          '100%':'100%'
        },
      spacing:{
        '-100':'-30rem',
        '30p':'34%',
      }
    },
  },
  plugins: [],
}

