import { Link } from "react-router-dom";
import "./App.css";
import UploadImg from "./assets/upload-your-files.png"; //importing images
import SearchImg from "./assets/search-your-files.png";
//------------------------------------------------------------------------------------------------------------------

//This is the App component in which we have the links to the different sections of the application.
//We have Two Links (Upload File and View File ).By clicking on that we can navigate to different sections and interact with that UI

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
                alt="upload-files-img"
                className="section-item-img"
                data-testid="upload-files-img"
              />
            </div>
          </Link>

          <Link to="/file-view" className="section-link">
            <div className="section-item">
              <h3>View Files</h3>
              <img
                data-testid="view-files-img"
                src={SearchImg}
                alt="view-files-img"
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
