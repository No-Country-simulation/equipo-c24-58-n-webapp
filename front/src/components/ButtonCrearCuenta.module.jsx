import { Link } from "react-router";

function ButtonCrearCuenta() {
  return (
    <Link
      to="/register"

    >
      <button className="bg-[#ffc107] text-[#0056b3] font-bold py-2 px-4 rounded
  hover:bg-[#4dff17] hover:text-[#003d80]
  inline-block mt-4 transition duration-300 ease-in-out transform hover:scale-105
  animate-pulse cursor-pointer">
      Crea tu cuenta ahora
      </button>

    </Link>
  );
}

export default ButtonCrearCuenta;