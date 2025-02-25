import axios from "axios";

// URL base de la API
const baseURL = "http://localhost:8081/facturacionAPI/v1.1/productos";

// Método para guardar un producto
const guardar = (bodyProducto) => {
  return axios
    .post(baseURL, bodyProducto)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error al guardar el producto:", error);
      throw error;
    });
};

// Método para obtener todos los productos
const consultaTotal = async () => {
  return axios
    .get(baseURL)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error al consultar los productos:", error);
      throw error;
    });
};

// Método para obtener un producto por su código de barras
const consultaUnica = (codigoBarras) => {
  return axios
    .get(`${baseURL}/${codigoBarras}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(`Error al consultar el producto con código de barras ${codigoBarras}:`, error);
      throw error;
    });
};

// Método para actualizar un producto por su código de barras
const actualizar = (codigoBarras, bodyProducto) => {
  return axios
    .put(`${baseURL}/${codigoBarras}`, bodyProducto)
    .then((response) => response.data)
    .catch((error) => {
      console.error(`Error al actualizar el producto con código de barras ${codigoBarras}:`, error);
      throw error;
    });
};

// Método para eliminar un producto por su código de barras
const eliminar = (codigoBarras) => {
  return axios
    .delete(`${baseURL}/${codigoBarras}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(`Error al eliminar el producto con código de barras ${codigoBarras}:`, error);
      throw error;
    });
};

// MÉTODOS FACHADA

// Método fachada para consultar todos los productos
export const consultaTotalFachada = async () => {
  return await consultaTotal();
};

// Método fachada para consultar un producto por su código de barras
export const consultaUnicaFachada = async (codigoBarras) => {
  return await consultaUnica(codigoBarras);
};

// Método fachada para guardar un producto
export const guardarFachada = async (bodyProducto) => {
  return await guardar(bodyProducto);
};

// Método fachada para actualizar un producto
export const actualizarFachada = async (codigoBarras, bodyProducto) => {
  return await actualizar(codigoBarras, bodyProducto);
};

// Método fachada para eliminar un producto por su código de barras
export const eliminarFachada = async (codigoBarras) => {
  return await eliminar(codigoBarras);
};
