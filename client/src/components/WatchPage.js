import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { SUGGESTIONS_API, VIDEO_DETAILS_API } from "../utils/config";
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
  const [mQuery, setMQuery] = useState(window.innerWidth < 1024 ? true : false);
  const [isCommentVisible, setIsCommentVisible] = useState(false);
  
  const isMenuOpen = useSelector((store) => store.toggleSidebar.isSidebarOpen);
  const backdropStyle = isMenuOpen?"blur-sm":"blur-none";
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(closeMenu());
    dispatch(setIsWatchPage(true));

    let mediaQuery = window.matchMedia("(min-width: 1024px)");
    function handleChange(e) {
      //console.log(e.matches);
      setMQuery(!e.matches);
      if(e.matches===false){
        setIsCommentVisible(false);
      }
    }
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      dispatch(openMenu());
      dispatch(setIsWatchPage(false));
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    getSuggections();
    getVideoDetails();
  }, [id]);

  const getSuggections = async () => {
    // const options = {
    //   method: "GET",
    //   headers: {
    //     "X-RapidAPI-Key": "4c92f5f78cmshc8f7ab49ce98c00p19c8c4jsne5a30d3df20b",
    //     "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
    //   },
    // };

    const data = await fetch("http://localhost:5000/suggestions?video_id="+id);
    const json = await data.json();
    console.log(json.data);
    setVideoSuggestions(json.data);
  };

  const getVideoDetails = async () => {
    const videoInfo = await fetch("http://localhost:5000/video_details?video_id="+id);
    const jsonVideoInfo = await videoInfo.json();
    console.log(jsonVideoInfo?.items);
    setVideoDetails(jsonVideoInfo?.items);
  };
  console.log(window.innerWidth);
  // w- 880. h- 495,
  // width="390"
  // height="220"
  return (
    <div className={"w-full lg:flex "+backdropStyle}>
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
            {console.log(mQuery)}
            {mQuery && <div onClick={()=>setIsCommentVisible(!isCommentVisible)} >open/close</div>}
          </div>
          {(isCommentVisible || !mQuery)  && <CommentsContainer />}
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
