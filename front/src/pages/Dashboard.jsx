import { Link } from "react-router-dom"

function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Saldo Actual</h2>
        <p className="text-4xl font-bold text-primary">$10,000.00 USD</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <Link
          to="/transfers"
          className="bg-secondary text-white p-6 rounded-lg shadow-md text-center hover:bg-secondary-dark transition duration-300"
        >
          <h3 className="text-xl font-semibold mb-2">Transferir Dinero</h3>
          <p>Realiza una nueva transferencia</p>
        </Link>
        <Link
          to="/history"
          className="bg-secondary text-white p-6 rounded-lg shadow-md text-center hover:bg-secondary-dark transition duration-300"
        >
          <h3 className="text-xl font-semibold mb-2">Historial</h3>
          <p>Ver historial de transacciones</p>
        </Link>
        <div className="bg-secondary text-white p-6 rounded-lg shadow-md text-center hover:bg-secondary-dark transition duration-300">
          <h3 className="text-xl font-semibold mb-2">Nueva Cuenta</h3>
          <p>Solicitar cuenta en otra moneda</p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Movimientos Recientes</h2>
        {/* Aquí iría una lista de movimientos recientes */}
      </div>
    </div>
  )
}

export default Dashboard

