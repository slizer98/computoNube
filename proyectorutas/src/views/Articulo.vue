<template>
    <div class="container">
        <Titulo texto="Detalle del articulo"/>
        <br>
        <div class="card" style="width: 18rem;">
            <img src="../assets/rambo.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ articulo.title }}</h5>
                <p class="card-text">{{ articulo.body }}</p>
                <router-link to="/blog" class="btn btn-primary">Back</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import Titulo from '../components/Titulo.vue'
export default {
    components:{
        Titulo
    },
    data(){
        return{
            articulo: {}
        }
    },
    methods: {
        async consumirArticulo(){
            try{
                const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
                const array = await data.json()
                console.log(array)
                this.articulo = array
            } catch(error){
                console.log(error);
            }
        }
    },
    created(){
        this.consumirArticulo()
    }
}
</script>