import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom"; //react router dom v6
import FileView from "./components/FileView/FileView"; //react router dom v6
import FileUpload from "./components/FileUpload/FileUpload";
import DocumentServiceMain from "./components/DocumentServiceMain.jsx"; //react router dom v6

//This is the Routing page ,In this Page we declare all our routings using React-Router-Dom V6
//And we are passing those routing to our APP.
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
  //react router dom v6
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
