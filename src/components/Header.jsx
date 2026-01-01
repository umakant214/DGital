import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bgcolor px-4 py-3 sticky-top ">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand fs-1 fw-bold text-light">
          DGital
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainMenu">
          <ul className="navbar-nav mx-auto" style={{ fontSize: "16px" }}>
            <li className="nav-item">
              <Link to="/" className="nav-link fw-bold link-warning">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-link text-light fw-bold">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/service" className="nav-link text-light fw-bold">
                Service
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/project" className="nav-link text-light fw-bold">
                Project
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/pages" className="nav-link text-light fw-bold">
                Pages+
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-link text-light fw-bold">
                Contact
              </Link>
            </li>
          </ul>

          <button className="btn btn-light px-4 p-2 rounded-5">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
