<template>
<div>
  <img alt="Vue logo" src="./assets/logo.png">
  <datos />
  <Titulo texto="PRACTICA DOS CON PROPS VUEJS" />
  <Cuenta />
</div>
</template>

<script>
import Titulo from './components/Titulo'
import Cuenta from './components/Cuenta'
import Datos from './components/Datos.vue'

export default {
  name: 'App',
  components: {
    Titulo,
    Cuenta,
    Datos
  }
}
</script>

<style>
#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  background: linear-gradient(blue, red);
}
</style>
