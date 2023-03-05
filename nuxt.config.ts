// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
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
