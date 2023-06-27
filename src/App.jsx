import { Link } from "react-router-dom";
import "./App.css";
import UploadImg from "./assets/upload-your-files.png";
import SearchImg from "./assets/search-your-files.png";

//Create routings for upload document page and view document page

function App() {
  return (
    <div className="main-container">
      <div className="sections-container">
        <h1>Welcome to Document Service</h1>
        <div className="section-container">
          <Link to="/file-upload" className="section-link">
            <div className="section-item">
              <h3>Upload File</h3>
              <img
                src={UploadImg}
                alt="upload-files"
                className="section-item-img"
              />
            </div>
          </Link>

          <Link to="/file-view" className="section-link">
            <div className="section-item">
              <h3>View Files</h3>
              <img
                src={SearchImg}
                alt="view--files-img"
                className="section-item-img"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
