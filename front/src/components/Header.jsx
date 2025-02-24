import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {  User } from "lucide-react";
import NotificationIcon from "./NotificationIcon";

function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-[#0056b3] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Banco Amanecer
        </Link>
        <nav>
          <ul className="flex space-x-4">
            {user ? (
              <>
                <li>
                  <Link to="/dashboard" className="hover:text-accent">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/transfers" className="hover:text-accent">
                    Transferencias
                  </Link>
                </li>
                <li>
                  <Link to="/history" className="hover:text-accent">
                    Historial
                  </Link>
                </li>
                <li>
          <Link to="/profile" className="hover:text-accent flex items-center">
            <User className="w-6 h-6" />
          </Link>
        </li>
        <li>
          <Link to="/notifications" className="hover:text-[#0056b3]">
        <NotificationIcon />
          </Link>
        </li>

                <li>
                  <button onClick={logout} className="hover:text-accent">
                    Cerrar Sesión
                  </button>
                </li>

              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="hover:text-accent">
                    Iniciar Sesión
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="hover:text-accent">
                    Registrarse
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
