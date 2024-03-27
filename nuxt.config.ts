// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['primevue/resources/themes/aura-light-green/theme.css',
  'primeicons/primeicons.css'],
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  modules: [
    'nuxt-primevue'
  
     
],

primevue: {
  cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities'
}


})
