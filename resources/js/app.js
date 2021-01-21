require('./bootstrap');


// https://codesandbox.io/s/vue-router-4-reproduction-hb9lh?file=/index.html:587-1198


import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
// import App from './components/App.vue'

const Home = {
  template: `<div>home</div>`,
}

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
  ],
})

createApp({
  name: 'Apps'
}).use(router).mount('#app')

// const app = createApp({})
// app.use(router)

// window.vm = app.mount('#app')
