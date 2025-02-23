"use client"

import { useState } from "react"

const initialNotifications = [
  { id: 1, message: "Su transferencia ha sido completada", read: false },
  { id: 2, message: "Nuevo mensaje de seguridad", read: false },
  { id: 3, message: "Actualización de términos y condiciones", read: true },
]

function Notifications() {
  const [notifications, setNotifications] = useState(initialNotifications)

  const markAsRead = (id) => {
    setNotifications(notifications.map((notif) => (notif.id === id ? { ...notif, read: true } : notif)))
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Notificaciones</h1>
      <ul className="space-y-4">
        {notifications.map((notif) => (
          <li key={notif.id} className={`p-4 rounded-lg ${notif.read ? "bg-gray-100" : "bg-white shadow"}`}>
            <div className="flex justify-between items-center">
              <p className={notif.read ? "text-gray-600" : "font-semibold"}>{notif.message}</p>
              {!notif.read && (
                <button onClick={() => markAsRead(notif.id)} className="text-sm text-primary hover:underline">
                  Marcar como leído
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Notifications

