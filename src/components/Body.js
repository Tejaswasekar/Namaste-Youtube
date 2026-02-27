import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";

const Body = () => {
  return (
    <div>
      <Header />

      <div className="flex">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
