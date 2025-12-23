import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import img from "@/public/3.png";
import { Badge } from "./ui/badge";
import { Calendar, MapPin } from "lucide-react";
import { Button } from "./ui/button";

export default function CardComponent({
  data,
  isEvent,
}: {
  data?: any;
  isEvent?: boolean;
}) {
  return (
    <Card className="pt-0 rounded-xl overflow-hidden group">
      <CardHeader className="p-0 relative">
        <img
          src="/ekko.png"
          alt="Event Image"
          className="w-full h-48 object-fit "
        />
        <Badge variant="secondary" className="absolute top-0 right-0 m-4">
          {!isEvent ? "Concert" : "Featured"}
        </Badge>
        {!isEvent && (
          <Badge className="absolute top-0 left-0 m-4">Featured</Badge>
        )}
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold mb-3 group-hover:text-secondary">
          {!isEvent ? "Summer Music Festival 2025" : "Blue Note Jazz Club"}
        </h3>
        {!isEvent && (
          <CardDescription>
            Intimate jazz club with excellent acoustics and a cozy atmosphere.
            Perfect for live music performances.
          </CardDescription>
        )}
        <div className="text-sm text-muted-foreground mb-2 flex gap-2 items-center">
          <Calendar className="w-5 h-5 text-secondary" />
          <p>
            {!isEvent
              ? "Jul 15, 2025 at 18:00"
              : "789 Jazz Avenue, San Francisco, CA"}
          </p>
        </div>
        <div className="text-sm text-muted-foreground flex gap-2 items-center">
          <MapPin className="w-5 h-5 text-secondary" />
          <p>{!isEvent ? "Grand Arena" : "Capacity: 500 people"}</p>
        </div>
      </CardContent>
      <CardFooter className="pt-0 flex justify-between items-center">
        {!isEvent ? (
          <div>
            <p className="text-sm text-muted-foreground">Starting from</p>
            <span className="font-semibold text-2xl text-secondary">
              $99.99
            </span>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">0 upcoming events</p>
        )}
        <div>
          <Button className="p-5 group-hover:bg-secondary group-hover:text-white">
            View Details
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
