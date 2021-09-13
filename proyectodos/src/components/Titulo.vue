<template>
<h1 class="Titulo">{{ texto }}</h1>
</template>

<script>
    export default {
        name: 'Titulo',
        props: {
            texto: String
        }
    }
</script>
<style scoped>
.Titulo {
    font-size: 20px;
    color: blue;
    font-weight: 700;
}
</style>