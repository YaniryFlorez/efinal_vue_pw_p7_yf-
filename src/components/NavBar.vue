<template>
    <nav>
      <ul class="nav-links">
        <li>
          <router-link to="/ingresar-producto" class="nav-item">Ingresar Producto</router-link>
        </li>
        <li>
          <router-link to="/realizar-venta" class="nav-item">Realizar Venta</router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar'
  }
  </script>
  
  <style scoped>
  nav {
    background-color: #333;
    padding: 10px;
    text-align: center;
  }
  
  .nav-links {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
  }
  
  .nav-item {
    color: white;
    margin: 0 20px;
    text-decoration: none;
    font-size: 16px;
  }
  
  .nav-item:hover {
    color: #f39c12;
  }
  </style>
  