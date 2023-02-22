import { useDispatch, useSelector } from "react-redux";
import { HamburgerSvg, SearchSvg, UserSvg } from "../assets/SVG";
import { openMenu, toggleMenu } from "../utils/toggleSidebarSlice";
import youtubeLogo from "../assets/youtubeLogo.png";
import { useState, useEffect } from "react";
import { SEARCH_API } from "../utils/config";
import { setCacheResults } from "../utils/searchSlice";

const Header = () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4c92f5f78cmshc8f7ab49ce98c00p19c8c4jsne5a30d3df20b",
      "X-RapidAPI-Host": "auto-suggest-queries.p.rapidapi.com",
    },
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.searchCache);

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  
  useEffect(() => {
    //* make an api call after every key press
    //* but if diffference b/w 2 api calls is <400ms
    // * decline the API call

    //* make api call after 400ms
    const timer = setTimeout(() => {
      if (searchQuery in searchCache) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 400);

    // * this function to clear the timer is called durind unMounting.
    // * Before re-rendering, first the component gets destroyed. And during that time,
    // * this fn is called to clearTimeout. And then a new render happens and a new timer is called.
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  
  
  const getSearchSuggestions = async () => {
    const data = await fetch(SEARCH_API+searchQuery, options)
    const json = await data.json();
    console.log(json);
    setSuggestions(json);
    dispatch(setCacheResults({ [searchQuery]: json }));
  };

  return (
    <div className="shadow-md sticky top-0 bg-white">
      <div className="p-4 pb-2 flex justify-between">
        <div className="w-1/6 flex gap-16">
          <div className="cursor-pointer" onClick={() => toggleMenuHandler()}>
            <HamburgerSvg />
          </div>
          <a href="/">
            <img className="w-10 h-10" src={youtubeLogo} alt="Logo" />
          </a>
        </div>
        <div className="w-1/2 ">
          <div className="flex justify-between">
            <input
              className="px-6 py-1 flex-1 border rounded-l-full border-gray-400 outline-blue-400"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestion(true)}
              onBlur={() => setShowSuggestion(false)}
            />
            <button className="px-5 py-1 bg-gray-50 border rounded-r-full border-gray-400 hover:bg-gray-200">
              <SearchSvg width="20px" height="20px" />
            </button>
          </div>
          {suggestions.length > 0 && showSuggestion && (
            <div className=" fixed w-[44%] bg-white border border-gray-300 rounded-md">
              <ul className="my-3">
                {suggestions.map((suggestion) => (
                  <li
                    className="flex items-center gap-4 py-1 px-4 hover:bg-gray-100"
                    key={suggestion}
                  >
                    <SearchSvg width="15px" height="15px" /> {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="w-1/6 flex justify-end mx-4 px-4">
          <UserSvg width="40px" height="40px"/>
        </div>
      </div>
    </div>
  );
};
export default Header;
