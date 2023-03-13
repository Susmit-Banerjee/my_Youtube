import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Link } from "react-router-dom";
import { SearchSvg } from "../assets/SVG";
import { setCacheResults } from "../utils/searchSlice";

const Searchbar = () => {
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [inputQuery, setInputQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const searchCache = useSelector((store) => store.searchCache);

  const dispatch = useDispatch();
  const searchbarRef = useRef();

  useEffect(() => {
    const outsideClickHandler = (event) => {
      if (!searchbarRef.current.contains(event.target)) {
        setShowSuggestion(false);
      }
    }
    document.addEventListener("pointerdown", outsideClickHandler);
    return () => {
      document.removeEventListener("pointerdown", outsideClickHandler)
    }
  }, [])

  useEffect(() => {
    if (inputQuery.length > 0) {
      //* make an api call after every key press
      //* but if diffference b/w 2 api calls is <400ms
      // * decline the API call

      //* make api call after 400ms
      const timer = setTimeout(() => {
        if (inputQuery in searchCache) {
          setSuggestions(searchCache[inputQuery]);
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
    }
  }, [inputQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(
      "https://api-youtube.cyclic.app/autocomplete?q=" + inputQuery
    );
    const json = await data.json();
    setSuggestions(json);
    dispatch(setCacheResults({ [inputQuery]: json }));
  };

  return (
    <div ref={searchbarRef} className="w-full md:w-4/5 lg:w-1/2" tabIndex={0} onFocus={() => setShowSuggestion(true)}>
      <Form
        method="get"
        action="/results"
        className="flex justify-between"
        onSubmit={() => {
          setShowSuggestion(false);
        }}
      >
        <input
          className="px-6 py-1 flex-1 border rounded-l-full border-gray-400 outline-blue-400"
          name="search_query"
          type="text"
          placeholder="Search"
          autoComplete="off"
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
        />

        <button
          type="submit"
          className="px-5 py-1 bg-gray-50 border rounded-r-full border-gray-400 hover:bg-gray-200"
        >
          <SearchSvg width="20px" height="20px" />
        </button>
      </Form>

      {suggestions.length > 0 && showSuggestion && (
        <div className="w-3/4 md:w-4/6 lg:w-[44%] fixed bg-white border border-gray-300 rounded-md">
          <ul className="my-3">
            {suggestions.map((suggestion) => (
              <li
                key={suggestion}
                onClick={() => { setShowSuggestion(false) }}
              >
                <Link
                  to={"/results?search_query=" + suggestion}
                  className="flex items-center gap-4 py-1 px-2 md:px-4 hover:bg-gray-100"
                >
                  <SearchSvg width="15px" height="15px" /> {suggestion}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
};
export default Searchbar;
