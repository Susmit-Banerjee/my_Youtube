export const Shimmer_VideoContainer = () => (
    <div className="w-full h-80 md:w-2/5 lg:w-[30%] p-2 border shadow-md rounded-lg flex gap-2 flex-col flex-grow">

        <div id="video_thumbnail" className="rounded-lg w-full h-3/4 bg-gray-300"></div>
        <div className="pt-2 flex flex-col justify-evenly flex-1 w-full">
            <div className="w-4/5 bg-gray-300 h-4"></div>
            <div className="my-2 bg-gray-300 w-2/5 h-4"></div>
        </div>
    </div>
);

export const Shimmer_SearchPage = () => (
    <div className="w-full h-52 md:flex">
        <div className="w-full h-full p-2 lg:w-1/2 rounded-xl bg-gray-400" />       

        <div className="w-full flex gap-2 py-2 md:px-4">
            <div className="w-12 h-12 rounded-full bg-gray-300 mx-auto my-2" />
            <div className="md:py-1 flex-1">
                <div className="h-5 my-1 w-full bg-gray-300" />
                <div className="h-5 w-3/5 bg-gray-300" />
                <div className="h-2 my-5  w-24 bg-gray-300" />
                <div className="h-2 mt-6 w-4/5 bg-gray-300" />
                <div className="h-2 my-2 w-4/5 bg-gray-300" />
            </div>
        </div>
    </div>
);

