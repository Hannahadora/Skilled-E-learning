import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    meta: {
        title: "Skill E-learning",
        meta: [
            { name: "viewport", content: "width=device-width, initial-scale=1" },
        ],
        css: [
            // '~/assets/css/style.css',
            // '~/assets/css/main.css',
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/images/favicon-32x32.png' },
            // { rel: "stylesheet", type: "text/css", href: "@/assets/css/style.css" },
            // { rel: "stylesheet", type: "text/css", href: "@/assets/css/main.css" },
        ],
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@vueuse/nuxt',
    ],
    buildModules: [ '@pinia/nuxt' ]
})
