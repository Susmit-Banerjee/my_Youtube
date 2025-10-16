import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  closeMenu,
  setIsWatchPage,
} from "../utils/toggleSidebarSlice";
import CommentsContainer from "./CommentsContainer";
import VideoDetailsContainer from "./VideoDetailsContainer";
import VideoSuggestionCard from "./VideoSuggestionCard";

const WatchPage = () => {
  const [videoSuggestions, setVideoSuggestions] = useState([]);
  const [videoDetails, setVideoDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const isDeviceLarge = useSelector((store) => store.toggleSidebar.isDeviceLarge);
  const [isCommentVisible, setIsCommentVisible] = useState(false);

  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
    dispatch(setIsWatchPage(true));
  }, []);

  useEffect(() => {
    getSuggections();
    getVideoDetails();
  }, [id]);

  const getSuggections = async () => {

    const data = await fetch(
      "https://api-youtube-z0um.onrender.com/suggestions?video_id=" + id
    );
    const json = await data.json();
    setVideoSuggestions(json.data);
    setIsLoading(false);

  };

  const getVideoDetails = async () => {
    const videoInfo = await fetch(
      "https://api-youtube-z0um.onrender.com/video_details?video_id=" + id
    );
    const jsonVideoInfo = await videoInfo.json();
    setVideoDetails(jsonVideoInfo?.items);
  };

  return (
    <div className={"w-screen lg:flex "}>
      <div className="w-full lg:w-[70%]">
        {/* ******** Embedded Video ******************** */}
        <div className="w-full h-56 md:h-[420px] lg:h-[742.5px] lg:p-5 lg:pl-8 ">
          {isLoading && <div className="w-full h-full top-5 bg-gray-300"></div>}
          <iframe
            className="w-full h-full top-5"
            src={"https://www.youtube.com/embed/" + id + "?rel=0"}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* *********** Video Details *********************/}

        <div>
          <VideoDetailsContainer videoDetails={videoDetails} />
        </div>

        {/* ********** Comments Section ******************/}

        <div id="comments" className="p-3 lg:m-5 lg:ml-8 h-">
          <div className="flex justify-between border-y border-y-gray-400 py-4">
            <h3 className="font-medium text-gray-700">1545 Comments :</h3>
            {!isDeviceLarge && (
              <div onClick={() => setIsCommentVisible(!isCommentVisible)} className="px-6 cursor-pointer" >
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
                  <path d="M12,21.7l-6.4-6.4l0.7-0.7l5.6,5.6l5.6-5.6l0.7,0.7L12,21.7z M18.4,8.6L12,2.3L5.6,8.6l0.7,0.7L12,3.7l5.6,5.6L18.4,8.6z"></path>
                </svg>
              </div>
            )}
          </div>
          {(isCommentVisible || isDeviceLarge) && <CommentsContainer />}
        </div>
      </div>

      {/*  ************* Video Suggestions ********************************/}

      <div className="p-3 lg:p-4 lg:w-[30%]">
        {videoSuggestions.map((video) => (
          <VideoSuggestionCard videoData={video} key={video.videoId} />
        ))}
      </div>
    </div>
  );
};
export default WatchPage;
