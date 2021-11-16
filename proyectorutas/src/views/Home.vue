<template>
  <div class="home">
    <img width="150" height="150" alt="Vue logo" src="../assets/rambo.png">
    <Titulo texto="Erick Manuel Villafuerte Ramirez" />
  </div>
</template>

<script>
// @ is an alias to /src
import Titulo from '../components/Titulo.vue'
export default {
  name: 'Home',
  components: {
    Titulo
  }
}
</script>
