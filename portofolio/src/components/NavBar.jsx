import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <>
      <nav
        className="navbar sticky-top navbar-expand-lg navbar-dark"
        data-bs-theme="dark"
        style={{ backgroundColor: "#1F1D20" }}>
        <div className="container-fluid">
          <Link
            to={"/"}
            className="navbar-brand"
            style={{
              fontSize: 30,
              marginLeft: 200,
            }}>
            Home
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to={"/about"}
                  className="nav-link"
                  style={{ fontSize: 20 }}>
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/portofolio"}
                  className="nav-link"
                  style={{ fontSize: 20 }}>
                  My Works
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
