import { Link } from "react-router-dom"

function LandingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Bienvenido a Banco Amanecer</h1>
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Seguridad Avanzada</h2>
          <p>Protegemos tu dinero con la última tecnología en seguridad bancaria.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Transferencias Rápidas</h2>
          <p>Realiza transferencias sin comisiones ocultas y en tiempo real.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Historial Detallado</h2>
          <p>Accede a un historial completo de tus transacciones en cualquier momento.</p>
        </div>
      </div>
      <div className="text-center">
        <Link
          to="/register"
          className="bg-accent text-primary font-bold py-2 px-4 rounded hover:bg-accent-dark transition duration-300"
        >
          Crea tu cuenta ahora
        </Link>
      </div>
    </div>
  )
}

export default LandingPage
