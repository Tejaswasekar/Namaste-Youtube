import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";
import { useSelector } from "react-redux";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className="flex h-screen overflow-hidden">
      {isMenuOpen && <SideBar />}
      <div className={`flex-1 flex flex-col ${isMenuOpen ? "ml-60" : ""}`}>
        <Header />
        <div className="mt-16 p-4 overflow-y-auto flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Body;
