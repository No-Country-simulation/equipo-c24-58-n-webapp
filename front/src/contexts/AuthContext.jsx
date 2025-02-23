"use client"

import { createContext, useState, useContext } from "react"
import PropTypes from 'prop-types';

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const login = (email) => {
    // Simulación de login
    setUser({ email, name: "Usuario Ejemplo" })
  }

  const logout = () => {
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}
export function useAuth() {
  return useContext(AuthContext)
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

