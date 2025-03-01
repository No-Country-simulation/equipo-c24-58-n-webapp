"use client"

import { useState, useEffect } from "react"

function Statistics() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeAccounts: 0,
    totalTransfers: 0,
  })

  useEffect(() => {
    // Simulación de carga de datos
    setTimeout(() => {
      setStats({
        totalUsers: 10000,
        activeAccounts: 8500,
        totalTransfers: 25000,
      })
    }, 1000)
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Estadísticas</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Usuarios Registrados</h2>
          <p className="text-4xl font-bold text-primary">{stats.totalUsers}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Cuentas Activas</h2>
          <p className="text-4xl font-bold text-primary">{stats.activeAccounts}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Transferencias Realizadas</h2>
          <p className="text-4xl font-bold text-primary">{stats.totalTransfers}</p>
        </div>
      </div>
    </div>
  )
}

export default Statistics

