import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ backgroundColor: "#333", color: "#fff", padding: "1rem" }}>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/" style={{ color: "#fff" }}>Inicio</Link>
        <Link to="/about" style={{ color: "#fff" }}>Acerca de</Link>
        <Link to="/contact" style={{ color: "#fff" }}>Contacto</Link>
      </nav>
    </header>
  );
}

export default Header;
