import { createRouter, createWebHistory } from 'vue-router'


import Home from '../components/Home'

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const NotFound = { template: '<div>NotFound</div>' }

const router = createRouter({
history: createWebHistory(),
routes: [
    { path: '/', component: Home },
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
],
})



const isAuthenticated = false;
const fullUrl = window.location.origin

// router.beforeEach((to, from, next) => {
// if (!isAuthenticated){
    
//     if (to.path !== '/login') {
//       next('/login');
//     } else {
//       next();
//     }
// }
// })


export default router;
