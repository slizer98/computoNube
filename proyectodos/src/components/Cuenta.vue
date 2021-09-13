<template>
<div>
    <h1 class="Cuenta">Cuenta</h1>
    <h2 class="contenido">Tipo de cuenta: {{ cuenta }}</h2>
    <h2 class="contenido">saldo: {{ saldo }}</h2>
    <h2 class="contenido">ceunta {{ estado ? 'Activo' : 'Desactivada' }}</h2>
    <hr>
    <div v-for="(item, index) in servicios" :key="index">
        {{ index + 1 }} - {{ item }}
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
            servicios: ['Transferencia', 'Pago', 'Retiro Efectivo', 'Pago SAT']
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
</style>