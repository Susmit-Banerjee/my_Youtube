import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
const Body = () => (
    <div className="flex">
        <Sidebar />
        <Outlet />
    </div>
);
export default Body;
