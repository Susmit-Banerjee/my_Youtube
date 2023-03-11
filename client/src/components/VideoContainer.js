import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsWatchPage } from "../utils/toggleSidebarSlice";
import { Shimmer_VideoContainer } from "./Shimmer";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const country = useSelector((store) => store.videoCategory.country);
  const categoryId = useSelector(
    (store) => store.videoCategory.videoCategoryId
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsWatchPage(false));
  }, []);

  useEffect(() => {
    getVideos();
  }, [country, categoryId]);

  const getVideos = async () => {
    const data = await fetch("http://localhost:5000/api?countryId=" + country + (categoryId ? "&videoCategoryId=" + categoryId : ""));

    const jsonData = await data.json();
    console.log(jsonData.items);
    setVideos(jsonData.items);
    setIsLoading(false);
  };


  return (
    <>
      <div className="flex flex-wrap gap-8 my-4 lg:mx-4">
        {isLoading ? Array(12).fill(0).map((e,index) => <Shimmer_VideoContainer key={index}/>) :
          videos.map((video) => (
            <VideoCard videoDetails={video} key={video.id} />
          ))
        }
      </div>
    </>
  );
};
export default VideoContainer;
