"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Register = () => {
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    dni: "",
    phone: "",
    direction: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    // Validación de DNI y teléfono
    if (formData.dni.length !== 10) {
      alert("El DNI debe tener 10 números");
      return;
    }

    if (formData.phone.length !== 10) {
      alert("El teléfono debe tener 10 números");
      return;
    }

    // Aquí ira la lógica de registro
    try {
      await register(
        formData.name,
        formData.dni,
        formData.phone,
        formData.direction,
        formData.email,
        formData.password
      );
      alert("Registro exitoso");
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Error al registrar. Por favor, intente de nuevo.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Solo permitir números en DNI y teléfono
    if ((name === "dni" || name === "phone") && !/^\d*$/.test(value)) {
      return;
    }

    // Limitar a 10 dígitos
    if ((name === "dni" || name === "phone") && value.length > 10) {
      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">Registrarse</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="DNI">Documento Nacional de Identidad</label>
          <input
            type="text"
            id="dni"
            name="dni"
            value={formData.dni}
            onChange={handleChange}
            placeholder="DNI (10 números)"
            maxLength="10"
            pattern="\d{10}"
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="phone">Teléfono</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Teléfono (10 números)"
            maxLength="10"
            pattern="\d{10}"
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="direction">Dirección</label>
          <input
            type="text"
            id="direction"
            name="direction"
            value={formData.direction}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block mb-1">
            Confirmar Contraseña
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#17a2b8] text-white p-2 cursor-pointer rounded hover:bg-primary-dark">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Register;
