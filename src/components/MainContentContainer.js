import VideoContainer from "./VideoContainer";
import FilterButtonsList from "./FilterButonsList";
const MainContentContainer = () => {
  return (
    <div className="w-5/6">
      <FilterButtonsList />
      <VideoContainer/>
    </div>

  )
}
export default MainContentContainer;