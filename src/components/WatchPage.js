import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { SUGGESTIONS_API, VIDEO_DETAILS_API } from "../utils/config";
import { closeMenu, openMenu } from "../utils/toggleSidebarSlice";
import CommentsContainer from "./CommentsContainer";
import VideoDetailsContainer from "./VideoDetailsContainer";
import VideoSuggestionCard from "./VideoSuggestionCard";

const WatchPage = () => {
  const [videoSuggestions, setVideoSuggestions] = useState([]);
  const [videoDetails, setVideoDetails] = useState([]);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    return ()=>{
      dispatch(openMenu());
    }
  }, []);

  useEffect(() => {
    getSuggections();
    getVideoDetails();
  }, [id]);

  const getSuggections = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4c92f5f78cmshc8f7ab49ce98c00p19c8c4jsne5a30d3df20b",
        "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
      },
    };

    const data = await fetch(SUGGESTIONS_API + id + "&geo=US&lang=en", options);
    const json = await data.json();
    console.log(json.data);
    setVideoSuggestions(json.data);
  };

  const getVideoDetails = async () => {
    const videoInfo = await fetch(VIDEO_DETAILS_API + id);
    const jsonVideoInfo = await videoInfo.json();
    console.log(jsonVideoInfo?.items);
    setVideoDetails(jsonVideoInfo?.items);
  };

  return (
    <div className="flex w-full">
      <div className="w-[70%]">
        {/* ******** Embedded Video ******************** */}
        <div className="m-5 ml-8">
          <iframe
            width="880"
            height="495"
            src={"https://www.youtube.com/embed/" + id + "?rel=0"}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* *********** Video Details *********************/}

        <VideoDetailsContainer videoDetails={videoDetails} />

        {/* ********** Comments Section ******************/}

        <div id="comments" className="m-5 ml-8">
          <h3 className="font-medium">1400 Comments</h3>
          <CommentsContainer />
        </div>
      </div>

      {/*  ************* Video Suggestions ********************************/}

      <div className="m-4 ml-0 w-[30%]">
        {videoSuggestions.map((video) => (
          <VideoSuggestionCard videoData={video} key={video.videoId} />
        ))}
      </div>
    </div>
  );
};
export default WatchPage;
