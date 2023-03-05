import { useDispatch, useSelector } from "react-redux";
import { HamburgerSvg, SearchSvg, UserSvg, LeftArrowSvg } from "../assets/SVG";
import { closeMenu, openMenu, toggleMenu } from "../utils/toggleSidebarSlice";
import youtubeLogo from "../assets/youtubeLogo.png";
import { useState, useEffect } from "react";
import Searchbar from "./Searchbar";

const Header = () => {
  const [mQuery, setMQuery] = useState(window.innerWidth < 1024 ? false : true);
  const [isSearchbarActive, setIsSeachbarActive] = useState(false);
  const isMenuOpen = useSelector((store) => store.toggleSidebar.isSidebarOpen);
  const isWatchPageOpen = useSelector(
    (store) => store.toggleSidebar.isWatchPage
  );

  const dispatch = useDispatch();

  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 1024px)");
    function handleChange(e) {
      if (!e.matches) {
        dispatch(closeMenu());
      } else if (e.matches) {
        dispatch(openMenu());
      }
      setMQuery(e.matches);
      setIsSeachbarActive(false);
    }
    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };

    // this is the cleanup function to remove the listener
  }, []);

  useEffect(() => {
    const element = document.getElementById("outlet");
    if (isMenuOpen && (isWatchPageOpen || !mQuery)) {
      document.body.style.overflow = "hidden";
      element.style.pointerEvents = "none";
    } else {
      document.body.style.overflow = "auto";
      element.style.pointerEvents = "all";
    }
  }, [isWatchPageOpen, isMenuOpen, mQuery]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="shadow-md p-4 pb-2 sticky top-0 z-50 bg-white">
      {isSearchbarActive && !mQuery && (
        <div className="flex gap-4 md:gap-10">
          <div onClick={() => setIsSeachbarActive(false)}> <LeftArrowSvg /> </div>
          <div className="flex-1" onBlur={() => setIsSeachbarActive(false)}>
            <Searchbar />
          </div>
        </div>
      )}
      {!isSearchbarActive && (
        <div className=" flex justify-between">
          <div className="w-1/3 lg:w-1/5 flex gap-8 md:gap-12 lg:gap-16 items-center">
            <div className=" cursor-pointer" onClick={() => toggleMenuHandler()}>
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

          {!mQuery && (
            <div className="flex justify-end flex-1 items-center pr-6" onClick={() => setIsSeachbarActive(true)}>
              <SearchSvg width="20px" height="20px" />
            </div>
          )}

          {mQuery && <Searchbar />}

          <div className="lg:w-1/5 flex justify-end px-4 relative z-0">
            <UserSvg width="40px" height="40px" />
          </div>

        </div>
      )}
    </div>
  );
};
export default Header;
