import { Link } from "react-router-dom";
import { viewCountFormatFunction } from "../utils/helper";

const VideoSuggestionCard = ({videoData}) => {
  return (
    <Link to={"/watch?v="+videoData.videoId} className="flex py-2 lg:p-2 gap-2">
      <div className="w-44">
        <img className="rounded-md" src={videoData?.thumbnail[0]?.url} alt="thumbnail" />
      </div>
      <div className="w-3/5">
        <div>
          <p className="cutoff-text font-semibold text-sm  ">{videoData?.title}</p>
        </div>
        <div>
          <p className="video-title-cutoff text-xs text-gray-500 font-medium">{videoData?.channelTitle}</p>
          <p className="text-xs text-gray-500 font-medium flex">
            <span>{viewCountFormatFunction(videoData?.viewCount)}</span>
            <span className="mx-1" >•</span>
            <span>{videoData?.publishedTimeText}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};
export default VideoSuggestionCard;
