/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        apple: {
          bg: '#fbfbfd',
          surface: '#ffffff',
          text: '#1d1d1f',
          muted: '#86868b',
          primary: '#0071e3',
          accent: '#2997ff',
          success: '#34c759',
          warning: '#ff9f0a',
          error: '#ff3b30',
          info: '#007aff',
          glass: 'rgba(255, 255, 255, 0.68)',
          'glass-dark': 'rgba(29, 29, 31, 0.72)',
          border: 'rgba(0, 0, 0, 0.08)',
          'border-light': 'rgba(255, 255, 255, 0.8)',
          highlight: 'rgba(255, 255, 255, 0.85)',
          slate: '#f5f5f7',
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"PingFang SC"',
          '"Hiragino Sans GB"',
          '"Microsoft YaHei"',
          '"Noto Sans SC"',
          'sans-serif',
        ],
        display: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
        chinese: [
          '"PingFang SC"',
          '"Hiragino Sans GB"',
          '"Microsoft YaHei"',
          '"Noto Sans SC"',
          'sans-serif',
        ]
      },
      borderRadius: {
        'apple': '1.25rem',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.02)',
        'glass-hover': '0 16px 48px 0 rgba(0, 113, 227, 0.1), 0 2px 8px 0 rgba(0, 0, 0, 0.04)',
        'glass-sm': '0 4px 16px 0 rgba(0, 0, 0, 0.03)',
        'glass-card': '0 20px 40px -15px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}
