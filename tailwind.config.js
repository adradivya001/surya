/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surya: {
          terracotta: {
            DEFAULT: '#C65332', // Primary terracotta
            hover: '#A84328',
            dark: '#A84328',
            50: '#FFF8F2',
            100: '#FCECE2',
            200: '#F6D8C5',
            300: '#F0D9CB',
            400: '#D98A62',
            500: '#C65332',
            600: '#A84328',
            700: '#8E341E',
          },
          burnt: '#A84328',       // Deep burnt orange
          rust: '#B96645',        // Warm rust
          muted: '#D98A62',       // Muted orange
          peach: {
            DEFAULT: '#F6D8C5',   // Soft peach
            light: '#FCECE2',     // Pale peach
            border: '#F0D9CB',    // Soft border
          },
          cream: '#FFF8F2',       // Warm cream
          charcoal: '#252B33',    // Dark charcoal
          slate: '#59616B',       // Slate gray
          border: '#F0D9CB',      // Soft border
          navy: {
            DEFAULT: '#252B33',
            50: '#FFF8F2',
            100: '#FCECE2',
            800: '#252B33',
            900: '#1C2229',
            950: '#15191E',
          },
          blue: {
            DEFAULT: '#C65332',
            50: '#FCECE2',
            100: '#F6D8C5',
            600: '#A84328',
            700: '#8E341E',
          },
          cyan: {
            DEFAULT: '#D98A62',
            50: '#FFF8F2',
            600: '#B96645',
          },
          text: {
            primary: '#252B33',
            secondary: '#59616B',
            muted: '#8A929C',
          },
          light: '#FCECE2',
          emergency: {
            50: '#FDF2F0',
            100: '#FCECE2',
            200: '#F6D8C5',
            500: '#C65332',
            600: '#A84328',
            700: '#8E341E',
            800: '#752916',
            900: '#5C1E0F',
            950: '#252B33',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(37, 43, 51, 0.04)',
        'card': '0 2px 12px -2px rgba(198, 83, 50, 0.06), 0 1px 4px -1px rgba(37, 43, 51, 0.04)',
        'card-hover': '0 12px 28px -4px rgba(198, 83, 50, 0.12), 0 4px 10px -2px rgba(37, 43, 51, 0.06)',
        'emergency': '0 4px 16px 0 rgba(198, 83, 50, 0.25)',
      },
      borderRadius: {
        'card': '0.875rem',
        'card-lg': '1.25rem',
      },
    },
  },
  plugins: [],
};
