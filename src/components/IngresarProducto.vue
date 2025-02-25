<template>
  <div class="ingresar-producto">
    <h1>Ingresar Nuevo Producto</h1>
    <form @submit.prevent="guardarProducto">
      <div class="form-group">
        <label for="codigoBarra">Código de Barras:</label>
        <input type="text" v-model="producto.codigoBarra" id="codigoBarra" required />
      </div>
      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input type="text" v-model="producto.nombre" id="nombre" required />
      </div>
      <div class="form-group">
        <label for="categoria">Categoría:</label>
        <input type="text" v-model="producto.categoria" id="categoria" required />
      </div>
      <div class="form-group">
        <label for="stock">Stock:</label>
        <input type="number" v-model.number="producto.stock" id="stock" required />
      </div>
      <div class="form-group">
        <label for="precioUnitario">Precio Unitario:</label>
        <input type="number" v-model.number="producto.precioUnitario" id="precioUnitario" required />
      </div>
      <button type="submit">Guardar</button>
    </form>
    <p v-if="mensaje" :class="mensajeClase">{{ mensaje }}</p>
  </div>
</template>

<script>
import { guardarFachada } from '@/Clients/ClienteFacturacion';

export default {
  name: "IngresarProducto",
  data() {
    return {
      producto: {
        codigoBarra: "",  // Corregido: antes estaba como "codigoBarras"
        nombre: "",
        categoria: "",
        stock: 0,
        precioUnitario: 0,
      },
      mensaje: "",
      mensajeClase: "",
    };
  },
  methods: {
    async guardarProducto() {  // Antes estaba mal nombrado como guardarFachada()
      try {
        await guardarFachada(this.producto);
        this.mensaje = "Producto guardado exitosamente.";
        this.mensajeClase = "mensaje-exito";
        this.limpiarFormulario();
      } catch (error) {
        this.mensaje = "Error al guardar el producto.";
        this.mensajeClase = "mensaje-error";
        console.error("Error al guardar el producto:", error);
      }
    },
    limpiarFormulario() {
      this.producto = { codigoBarra: "", nombre: "", categoria: "", stock: 0, precioUnitario: 0 };
    }
  },
};
</script>

<style scoped>
.ingresar-producto {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
}

h1 {
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.mensaje-exito {
  color: green;
  text-align: center;
  margin-top: 20px;
}

.mensaje-error {
  color: red;
  text-align: center;
  margin-top: 20px;
}
</style>
