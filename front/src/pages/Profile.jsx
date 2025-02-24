"use client";

import { useState } from "react";

function Profile() {
  const [user, setUser] = useState({
    name: "Juan Pérez",
    email: "juanperez@example.com",
    phone: "+593 987654321",
    address: "Quito, Ecuador",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setUser(formData);
    setIsEditing(false);
    setSuccessMessage("Perfil actualizado correctamente ✅");

    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const handleCancel = () => {
    setFormData(user);
    setIsEditing(false);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
      <h1 className="text-3xl font-bold mb-6 text-primary">Perfil</h1>

      {successMessage && <p className="text-green-600">{successMessage}</p>}

      {isEditing ? (
        <div className="space-y-4">
          <div>
            <label className="block text-gray-600">Nombre</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-gray-600">Correo</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-gray-600">Teléfono</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-gray-600">Dirección</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="flex space-x-4">
            <button onClick={handleSave} className="bg-[#0056b3] cursor-pointer text-white px-4 py-2 rounded">
              Guardar
            </button>
            <button onClick={handleCancel} className="bg-gray-400 cursor-pointer text-white px-4 py-2 rounded">
              Cancelar
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <p><strong>Nombre:</strong> {user.name}</p>
          <p><strong>Correo:</strong> {user.email}</p>
          <p><strong>Teléfono:</strong> {user.phone}</p>
          <p><strong>Dirección:</strong> {user.address}</p>
          <button onClick={() => setIsEditing(true)} className="bg-[#17a2b8] cursor-pointertext-white px-4 py-2 rounded">
            Editar
          </button>
        </div>
      )}
    </div>
  );
}

export default Profile;
