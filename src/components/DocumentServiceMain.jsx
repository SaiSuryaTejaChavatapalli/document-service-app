import { Outlet } from "react-router-dom";//importing outlet
import NavBar from "./NavaBar/NavBar"; //importing navbar
const DocumentServiceMain = () => {//main component
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default DocumentServiceMain; 
