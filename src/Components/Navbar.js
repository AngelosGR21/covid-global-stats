import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h3>COVID-19</h3>
      <Link to="/">Home</Link>
    </nav>
  );
};

export default Navbar;
