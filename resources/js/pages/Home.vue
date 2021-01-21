<template>
    <div>Home
        
        <ul class="bg-gray-500 p-3 m-6">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/foo">Foo</router-link></li>
            <li><router-link to="/bar">Bar</router-link></li>

            <li v-if="permissions.name == 'see hidden menu'">
                <router-link to="/">see hidden menu</router-link>
            </li>

        </ul>

        <!-- <div v-for="(permission, i) in permissions" :key="i">
            {{permission.name}}
        </div> -->
        
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
    

    setup(){

        const permissions = ref({
            name: ''
        });

        onMounted: {
            axios.get('/api/user')
            .then(response => {
                console.log(response.data)
                permissions.value.name = response.data.permissions[0].name
            })
            .catch(e => console.log(e));
        }

        return { permissions }
    }

}
</script>

<style>

</style>