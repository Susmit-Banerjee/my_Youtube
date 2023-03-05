import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchSvg } from "../assets/SVG";
import { SEARCH_API } from "../utils/config";
import { setCacheResults } from "../utils/searchSlice";


const Searchbar = () => {
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const searchCache = useSelector((store) => store.searchCache);

  const dispatch = useDispatch();

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4c92f5f78cmshc8f7ab49ce98c00p19c8c4jsne5a30d3df20b",
      "X-RapidAPI-Host": "auto-suggest-queries.p.rapidapi.com",
    },
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
    const data = await fetch(SEARCH_API + searchQuery, options);
    const json = await data.json();
    console.log(json);
    setSuggestions(json);
    dispatch(setCacheResults({ [searchQuery]: json }));
  };

  return (
    <div className=" md:w-4/5 lg:w-1/2">
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
        <div className="w-3/4 md:w-4/6 fixed lg:w-[44%] bg-white border border-gray-300 rounded-md">
          <ul className="my-3">
            {suggestions.map((suggestion) => (
              <li
                className="flex items-center gap-4 py-1 px-2 md:px-4 hover:bg-gray-100"
                key={suggestion}
              >
                <SearchSvg width="15px" height="15px" /> {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Searchbar;
