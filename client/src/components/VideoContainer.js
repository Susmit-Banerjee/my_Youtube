import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SEARCH_API, YOUTUBE_VIDEOS_API } from "../utils/config";
import { setIsWatchPage } from "../utils/toggleSidebarSlice";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const country = useSelector((store) => store.videoCategory.country);
  const categoryId = useSelector(
    (store) => store.videoCategory.videoCategoryId
  );

  const dispatch = useDispatch();

  console.log("country change");
  useEffect(() => {
    dispatch(setIsWatchPage(false));
  }, []);

  useEffect(() => {
    getVideos();
    console.log("api called");
  }, [country, categoryId]);

  const getVideos = async () => {
    const data = await fetch("http://localhost:5000/api?countryId="+country+(categoryId ? "&videoCategoryId=" + categoryId : ""));
    // const data = await fetch(
    //   YOUTUBE_VIDEOS_API +
    //     country +
    //     (categoryId ? "&videoCategoryId=" + categoryId : "")
    // );
    const jsonData = await data.json();
    console.log(jsonData.items);
    setVideos(jsonData.items);
  };

  return (
    <div className="flex flex-wrap gap-8 my-4 lg:mx-4">
      {videos.map((video) => (
        <VideoCard videoDetails={video} key={video.id} />
      ))}
    </div>
  );
};
export default VideoContainer;
