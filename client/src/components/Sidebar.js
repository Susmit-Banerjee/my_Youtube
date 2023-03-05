import { useDispatch, useSelector } from "react-redux";
import { setCountry, setCategory } from "../utils/videoCategorySlice";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isActiveCountry = useSelector((store) => store.videoCategory.country);
  const isActiveCategory = useSelector(
    (store) => store.videoCategory.videoCategoryId
  );
  const isLive = useSelector((store)=>store.videoCategory.isLive);

  const dispatch = useDispatch();
  
  const inactiveStyle =
    "px-4 py-1 rounded-lg hover:bg-gray-600 hover:text-white scursor-pointer text-sm";
  const activeStyle =
    "px-4 py-1 rounded-lg bg-gray-600 cursor-pointer text-white";

  return (
    <div className="w-full">
      <div className="mb-4">          
        <h1 className="font-semibold mb-1">Live</h1>
         <Link to={"/live_chat_rooms"}>
           <p className={isLive ? activeStyle:inactiveStyle}>Live Chat Room</p>
         </Link>          
      </div>

      <Link to={"/"}>
        <div>
          <h1 className="font-semibold mb-1">Explore</h1>
          <ul>
            <li className={isActiveCategory==="20" && !isLive ?activeStyle:inactiveStyle} onClick={()=>{dispatch(setCategory("20"))}}>Gaming</li>            
            <li className={isActiveCategory===null && !isLive ?activeStyle:inactiveStyle} onClick={()=>{dispatch(setCategory(null))}}>Trending</li>
            <li className={isActiveCategory==="1" && !isLive ?activeStyle:inactiveStyle} onClick={()=>{dispatch(setCategory("1"))}}>Film & Animation</li>
            <li className={isActiveCategory==="22" && !isLive ?activeStyle:inactiveStyle} onClick={()=>{dispatch(setCategory("22"))}} >Vlogs</li>
            <li className={isActiveCategory==="23" && !isLive ?activeStyle:inactiveStyle} onClick={()=>{dispatch(setCategory("23"))}}>Comedy</li>
            <li className={isActiveCategory==="10" && !isLive ?activeStyle:inactiveStyle} onClick={()=>{dispatch(setCategory("10"))}} >Music</li>
            <li className={isActiveCategory==="25" && !isLive ?activeStyle:inactiveStyle} onClick={()=>{dispatch(setCategory("25"))}} >News</li>            
          </ul>
        </div>

        <div className="my-4">
          <h1 className="font-semibold mb-1">Country</h1>
          <ul>
            <li className={isActiveCountry==="US" && !isLive ?activeStyle:inactiveStyle} onClick={()=>{dispatch(setCountry("US"))}} >USA</li>
            <li className={isActiveCountry==="JP" && !isLive ?activeStyle:inactiveStyle} onClick={()=>{dispatch(setCountry("JP"))}} >Japan</li>
            <li className={isActiveCountry==="KR" && !isLive ?activeStyle:inactiveStyle} onClick={()=>{dispatch(setCountry("KR"))}} >South Korea</li>
            <li className={isActiveCountry==="IN" && !isLive ?activeStyle:inactiveStyle} onClick={()=>{dispatch(setCountry("IN"))}} >India</li>
            <li className={isActiveCountry==="AU" && !isLive ?activeStyle:inactiveStyle} onClick={()=>{dispatch(setCountry("AU"))}} >Australia</li>
          </ul>
        </div>
      </Link>
    </div>
  );
};
export default Sidebar;
