import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg Navbar">
      <div className="container-fluid" style={{ color: `black` }}>
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/Polynomial">
                Polynomial
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/trigo">
                Trigonometric
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/loga">
                Logarithmic
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/expo">
                Exponential
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
