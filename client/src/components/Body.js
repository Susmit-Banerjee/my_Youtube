//import { useEffect } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
const Body = () => {
  const isMenuOpen = useSelector((store) => store.toggleSidebar.isSidebarOpen);
  const isWatchPageOpen = useSelector((store) => store.toggleSidebar.isWatchPage);
  const dynamicSidebarStyle = (isWatchPageOpen && window.innerWidth>=1024)?"absolute":"lg:static";
  
  return (
    <div className="flex gap-4 my-4 mx-2 lg:m-4 bg-white relative " >
      {isMenuOpen && <div className={"w-2/5 p-2 pr-6 z-10 bg-inherit absolute md:w-1/3 lg:w-[15%] lg:p-4 "+dynamicSidebarStyle}>
        <Sidebar />
      </div>}
      <div id="outlet" className="w-full p-2 flex-1">
        <Outlet /> 
      </div>
    </div>
  );
};
export default Body;
