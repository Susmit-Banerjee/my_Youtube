const FilterButonsList = () => {
  return (
    <div className="flex gap-4 flex-wrap">
      <div className="px-2 py-1 rounded-lg bg-gray-100 cursor-pointer hover:bg-gray-600 hover:text-white ">All</div>
      <div className="px-2 py-1 rounded-lg bg-gray-100 cursor-pointer hover:bg-gray-600 hover:text-white ">Gamimg</div>
      <div className="px-2 py-1 rounded-lg bg-gray-100 cursor-pointer hover:bg-gray-600 hover:text-white ">Podcasts</div>
      <div className="px-2 py-1 rounded-lg bg-gray-100 cursor-pointer hover:bg-gray-600 hover:text-white ">Animation</div>
      <div className="px-2 py-1 rounded-lg bg-gray-100 cursor-pointer hover:bg-gray-600 hover:text-white ">News</div> 
      <div className="px-2 py-1 rounded-lg bg-gray-100 cursor-pointer hover:bg-gray-600 hover:text-white ">Kpop</div>
      <div className="px-2 py-1 rounded-lg bg-gray-100 cursor-pointer hover:bg-gray-600 hover:text-white ">Movies</div>
    </div>
  );
};
export default FilterButonsList;
