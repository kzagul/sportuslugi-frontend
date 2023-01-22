import type {Config} from 'tailwindcss';

export default <Partial<Config>>{
    theme: {
      screens: {
        'mobile': '375px',
        sm: '768px',
        md: '1200px',
        xl: '1440px'
      },
      fontFamily: {},
      extend: {
        colors: {
          gray: {
            '90': '#1B1B1B',
            '70': '#262626',
            '60': '#4C4C4C',
            '50': '#727272'
          },
          brand: {
            primary: '#0577F5',
            secondary: '#9AC8F9',
            variant: '#274F7A'
          },
          filter: {
            background: '#9AC8F9',
            photo: '#274F7A'
          },
          surface: {
            default: '#FFFFFF',
            component: '#000000',
            component2: '#9AC8F9',
            background: '#F2F2F2',
          },
          background: '#F2F2F2',
          black: '#000000',
          white: '#FFFFFF',
          border: '#000000',
          pressed: '#003F2F',
          error: '#E70F01',
          hover: '#00B191'
        },
        opacity: {
          '05': '.05',
          '12': '.12',
          '16': '.16',
          '24': '.24',
          '38': '.38',
          '67': '.67'
        }
      }
    },
    plugins: [
      require('flowbite')
    ],
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
      "./node_modules/flowbite.{js,ts}"
    ],
  };