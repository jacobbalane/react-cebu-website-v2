// Importing next/image
import Image from "next/image";

// Importing icons
import { BsDot } from "react-icons/bs";

// Importing component
import Button from "../atoms/Button";

// Importing scripts
import { getDate, getTime } from "../../scripts/scripts";

interface Event {
  readonly accent?: boolean;
  readonly data: {
    id: number;
    name: string;
    start_time: Date;
    end_time: Date | null;
    location: string;
    cover_photo: string;
    source_id: number;
    eventStatus: string;
  };
}

export default function EventInstance({
  accent = false,
  data: {
    name,
    start_time,
    end_time,
    location,
    cover_photo,
    source_id,
    eventStatus,
  },
}: Event) {
  const date = getDate(start_time);
  const timeStart = getTime(start_time);
  const timeEnd = getTime(end_time);

  return (
    <div className=" flex flex-col border-2 border-foreground rounded-md shadow-md">
      <div className="relative">
        <Image
          src={cover_photo}
          alt={name}
          width={200}
          height={100}
          className="w-full h-40 rounded-t border-b-2 border-foreground object-cover"
          priority={true}
        />
        {eventStatus === "ongoing" && (
          <div className="absolute top-4 left-4 rounded-full bg-background border border-foreground opacity-95 font-outfitRegular px-4 py-1 ">
            In Progress 🔥
          </div>
        )}
      </div>
      <div className="grow rounded-b p-8 font-outfitRegular space-y-5 text-sm">
        <p className="font-outfitBold leading-tight">{name}</p>
        <div className="flex flex-col">
          <div className="flex items-center">
            <p>{date}</p>
            <BsDot className="mx-1" />
            <p>{timeEnd ? `${timeStart} - ${timeEnd}` : timeStart}</p>
          </div>
          <p>{location}</p>
        </div>
        <Button
          text="Event Page"
          link={`https://www.facebook.com/events/${source_id}`}
          accent={accent}
        />
      </div>
    </div>
  );
}
