import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const navStyle = ({ isActive }) =>
    `px-4 py-2 rounded transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-300 hover:bg-gray-700 hover:text-white"
    }`;

  return (
    <nav className="navbar w-full shadow-md sticky top-0 flex justify-between items-center px-6 py-3">
      <Link to="/" className="text-xl font-bold text-white">
        Hospital App
      </Link>
      <div className="space-x-4">
        <NavLink to="/" className={navStyle}>
          Inicio
        </NavLink>
        <NavLink to="/patients" className={navStyle}>
          Pacientes
        </NavLink>
      </div>
    </nav>
  );
}
