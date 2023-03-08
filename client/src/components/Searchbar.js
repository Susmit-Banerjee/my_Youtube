import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Link} from "react-router-dom";
import { SearchSvg } from "../assets/SVG";
import { setCacheResults } from "../utils/searchSlice";

const Searchbar = () => {
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [isInputActive, setInputActive]= useState(false);
  const [inputQuery, setInputQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const searchCache = useSelector((store) => store.searchCache);

  const dispatch = useDispatch();

  useEffect(() => {
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
  }, [inputQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(
      "http://localhost:5000/autocomplete?q=" + inputQuery
    );
    const json = await data.json();
    console.log(json);
    setSuggestions(json);
    dispatch(setCacheResults({ [inputQuery]: json }));
  };

  return (
    <div className=" md:w-4/5 lg:w-1/2">
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
          onFocus={()=>setShowSuggestion(true)}
          onBlur={()=>setInputActive(false)}
        />
        {suggestions.length > 0 && showSuggestion &&(
          <ul id="suggestionList">
            {suggestions.map((suggestion) => (
              <li value={suggestion} key={suggestion}>
                <Link to={"/results?search_query=" + suggestion} onClick={()=>setShowSuggestion(false)} >
                  {suggestion}
                </Link>
              </li>
            ))}
          </ul>
        )}
        <button
          type="submit"
          className="px-5 py-1 bg-gray-50 border rounded-r-full border-gray-400 hover:bg-gray-200"
        >
          <SearchSvg width="20px" height="20px" />
        </button>
      </Form>

      {/* {suggestions.length > 0 && showSuggestion && (
        <div className="w-3/4 md:w-4/6 fixed lg:w-[44%] bg-white border border-gray-300 rounded-md">
          <ul className="my-3">
            {suggestions.map((suggestion) => (
              <li
                key={suggestion}
                onFocus={() => setShowSuggestion(true)}
                onBlur={() => setShowSuggestion(false)}
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
      )} */}
    </div>
  );
};
export default Searchbar;
