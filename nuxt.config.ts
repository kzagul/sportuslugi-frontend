// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        [
            '@nuxt/devtools', {
                enabled: true,
            }
        ],
        [
            'nuxt-viewport', {
                /* Viewport options */
            }
        ],
        [
            'nuxt-swiper', {
                // Swiper options
            }
        ]
    ],
    css: ['~/assets/css/main.css']
})
