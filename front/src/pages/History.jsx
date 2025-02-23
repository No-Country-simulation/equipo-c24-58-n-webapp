"use client"

import { useState } from "react"

// Datos de ejemplo
const transactionsData = [
  { id: 1, date: "2025-02-20", description: "Transferencia a Juan", amount: -100, type: "transfer" },
  { id: 2, date: "2025-02-19", description: "Depósito de nómina", amount: 1500, type: "deposit" },
  { id: 3, date: "2025-02-18", description: "Pago de factura", amount: -50, type: "payment" },
  // ... más transacciones
]

function History() {
  const [transactions] = useState(transactionsData)

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Historial de Transacciones</h1>
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-3 px-4 text-left">Fecha</th>
              <th className="py-3 px-4 text-left">Descripción</th>
              <th className="py-3 px-4 text-right">Monto</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="border-b hover:bg-gray-100">
                <td className="py-3 px-4">{transaction.date}</td>
                <td className="py-3 px-4">{transaction.description}</td>
                <td className={`py-3 px-4 text-right ${transaction.amount >= 0 ? "text-green-600" : "text-red-600"}`}>
                  {transaction.amount.toFixed(2)} USD
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default History
