import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContentContainer from "./components/MainContentContainer"
import LiveChats from "./components/LiveChats";

/**
 * * APP LAYOUT
 * *
 * * Header
 * *   - SearchBar 
 * *
 * * Body
 * *   - Sidebar
 * *       - Categories
 * *   - MainContainer
 * *        - filterList
 * *        - VideoContainer
 * *            - VideoCard
 * *  
 * * WatchPage
 * *   - Embedded Video Player
 * *   - VideoSuggestonCard
 * *   - Comments
 * 
 *   
 * * Footer
 */

const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body />,
  children:[
    {
      path:"/",
      element: <MainContentContainer />
    },
    {
      path:"/live_chat_rooms",
      element: <LiveChats />
    },
    {
      path: "/watch",
      element: <WatchPage />
    }
  ]
}])

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
};
export default App;
