import BrowseByCategory from "@/components/sections/BrowseByCategory";
import UpComingEvents from "@/components/sections/UpComingEvents";

export default function Home() {
  return (
    <div>
      <UpComingEvents />
      <BrowseByCategory />
    </div>
  );
}
