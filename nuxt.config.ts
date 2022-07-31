import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    meta: {
        title: "Skil E-learning",
        meta: [
            { name: "viewport", content: "width=device-width, initial-scale=1" },
        ],
        css: [
            './assets/css/style.css',
            './assets/css/main.css',
        ],
        link: [{ rel: "stylesheet", type: "text/css", href: "./assets/css/style.css" }],
    },
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    buildModules: [ '@pinia/nuxt' ]
})
