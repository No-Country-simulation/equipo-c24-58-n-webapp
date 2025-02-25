"use client"

import { createContext, useState, useContext } from "react"
import axios from "axios"
import PropTypes from "prop-types";


const AuthContext = createContext();

export function AuthProvider({children}){
  const [user, setUser] = useState(null);
  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:8080/api/users/login', { email, password });
      setUser(response.data);
      return response.data;
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  };

  const register = async (name, dni, phone, direction, email, password) => {
    try {
      const response = await axios.post('http://localhost:8080/api/users/register', { name, dni, phone, direction, email, password });
      setUser(response.data);
      return response.data;
    } catch (error) {
      console.error('Error during register:', error);
      throw error;
    }
  };
  const logout = () => {
    setUser(null);
  };

  return(
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>

  )

}
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useAuth(){
  return useContext(AuthContext);
}