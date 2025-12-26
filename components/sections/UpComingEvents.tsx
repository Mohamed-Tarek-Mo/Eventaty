import CardComponent from "@/components/CardComponent";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function UpComingEvents() {
  return (
    <section className="container mx-auto">
      <div className="text-center text-5xl my-10">Up Coming Events</div>
      <div className="flex py-4 gap-4 flex-wrap justify-between">
        <div className="w-3/4 md:w-2/5 lg:w-1/4 mx-auto">
          <CardComponent isEvent={true} />
        </div>
        <div className="w-3/4 md:w-2/5 lg:w-1/4 mx-auto">
          <CardComponent isEvent={true} />
        </div>
        <div className="w-3/4 md:w-2/5 lg:w-1/4 mx-auto">
          <CardComponent isEvent={true} />
        </div>
      </div>
      <Link href='/events'>
        <Button className="mx-auto my-10 py-7 flex cursor-pointer">
          <p className="flex font-normal items-center gap-2 p-6 text-secondary">
            Explore All Events <ArrowRight />
          </p>
        </Button>
      </Link>
    </section>
  );
}
