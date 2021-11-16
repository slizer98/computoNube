<template>
    <div class="container">
        <Titulo texto="blog de DICIS" />
        <!-- <button @click="consumirApi">consumir API</button> -->
        <br>
        <div v-for="item in post" :key="item.id">
            <router-link :to="`/blog/${item.id}`">
            {{ item.title }}
            </router-link>
        </div>
    </div>
</template>

<script>
import Titulo from '../components/Titulo.vue'
export default {
    components: {
        Titulo
    },
    data(){
        return {
            post: []
        }
    },
    methods: {
        async consumirApi (){
            try{
                const data = await fetch('https://jsonplaceholder.typicode.com/posts')
                const array = await data.json()
                this.post = array
            } catch(error){
                console.log(error);
            }
        }
    },
    created(){
        this.consumirApi()
    }
}
</script>