import { Link } from "react-router-dom";

const VideoSuggestionCard = ({videoData}) => {
  return (
    <Link to={"/watch?v="+videoData.videoId} className="flex p-2 gap-2">
      <div className="w-44">
        <img className="rounded-md" src={videoData?.thumbnail[0]?.url} alt="thumbnail" />
      </div>
      <div className="w-3/5">
        <div>
          <p className="font-semibold text-sm">{videoData?.title}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 font-medium">{videoData?.channelTitle}</p>
          <p className="text-xs text-gray-500 font-medium">
            <span>{videoData?.viewCount}</span>
            <span>.</span>
            <span>{videoData?.publishedTimeText}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};
export default VideoSuggestionCard;
