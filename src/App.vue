<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'; // Importa el componente NavBar

export default {
  name: 'App',
  components: {
    NavBar // Registra el componente NavBar
  }
}
</script>
