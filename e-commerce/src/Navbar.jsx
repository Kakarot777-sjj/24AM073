import { Link } from "react-router-dom";

export default function Navbar({ cartCount }) {
  return (
    <nav style={{ background: "#333", padding: "10px" }}>
      <Link to="/" style={{ color: "white", margin: "10px" }}>Home</Link>
      <Link to="/products" style={{ color: "white", margin: "10px" }}>Products</Link>
      <Link to="/contact" style={{ color: "white", margin: "10px" }}>Contact</Link>
      <Link to="/cart" style={{ color: "white", margin: "10px" }}>
        Cart ({cartCount})
      </Link>
    </nav>
  );
}