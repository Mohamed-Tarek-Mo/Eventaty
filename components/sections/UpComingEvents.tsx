import CardComponent from "@/components/CardComponent";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function UpComingEvents() {
  return (
    <section className="container mx-auto">
      <div className="text-center text-5xl my-10">Up Coming Events</div>
      <div className="flex py-4 gap-4 flex-wrap justify-between">
        <div className="w-1/4">
          <CardComponent isEvent={true} />
        </div>
        <div className="w-1/4">
          <CardComponent isEvent={true} />
        </div>
        <div className="w-1/4">
          <CardComponent isEvent={true} />
        </div>
      </div>

      <Button className="mx-auto my-10 py-7 flex cursor-pointer">
        <p className="flex items-center gap-2 p-6 text-secondary">
          Explore All Events <ArrowRight />
        </p>
      </Button>
    </section>
  );
}
