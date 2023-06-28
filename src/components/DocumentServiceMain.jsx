import { Outlet } from "react-router-dom"; //importing outlet
import NavBar from "./NavBar/NavBar"; //importing navbar
const DocumentServiceMain = () => {
  //This is main Component for Document Service. According to routing path the Outlet is going to change according to routing
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default DocumentServiceMain;
