import { Link } from "react-router-dom";

//Create routings for upload document page and view document page

function App() {
  return (
    <>
      <h1>Welcome to Document Service</h1>
      <div>
        <Link to="/file-upload">
          <h3>Upload File</h3>
        </Link>
      </div>
      <div>
        <Link to="/file-view">
          <h3>View Files</h3>
        </Link>
      </div>
    </>
  );
}

export default App;
