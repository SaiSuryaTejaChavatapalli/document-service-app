import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="nav-bar-container">
      <span className="logo">Document Service</span>
      <div className="nav-bar-links">
        <Link to="/file-upload" className="nav-bar-link">
          <span>Upload Document</span>
        </Link>
        <Link to="/file-view" className="nav-bar-link">
          <span>View Document</span>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
