import Image from "next/image";
import { RouteSearch } from "./components/home/RouteSearch";
import { Listing } from "./components/home/Listing";

export default function Home() {
  return (
    <>
      {/* Container APP */}
      <div
        id="root-container"
        className="sm:container sm:mx-auto border-2 border-red-600 min-h-screen p-8"
      >
        {/* Title */}
        <div id="home-title">
          <span id="title-icon"></span>
          <h1 className="text-4xl">Calo Digital</h1>
        </div>
        {/* Route Search */}
        <div id="home-search">
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
