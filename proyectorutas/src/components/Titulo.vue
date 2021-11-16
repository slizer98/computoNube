<template>
    <div class="container">
        <span class="titulo">{{ texto }}</span>
    </div>
</template>

<script>
export default {
    props: {
        texto: String,
    }
}
</script>

<style scoped>
.container{
    padding-top: 15px;
    margin-top: 15px;

}
.titulo {
    color: blue;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    font-style: italic;
}

</style>>
