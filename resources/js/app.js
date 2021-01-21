require('./bootstrap');


// https://codesandbox.io/s/vue-router-4-reproduction-hb9lh?file=/index.html:587-1198


import { createApp } from 'vue'

import router from './router/router'
// import App from './components/App.vue'


const vue = createApp({
  name: 'Apps'
}).use(router).mount('#app')



// const app = createApp({})
// app.use(router)

// window.vm = app.mount('#app')
