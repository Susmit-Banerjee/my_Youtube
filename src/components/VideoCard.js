import { Link } from "react-router-dom";
import { dateFormatFunction, viewCountFormatFunction } from "../utils/helper";

const VideoCard = ({ videoDetails }) => {
  return (
    <Link
      to={"/watch?v=" + videoDetails.id}
      className="w-full md:w-2/5 lg:w-[30%] p-2 border shadow-md rounded-lg flex flex-col flex-grow"
    >
      <div>
        <img
          className="rounded-lg w-full"
          src={videoDetails?.snippet?.thumbnails?.medium?.url}
          alt="thumbnail"
        />
      </div>
      <div className="pt-2 flex flex-col justify-evenly flex-1">
        <p className="text-sm font-semibold cutoff-text">{videoDetails?.snippet?.title}</p>

        <p className="py-1 font-medium text-sm text-gray-500 video-title-cutoff">{videoDetails?.snippet?.channelTitle}</p>

        <div className="flex items-center">
          <p className="text-sm text-gray-500">
            {viewCountFormatFunction(videoDetails?.statistics?.viewCount)} views
          </p>
          <span className="mx-1 text-gray-500" >•</span>
          <p className="text-sm text-gray-500">
            {dateFormatFunction(videoDetails?.snippet?.publishedAt)}
          </p>
        </div>
      </div>
    </Link>
  );
};
export default VideoCard;
