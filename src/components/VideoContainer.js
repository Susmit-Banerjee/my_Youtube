import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SEARCH_API, YOUTUBE_VIDEOS_API } from "../utils/config";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const country =useSelector((store)=>store.videoCategory.country);
  const categoryId = useSelector((store)=>store.videoCategory.videoCategoryId);
  console.log("country change");
  useEffect(() => {
    getVideos();
    console.log("api called");
  }, [country,categoryId]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API+country+(categoryId?"&videoCategoryId="+categoryId:""));
    const jsonData = await data.json();
    console.log(jsonData.items);
    setVideos(jsonData.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <VideoCard videoDetails={video} key={video.id}/>
      ))}
    </div>
  );
};
export default VideoContainer;
