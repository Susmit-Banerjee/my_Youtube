import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { viewCountFormatFunction } from "../utils/helper";

const SearchResultCard = ({ videoDetails }) => {
  return (
    <Link to={"/watch?v=" + videoDetails.videoId} className="w-full md:flex">
      <div className="w-full p-2 lg:w-1/2">
        <img
          className="w-full rounded-xl"
          src={
            videoDetails?.thumbnails[1]?.url || videoDetails?.thumbnails[0]?.url
          }
          alt="video_thumbnail"
        />
      </div>

      <div className="w-full flex gap-2 py-2 md:px-4">
        <div className="w-12">
          <img
            className="w-full mx-auto my-2 rounded-full"
            loading="lazy"
            src={videoDetails?.author?.avatar[0]?.url}
            alt="channel_img"
          />
        </div>
        <div className="md:py-1 flex-1">
          <div>
            <h1 className="md:text-lg font-medium cutoff-text">{videoDetails?.title}</h1>
          </div>
          <div className="px-1">
            <p className="text-sm font-semibold text-gray-500 video-title-cutoff">
              {videoDetails?.author?.title}
            </p>
            <p>
              <span className="text-xs text-gray-500">
                {viewCountFormatFunction(videoDetails?.stats?.views)} views
              </span>
              <span className="mx-1 text-xs text-gray-500">•</span>
              <span className="text-xs text-gray-500">
                {videoDetails?.publishedTimeText}
              </span>
            </p>
          </div>
          {window.innerWidth>=720 && <div className="my-4 px-1">
            <p className="text-xs text-gray-500">
              {videoDetails?.descriptionSnippet}
            </p>
          </div>}
        </div>
      </div>
    </Link>
  );
};

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const search_query = searchParams.get("search_query");

  useEffect(() => {
    console.log("api called");
    getSearchResults();
  }, [searchParams]);

  const getSearchResults = async () => {
    const results = await fetch(
      "http://localhost:5000/results?search_query=" + search_query
    );
    const jsonData = await results.json();
    console.log(jsonData);
    setSearchResults(jsonData);
  };

  return (
    <div className="flex flex-col gap-4">
      {searchResults.map((content,index) => {
        if(content.type!=='video'){
          return null;
        }
        return(<SearchResultCard
          videoDetails={content?.video}
          key={content?.video?.videoId+index}
        />)
})}
    </div>
  );
};
export default SearchPage;
