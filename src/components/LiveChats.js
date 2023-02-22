import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserSvg } from "../assets/SVG";
import { addMessage } from "../utils/chatSlice";
import { generateRandomChat, generateRandomNames } from "../utils/helper";
import { setIsLive } from "../utils/videoCategorySlice";
import ChatMsgCard from "./ChatMsgCard";

const LiveChats = () => {
  const [myMessage, setMyMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chatData.allChats);

  useEffect(() => {
    
    dispatch(setIsLive(true));

    //* ************************* API POlling **********************************

    const i = setInterval(() => {
      console.log("Api Polling!!");
      //here we need to fetch here in actual application
      dispatch(
        addMessage({
          name: generateRandomNames(),
          msg: generateRandomChat(),
        })
      );
    }, 1500);

    return () => {
      dispatch(setIsLive(false));
      clearInterval(i);
    }
  }, []);


  return (
    <div className="w-5/6 h-[580px] flex justify-center pt-4">
      <div className="w-3/5 border border-gray-300 rounded-lg flex flex-col justify-between p-4 pb-1">
        <div className="border-b border-b-gray-300">
          <p className="text-xl pb-2">Top Chats</p>
        </div>
        <div
          className="h-4/5 overflow-y-scroll bg-gray-50 rounded-b-lg p-2 flex flex-col-reverse"
          id="chats"
        >
          {chatMessages.map((msg, index) => (
            <ChatMsgCard chatDetails={msg} key={index} />
          ))}
        </div>
        <form
          id="send msg"
          className="mt-2 pt-2"
          onSubmit={(e) => {
            e.preventDefault();
            //console.log(myMessage);
            dispatch(
              addMessage({
                name: "Susmit Banerjee",
                msg: myMessage,
              })
            );
            setMyMessage("");
          }}
        >
          <div className="flex gap-4">
            <div>
              <UserSvg width="26px" height="26px" />
            </div>
            <div className="w-full">
              <p className="text-sm font-medium">Susmit</p>
              <input
                className="w-full py-1 outline-none border-b border-gray-300 focus:border-b-2 focus:border-b-gray-500 "
                type="text"
                placeholder="say something"
                value={myMessage}
                onChange={(e) => {
                  setMyMessage(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex justify-end px-4 py-2">
            <button>Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LiveChats;
