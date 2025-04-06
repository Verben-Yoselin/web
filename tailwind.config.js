/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './index.html',
      './src/**/*.{vue,js,ts,jsx,tsx}',
    ],
    darkMode: 'media', // Usa 'media' si quieres que se active por preferencia del sistema
    theme: {
      extend: {
        colors: {
            light: {
              background: '#111827',
              formBackground: '#1f2937',
              formText: '#ffffff',
              inputBackground: '#fde047',
              buttonBackground: '#ffffff',
              buttonHover: '#d1d5db',
              buttonText: '#000000',
              linkHover: '#eab308',
              linkDefault: '#fde047',
              yellowButton: '#fde047',
              inputText: '#000000',
            },
            dark: {
              background: '#ffffff',
              formBackground: '#e0e7ff',
              formText: '#000000',
              inputBackground: '#fde68a',
              buttonBackground: '#ffffff',
              buttonHover: '#d1d5db',
              buttonText: '#000000',
              linkHover: '#eab308',
              linkDefault: '#fde047',
              yellowButton: '#fde047',
              inputText: '#ffffff',
            }
        },
      },
    },
    plugins: [
    //   require('@tailwindcss/forms'),
    //   require('@tailwindcss/typography'),
    //   require('@tailwindcss/aspect-ratio'),
    ],
  }