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
          /* New Editorial Architectural Palette */
          primary: '#641D2D',         // Deep Oxblood
          'primary-hover': '#4E1421', // Darker Oxblood
          dark: '#28171D',            // Dark Premium Surface
          warmWhite: '#FCFAF7',       // Warm White dominant background
          pureWhite: '#FFFFFF',       // Pure White
          rose: '#E8D8D9',            // Muted Rose
          brass: '#B69A65',           // Brass Accent
          charcoal: '#29252A',        // Main Text
          secondaryText: '#6F686B',   // Secondary Text
          border: '#DED7D7',          // Neutral Border
          
          /* Token Aliases for compatibility */
          pageBg: '#FCFAF7',
          card: '#FFFFFF',
          heading: '#29252A',
          muted: '#6F686B',
          soft: '#E8D8D9',
          terracotta: {
            DEFAULT: '#641D2D',
            hover: '#4E1421',
            dark: '#28171D',
            soft: '#E8D8D9',
            50: '#FCFAF7',
            100: '#E8D8D9',
            200: '#DED7D7',
            300: '#DED7D7',
            400: '#B69A65',
            500: '#641D2D',
            600: '#4E1421',
            700: '#28171D',
          },
          beige: {
            DEFAULT: '#FCFAF7',
            light: '#FFFFFF',
            border: '#DED7D7',
            dark: '#E8D8D9',
          },
          text: {
            primary: '#29252A',
            secondary: '#6F686B',
            muted: '#8A8487',
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
