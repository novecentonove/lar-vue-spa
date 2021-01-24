<template>
    <main-menu />
    <div v-if="error">
        {{ error }}
    </div>
    <Suspense v-else>
        <template #default>
            <router-view></router-view>
        </template>
        <template #fallback>
            <div>Loading...</div>
        </template>
    </Suspense>                 
</template>

<script>
// https://vueschool.io/articles/vuejs-tutorials/suspense-new-feature-in-vue-3/

import { onErrorCaptured, ref } from 'vue'
import MainMenu from './menu/MainMenu.vue'

export default {

    components:{
        MainMenu
    },           
    setup () {
        const error = ref(null)

        onErrorCaptured(e => {
            error.value = e
            return true
        })

        return { error }
    }
}
</script>