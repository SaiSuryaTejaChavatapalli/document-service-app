import ViewDocumentsContainer from "./ViewDocuments/ViewDocumentsContainer";
import "./FileView.css";
// This is the file view component. In this we put out table container
const FileView = () => {
  return (
    <div className="file-view-container">
      <ViewDocumentsContainer />
    </div>
  );
};

export default FileView;
