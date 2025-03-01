import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  login as loginService,
  register as registerService,
} from "../services/authService";

// Crear el contexto de autenticación
export const AuthContext = createContext();

// Proveedor del contexto de autenticación
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Verificar el estado de autenticación cuando se monta el componente
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      // Aquí podrías hacer una llamada para verificar que el token es válido
      // Si el token es válido, puedes restaurar el usuario
      // Simularemos que el token es válido y restauraremos el usuario
      setUser({ name: "John Doe", email: "johndoe@example.com" });
    }
  }, []);

  // Función de login
  const login = async (email, password) => {
    try {
      const userData = await loginService(email, password);
      setUser(userData);

      // Guardar el token en localStorage
      if (userData.token) {
        localStorage.setItem("authToken", userData.token);
      }

      return userData;
    } catch (err) {
      console.error("Error al iniciar sesión", err);
      throw err;
    }
  };

  // Función de registro
const register = async (name, dni, phone, direction, email, password) => {
  try {
    const userData = await registerService(
      name,
      dni,
      phone,
      direction,
      email,
      password
    );
    setUser(userData);

    // Guardar el token en localStorage
    if (userData.token) {
      localStorage.setItem("authToken", userData.token);
    }

    return userData;
  } catch (err) {
    console.error("Error al registrarse", err);
    // Mostrar el error en el frontend, por ejemplo en un alert
    throw new Error(err.message); // Ahora el mensaje de error será más informativo
  }
};


  // Función de logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("authToken"); // Eliminar el token al hacer logout
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Hook para acceder al contexto de autenticación
export function useAuth() {
  return useContext(AuthContext);
}
