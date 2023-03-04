import eslintPlugin from 'vite-plugin-eslint'

export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            // baseURL: '/'
        },
    },
    vite: {
        plugins: [
          eslintPlugin()
        ],
    },
    build: {
        transpile: ['@headlessui/vue'],
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        'nuxt-icons',
        [
            'nuxt-viewport', {
                /* Viewport options */
            }
        ]
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    css: ['~/assets/css/main.css']
})
