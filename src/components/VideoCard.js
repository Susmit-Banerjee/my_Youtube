import { Link } from "react-router-dom";

const VideoCard = ({ videoDetails }) => {
  return (
    <Link to={"/watch?v="+videoDetails.id} className="w-[30%] m-4 p-2 border shadow-md flex flex-col">
      <div>
        <img
          className="rounded-lg"
          src={videoDetails?.snippet?.thumbnails?.medium?.url}
          alt="thumbnail"
        />
      </div>
      <div className="py-2 flex flex-col justify-evenly flex-1">
        <p className="font-medium">{videoDetails?.snippet?.title}</p>

        <p className="text-gray-500">{videoDetails?.snippet?.channelTitle}</p>

        <p className="text-gray-500">
          {videoDetails?.statistics?.viewCount} views
        </p>
        <p className="text-gray-500">{videoDetails?.snippet?.publishedAt}</p>
      </div>
    </Link>
  );
};
export default VideoCard;
