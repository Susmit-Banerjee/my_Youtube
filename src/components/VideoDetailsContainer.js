
import { Dislike, LikeSVG, UserSvg, SubscribeSVG } from "../assets/SVG";
const VideoDetailsContainer = ({videoDetails}) => {
  return (
    <div id="video-info" className="m-5 ml-8">
      <div id="video name">
        <h1 className="text-lg font-medium">
          {videoDetails[0]?.snippet?.title}
        </h1>
      </div>

      <div id="channel-info" className="my-4 flex justify-between">
        <div className="flex gap-2 items-center">
          <UserSvg width="40px" height="40px" />
          <div>
            <p className="font-medium ">{videoDetails[0]?.snippet?.channelTitle}</p>
            <p className="text-xs text-gray-500">112k subscribers</p>
          </div>
        </div>

        <div id="btns" className="flex my-2">
          <button
            id="like btn"
            className="flex items-center px-3 rounded-l-full  border-r-2 bg-gray-100 hover:bg-gray-200 cursor-pointer"
          >
            <LikeSVG width="25px" height="25px" />
            <p className="text-sm font-medium">{videoDetails[0]?.statistics.likeCount}</p>
          </button>

          <button
            id="dislike btn"
            className="flex items-center px-3 rounded-r-full bg-gray-100 hover:bg-gray-200 cursor-pointer"
          >
            <Dislike width="25px" height="25px" />
          </button>

          <div
            id="subscribe btn"
            className="flex px-2 mx-4 items-center rounded-2xl border border-red-500 bg-red-600 hover:bg-red-700 cursor-pointer"
          >
            <SubscribeSVG />
            <p className="text-white pb-1 pr-1">Subscribe</p>
          </div>

          <div
            id="more btn"
            className="rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer"
          >
            <p className="tracking-[.2em] font-bold mt-[2px] pl-2 pr-[6px]">
              ...
            </p>
          </div>
        </div>
      </div>
      <div id="video-descriptions" className="bg-gray-200 rounded-lg p-2">
        <p className="font-medium">
          <span>{videoDetails[0]?.statistics.viewCount} </span>
          <span>{videoDetails[0]?.snippet?.publishedAt}</span>
        </p>
        <pre className="tracking-tighter text-sm">{videoDetails[0]?.snippet?.description}</pre>
      </div>
    </div>
  );
};
export default VideoDetailsContainer;

//((?:https\:\/\/)|(?:http\:\/\/)|(?:www\.))?([a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(?:\??)[a-zA-Z0-9\-\._\?\,\'\/\\\+&%\$#\=~]+)
