export default defineNuxtConfig({
  modules: ['../src/module'],

  devtools: { enabled: true },

  yandexMetrika: {
    id: 12345678,
    enabled: false,
    debug: true,
  },
})
