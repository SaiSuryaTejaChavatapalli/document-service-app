import { Outlet } from "react-router-dom";
import NavBar from "./NavaBar/NavBar";
const DocumentServiceMain = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default DocumentServiceMain;
