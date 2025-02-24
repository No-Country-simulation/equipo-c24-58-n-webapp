import { Link } from "react-router-dom"

function Dashboard() {
  const first = [
    { id: 1, description: "Compra en Amazon", date: "2023-10-01", amount: "-$50.00" },
    { id: 2, description: "Pago de nómina", date: "2023-10-02", amount: "$1,500.00" },
    { id: 3, description: "Transferencia a Juan", date: "2023-10-03", amount: "-$200.00" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Saldo Actual</h2>
        <p className="text-4xl font-bold text-[#0056b3]">$10,000.00 USD</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <Link
          to="/transfers"
          className="bg-[#17a2b8] text-white p-6 rounded-lg shadow-md text-center hover:bg-[#17a2b8]-dark transition duration-300"
        >
          <h3 className="text-xl font-semibold mb-2">Transferir Dinero</h3>
          <p>Realiza una nueva transferencia</p>
        </Link>
        <Link
          to="/history"
          className="bg-[#17a2b8] text-white p-6 rounded-lg shadow-md text-center hover:bg-[#17a2b8]-dark transition duration-300"
        >
          <h3 className="text-xl font-semibold mb-2">Historial</h3>
          <p>Ver historial de transacciones</p>
        </Link>
        <div className="bg-[#17a2b8] text-white p-6 rounded-lg shadow-md text-center hover:bg-[#17a2b8]-dark transition duration-300">
          <h3 className="text-xl font-semibold mb-2">Nueva Cuenta</h3>
          <p>Solicitar cuenta en otra moneda</p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Movimientos Recientes</h2>
        {first.map((item) => (
          <div key={item.id} className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold">{item.description}</h3>
              <p className="text-sm text-gray-600">{item.date}</p>
            </div>
            <p className="text-lg font-semibold">{item.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard
