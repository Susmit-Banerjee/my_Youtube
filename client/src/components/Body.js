import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
const Body = () => {
  const isMenuOpen = useSelector((store) => store.toggleSidebar.isSidebarOpen);
  const isWatchPageOpen = useSelector(
    (store) => store.toggleSidebar.isWatchPage
  );
  const isDeviceLarge = useSelector(
    (store) => store.toggleSidebar.isDeviceLarge
  );
  const dynamicSidebarStyle =
    isWatchPageOpen && window.innerWidth >= 1024 ? "absolute" : "lg:static";
  const backdropStyle =
    isMenuOpen && (isWatchPageOpen || !isDeviceLarge) ? "blur-sm" : "blur-none";

  return (
    <>
      <Header />
      <div className="flex gap-4 my-4 lg:m-4 relative h-full">
        {isMenuOpen && (
          <div
            className={
              "w-2/5 h-full p-2 z-10 bg-white absolute md:w-1/3 lg:w-[15%] lg:p-4 " +
              dynamicSidebarStyle
            }
          >
            <Sidebar />
          </div>
        )}
        <div
          id="outlet"
          className={"w-full flex-1 h-full " + backdropStyle}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default Body;
