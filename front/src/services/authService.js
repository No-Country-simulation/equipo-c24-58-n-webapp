import axios from 'axios';

const API_URL = 'http://localhost:8080/api/usuarios'; // Asegúrate de que esta URL sea la correcta

// Función para login
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });
    // Suponiendo que la respuesta incluye un token
    return response.data; // Asegúrate de que esta sea la estructura correcta de la respuesta
  } catch (error) {
    throw new Error(error.response ? error.response.data : 'Error de conexión');
  }
};

// Función para registrar usuario
export const register = async (name, dni, phone, direction, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      name,
      dni,
      phone,
      direction,
      email,
      password,
    });
    return response.data; // Asegúrate de que esta sea la estructura correcta de la respuesta
  } catch (error) {
    // Si el error tiene una respuesta (por ejemplo, un mensaje de error desde el backend)
    if (error.response) {
      console.error("Error de respuesta del backend:", error.response.data);
      throw new Error(`Error al registrarse: ${error.response.data}`);
    } else if (error.request) {
      // Si la solicitud fue hecha pero no se recibió respuesta
      console.error("Error en la solicitud:", error.request);
      throw new Error("No se pudo conectar al servidor. Por favor, inténtalo nuevamente.");
    } else {
      // Error general
      console.error("Error desconocido:", error.message);
      throw new Error(`Error desconocido: ${error.message}`);
    }
  }
}