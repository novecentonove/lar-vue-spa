require('./bootstrap');


// https://codesandbox.io/s/vue-router-4-reproduction-hb9lh?file=/index.html:587-1198


import { createApp } from 'vue'

import router from './router/router'
// import App from './components/App.vue'

import HomePage from './HomePage.vue'


const vue = createApp({
  name: 'Apps',
  components: {
    HomePage
  }
}).use(router).mount('#app')


// const log = (text) => {
//   console.log(text)
// }
// vue.config.globalProperties.$l() = log;



// const app = createApp({})
// app.use(router)

// window.vm = app.mount('#app')
