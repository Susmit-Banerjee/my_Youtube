import { UserSvg } from "../assets/SVG";
const ChatMsgCard = ({chatDetails}) => (
  <div className="flex gap-2 mt-2 py-2 border-b border-b-gray-200">
    <figure>
      <UserSvg width="26px" height="26px" />
    </figure>
    <p className="text-sm font-semibold text-gray-600">
      {chatDetails.name+": "}
      <span className="pl-2 text-black font-normal">
        {chatDetails.msg}
      </span>
    </p>
  </div>
);

export default ChatMsgCard;
