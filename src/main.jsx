import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FileView from "./components/FileView/FileView";
import FileUpload from "./components/FileUpload/FileUpload";
import DocumentServiceMain from "./components/DocumentServiceMain.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <DocumentServiceMain />,
    children: [
      { path: "/", element: <App /> },
      {
        path: "file-upload",
        element: <FileUpload />,
      },
      {
        path: "file-view",
        element: <FileView />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
