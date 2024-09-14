import Image from "next/image";
import { RouteSearch } from "./components/home/RouteSearch";
import { Listing } from "./components/home/Listing";

const style = {
  backgroundColor: "#ffffff",
  backgroundImage: `url("./bg-city.jpg")`,
};

export default function Home() {
  return (
    <>
      {/* Container APP */}
      <div
        id="root-container"
        className="sm:container sm:mx-auto min-h-screen p-8 sm:max-w-md bg-white rounded-2xl relative"
      >
        <div
          id="bg-city"
          style={style}
          className="absolute z-10 sm:w-full h-[calc(25vh)] left-0 bg-cover bg-center opacity-10"
        ></div>
        {/* Title */}
        <div id="home-title" className="min-h-[calc(5vh)] mb-10 z-20 relative">
          <span id="title-icon"></span>
          <h1 className="text-4xl font-extrabold text-left p-4 text-gray-600">
            Calo Digital
          </h1>
          {/* <div id="image-container" className="text-center">
            <Image
              src="/bus.png"
              alt="Calo Digital Logo"
              width={200}
              height={200}
              className="mx-auto pt-10"
            />
          </div> */}
        </div>
        {/* Route Search */}
        <div
          id="home-search"
          className="min-h-[calc(10rem)] bg-white rounded-lg p-5 shadow-xl mb-10 border-gray-300 border relative z-20"
        >
          <RouteSearch />
        </div>
        {/* Bus Listing */}
        <div id="home-listing">
          <Listing />
        </div>
      </div>
    </>
  );
}
