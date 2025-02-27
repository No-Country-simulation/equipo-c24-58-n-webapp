import { useState } from "react";
import { Bell } from "lucide-react";
import { motion } from "framer-motion";

function NotificationIcon() {
  const [unreadCount, setUnreadCount] = useState(3); // Número de notificaciones

  const handleIconClick = () => {
    // Al hacer clic, se marcan todas las notificaciones como leídas
    setUnreadCount(0);
  };

  return (
    <motion.div
      className="relative"
      animate={unreadCount > 0 ? { scale: [1, 1.2, 1] } : {}}
      transition={{ repeat: Infinity, duration: 1, ease: "ease-in-out" }}
    >
      {/* Icono de Notificación */}
      <Bell
        className="w-6 h-6 text-white hover:text-[#0ad4f3]  cursor-pointer transition duration-300"
        onClick={handleIconClick}
      />

      {/* Badge de Notificación */}
      {unreadCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-[#0ad4f3] text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
          {unreadCount}
        </span>
      )}
    </motion.div>
  );
}

export default NotificationIcon;
