import { useDispatch, useSelector } from "react-redux";
import { HamburgerSvg, SearchSvg, UserSvg, LeftArrowSvg } from "../assets/SVG";
import { closeMenu, openMenu, setIsDeviceLarge, toggleMenu } from "../utils/toggleSidebarSlice";
import youtubeLogo from "../assets/youtubeLogo.png";
import { useState, useEffect } from "react";
import Searchbar from "./Searchbar";

const Header = () => {
  const [isSearchbarActive, setIsSeachbarActive] = useState(false);
  const isMenuOpen = useSelector((store) => store.toggleSidebar.isSidebarOpen);
  const isWatchPageOpen = useSelector(
    (store) => store.toggleSidebar.isWatchPage
  );
  const isDeviceLarge = useSelector((store)=>store.toggleSidebar.isDeviceLarge);

  const dispatch = useDispatch();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    function handleChange(e) {
      if (e.matches) {        
        dispatch(openMenu());       
      }
      else if (!e.matches) {
        dispatch(closeMenu());
      }
      dispatch(setIsDeviceLarge(e.matches));
      setIsSeachbarActive(false);
    }
    mediaQuery.addEventListener("change", handleChange);

    // this is the cleanup function to remove the listener
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    const element = document.getElementById("outlet");
    if (isMenuOpen && (isWatchPageOpen || !isDeviceLarge)) {
      document.body.style.overflow = "hidden";
      element.style.pointerEvents = "none";
    } else {
      document.body.style.overflow = "auto";
      element.style.pointerEvents = "all";
    }
  }, [isWatchPageOpen, isMenuOpen, isDeviceLarge]);

  return (
    <div className="shadow-md p-4 pb-2 sticky top-0 z-40 bg-white">
      {isSearchbarActive && !isDeviceLarge && (
        <div className="flex gap-4 md:gap-10">
          <div onClick={() => setIsSeachbarActive(false)}> <LeftArrowSvg /> </div>
          <div className="flex-1">
            <Searchbar />
          </div>
        </div>
      )}
      {!isSearchbarActive && (
        <div className=" flex justify-between">
          <div className="w-1/3 lg:w-1/5 flex gap-8 md:gap-12 lg:gap-16 items-center">
            <div className=" cursor-pointer" onClick={() => {dispatch(toggleMenu())}}>
              <HamburgerSvg />
            </div>
            <a href="/">
              <img
                className="w-7 h-7 md:w-10 md:h-10"
                src={youtubeLogo}
                alt="Logo"
              />
            </a>
          </div>

          {!isDeviceLarge && (
            <div className="flex justify-end flex-1 items-center pr-6" onClick={() => setIsSeachbarActive(true)}>
              <SearchSvg width="20px" height="20px" />
            </div>
          )}

          {isDeviceLarge && <Searchbar />}

          <div className="lg:w-1/5 flex justify-end px-4">
            <UserSvg width="40px" height="40px" />
          </div>

        </div>
      )}
    </div>
  );
};
export default Header;
