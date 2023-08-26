import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="main-menu">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "bold" : "")}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/technoadd"
            className={({ isActive }) => (isActive ? "bold" : "")}
          >
            Ajouter une techno
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/technolist"
            className={({ isActive }) => (isActive ? "bold" : "")}
          >
            Voir les technos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
