"use client"

import { useState } from "react"

function Transfers() {
  const [recipient, setRecipient] = useState("")
  const [amount, setAmount] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica de transferencia
    console.log("Transferencia realizada", { recipient, amount, description })
    // Resetear el formulario
    setRecipient("")
    setAmount("")
    setDescription("")
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">Realizar Transferencia</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="recipient" className="block mb-1">
            Destinatario
          </label>
          <input
            type="text"
            id="recipient"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            required
            className="w-full p-2 border rounded"
            placeholder="Nombre o número de cuenta"
          />
        </div>
        <div>
          <label htmlFor="amount" className="block mb-1">
            Monto
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            className="w-full p-2 border rounded"
            placeholder="0.00"
            min="0"
            step="0.01"
          />
        </div>
        <div>
          <label htmlFor="description" className="block mb-1">
            Descripción (opcional)
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-primary text-white p-2 rounded hover:bg-primary-dark">
          Confirmar Transferencia
        </button>
      </form>
    </div>
  )
}

export default Transfers

