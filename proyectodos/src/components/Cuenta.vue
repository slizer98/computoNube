<template>
<div>
    <h1 class="Cuenta">Cuenta</h1>
    <h2 class="contenido">Tipo de cuenta: {{ cuenta }}</h2>
    <h2 class="contenido">saldo: {{ saldo }}</h2>
    <h2 class="contenido">cuenta: {{ estado ? 'Activo' : 'Desactivada' }}</h2>
    <hr>
    <h2 class="titulo">Nuestros servicios:</h2>
    <div class="container">
        <div class="servicios" v-for="(item, index) in servicios" :key="index">
            {{ index + 1 }} - {{ item }}
        </div>
        <div class="image">
            <img :src="img" alt="imagen">
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Cuenta',
    data() {
        return {
            saldo: 1000,
            cuenta: 'Visa',
            estado: true,
            servicios: ['Transferencia', 'Pago', 'Retiro Efectivo', 'Pago SAT'],
            img: 'http://www.icorp.com.mx/blog/wp-content/uploads/2020/10/tercerizar_servicios_ti-713x330.jpg'
        }
    },

}
</script>

<style scoped>
.Cuenta{
    font-size: 20px;
    color: red;
    font-weight: 500;
}
.contenido{
    font-size: 20px;
    color: rgb(0, 12, 80);
    font-weight: 500;
}
.container{
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.servicios{
    text-align: justify;
    font-size: 20px;
}
.titulo{
    color: rgb(66, 2, 2);
    font-size: 30px;
}
.image img{
    width: 400px;
    height: 150px;
}
</style>