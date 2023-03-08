import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  closeMenu,
  openMenu,
  setIsWatchPage,
} from "../utils/toggleSidebarSlice";
import CommentsContainer from "./CommentsContainer";
import VideoDetailsContainer from "./VideoDetailsContainer";
import VideoSuggestionCard from "./VideoSuggestionCard";

const WatchPage = () => {
  const [videoSuggestions, setVideoSuggestions] = useState([]);
  const [videoDetails, setVideoDetails] = useState([]);

  const isDeviceLarge = useSelector((store)=>store.toggleSidebar.isDeviceLarge);
  const [isCommentVisible, setIsCommentVisible] = useState(false);

  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
    dispatch(setIsWatchPage(true));

    return () => {
      dispatch(openMenu());
      dispatch(setIsWatchPage(false));
    };
  }, []);

  useEffect(() => {
    getSuggections();
    getVideoDetails();
  }, [id]);

  const getSuggections = async () => {
    
    const data = await fetch(
      "http://localhost:5000/suggestions?video_id=" + id
    );
    const json = await data.json();
    console.log(json.data);
    setVideoSuggestions(json.data);
  };

  const getVideoDetails = async () => {
    const videoInfo = await fetch(
      "http://localhost:5000/video_details?video_id=" + id
    );
    const jsonVideoInfo = await videoInfo.json();
    console.log(jsonVideoInfo?.items);
    setVideoDetails(jsonVideoInfo?.items);
  };
  
  return (
    <div className={"w-full lg:flex "}>
      <div className="w-full lg:w-[70%]">
        {/* ******** Embedded Video ******************** */}
        <div className="w-full h-56 md:h-[420px] lg:h-[495px] lg:p-5 lg:pl-8">
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

        <div id="comments" className="p-3 lg:m-5 lg:ml-8">
          <div className="flex justify-between">
            <h3 className="font-medium">1400 Comments</h3>
            {!isDeviceLarge && (
              <div onClick={() => setIsCommentVisible(!isCommentVisible)}>
                open/close
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
