/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'content/**/*.md', 
    'layouts/**/*.html',
    '../../layouts/**/*.html',
    '../../content/**/*.md',
    './themes/agora/layouts/**/*.html',
    './themes/agora/content/**/*.md',
  ],
  purge: {
    content: [
      'content/**/*.md', 
      'layouts/**/*.html',
      '../../layouts/**/*.html',
      '../../content/**/*.md',
      './themes/agora/layouts/**/*.html',
      './themes/agora/content/**/*.md',
    ]
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'agora-green-dark':     '#016270',
        'agora-green-light':    '#008D91',
        'agora-talent-light':   '#FFF6D5',
        'agora-talent-dark':    '#C99603',
        'agora-talent-color':    '#FBBC05',
        // 'agora-green-talent':   '#CCE8E9',
        'agora-company-light':   '#CCE8E9',
        // 'agora-yellow-company': '#FFF6D5',
        // Add more custom colors here
      },
    },
  },
  plugins: [],
}