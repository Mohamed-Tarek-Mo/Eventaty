import { Button } from "@/components/ui/button";
import { Hammer, Headphones, Sparkles, Volleyball } from "lucide-react";

export default function CategoryButton({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="w-1/5 group">
      <Button className="w-full flex flex-col justify-center items-center py-18 bg-linear-to-t from-[#1E293B] to-primary cursor-pointer  hover:bg-secondary hover:bg-none hover:text-primary">
        <div className="bg-secondary/20 group-hover:bg-primary/20 text-secondary group-hover:text-primary p-3 rounded-full">
          {icon}
        </div>
        <p className="text-2xl font-thin">{title}</p>
      </Button>
    </div>
  );
}
