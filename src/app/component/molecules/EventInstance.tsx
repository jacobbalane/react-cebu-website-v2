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
    <div
      className=" flex flex-col md:flex-row border-2 border-foreground rounded-md shadow-md transition-all delay-75 hover:scale-[1.05]"
      data-aos="zoom-up"
      data-aos-offset="50">
      <div
        className={`relative md:w-2/5 ${
          eventStatus !== "ongoing" ? "lg:w-1/5" : "lg:w-1/3"
        }`}>
        <Image
          src={cover_photo}
          alt={name}
          width={200}
          height={100}
          className="w-full h-40 md:h-full rounded-t md:rounded-tr-none md:rounded-l border-b-2 md:border-b-0 md:border-r-2 border-foreground object-cover"
          priority={true}
        />
        {eventStatus === "ongoing" && (
          <div className="absolute top-4 left-4 rounded-full bg-background border border-foreground opacity-95 font-outfitRegular px-4 py-1 ">
            In Progress 🔥
          </div>
        )}
      </div>
      <div
        className={`flex flex-col ${
          eventStatus !== "ongoing"
            ? "lg:flex-row lg:w-4/5 lg:space-x-14 items-center"
            : "lg:w-2/3"
        } md:items-end md:w-3/5 rounded-b p-8 font-outfitRegular space-y-5 md:space-y-7 text-sm md:text-lg`}>
        <div className="flex flex-col space-y-3 md:space-y-5 w-full">
          <p className="font-outfitBold leading-tight text-lg md:text-2xl w-full">
            {name}
          </p>
          <div className="flex flex-col w-full">
            <div className="flex items-center">
              <p>{date}</p>
              <BsDot className="mx-1" />
              <p>{timeEnd ? `${timeStart} - ${timeEnd}` : timeStart}</p>
            </div>
            <p>{location}</p>
          </div>
        </div>
        <div className="w-full md:w-2/3 h-full flex items-center">
          <Button
            text="Event Page"
            link={`https://www.facebook.com/events/${source_id}`}
            accent={accent}
          />
        </div>
      </div>
    </div>
  );
}
