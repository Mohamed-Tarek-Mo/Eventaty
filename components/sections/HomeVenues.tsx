import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import HomeVenuesCard from "../HomeVenuesCard";
import Link from "next/link";

export default function HomeVenues() {
  return (
    <section className="container-fluid">
      <div className="container mx-auto py-10">
        <div className="text-center text-5xl my-10 ">Venues</div>
        <div className="flex py-4 gap-4 flex-wrap justify-between">
          <HomeVenuesCard />
          <HomeVenuesCard />
          <HomeVenuesCard />
          <HomeVenuesCard />
        </div>
        <Link href='/venues'>
          <Button className="mx-auto my-10 py-7 flex cursor-pointer">
            <p className="flex font-normal items-center gap-2 p-6 text-secondary">
              Explore All Venues <ArrowRight />
            </p>
          </Button>
        </Link>
      </div>
    </section>
  );
}
