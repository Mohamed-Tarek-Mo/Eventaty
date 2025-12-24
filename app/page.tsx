"use client";
import BrowseByCategory from "@/components/sections/BrowseByCategory";
import HomeVenues from "@/components/sections/HomeVenues";
import UpComingEvents from "@/components/sections/UpComingEvents";

export default function Home() {
  return (
    <div>
      <UpComingEvents />
      <BrowseByCategory />
      <HomeVenues />
    </div>
  );
}
