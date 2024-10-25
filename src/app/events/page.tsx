"use client";

// Importing layout component
import { useEffect, useState } from "react";
import SectionLayout from "../component/layouts/SectionLayout";

// Importing molecule components
import CallToAction from "../component/molecules/CallToAction";
import EventInstance from "../component/molecules/EventInstance";

import { getEventStatus } from "../scripts/scripts";
import Upnext from "../component/atoms/Upnext";

interface Event {
  id: number;
  name: string;
  start_time: Date;
  end_time: Date | null;
  location: string;
  cover_photo: string;
  source_id: number;
  eventStatus: string;
}

export default function Events() {
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [ongoingEvents, setOngoingEvents] = useState<Event[]>([]);
  const [pastEvents, setPastEvents] = useState<Event[]>([]);

  const fetchData = async () => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;

    const upcoming: Event[] = [];
    const ongoing: Event[] = [];
    const past: Event[] = [];

    try {
      const response = await fetch(
        "https://qkhlgxdtodyyemkarouo.supabase.co/rest/v1/events?account_id=eq.285763702318843&order=start_time.desc",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
            apikey: `${apiKey}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      result.forEach((event: Event) => {
        const start_time = new Date(event.start_time);
        const end_time = event.end_time ? new Date(event.end_time) : null;
        const status = getEventStatus(start_time, end_time);
        const eventWithStatus = {
          ...event,
          eventStatus: status,
        };
        switch (status) {
          case "upcoming":
            upcoming.push(eventWithStatus);
            break;
          case "ongoing":
            ongoing.push(eventWithStatus);
            break;
          case "past":
            past.push(eventWithStatus);
            break;
          default:
            break;
        }
      });
      if (ongoing.length === 0 && upcoming.length > 0) {
        ongoing.push(upcoming[0]);
        upcoming.shift();
      }

      setUpcomingEvents(upcoming);
      setOngoingEvents(ongoing);
      setPastEvents(past);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <SectionLayout fitHeight={true} reducePaddingY={true}>
        <div className="space-y-12 md:w-[40rem] lg:w-[60rem]">
          <div className="flex flex-col md:items-center space-y-2 md:space-y-6">
            <p className="font-outfitBold text-3xl md:text-5xl lg:text-6xl">
              React Cebu <span className="text-accent-1">Events</span>
            </p>
            <p className="font-outfitRegular text-lg md:text-2xl leading-tight">
              Join us for exciting workshops, meetups, and webinars!
            </p>
          </div>

          <div className="space-y-4 md:space-y-8 lg:space-y-12">
            {ongoingEvents.length > 0 ? (
              <div className="space-y-4 md:space-y-8 lg:space-y-12 w-full">
                {ongoingEvents?.map((event) => (
                  <EventInstance
                    key={event.id}
                    data={event}
                    accent={true}
                    highlightEvent={true}
                  />
                ))}
              </div>
            ) : (
              <div className="text-xl md:text-3xl lg:text-4xl w-full font-outfitMedium leading-tight md:text-center">
                No upcoming events at the moment, but don’t worry! 🎉 Check out
                our past events to see what we’ve been up to. Explore and get
                inspired!
              </div>
            )}
            {upcomingEvents.length > 0 && (
              <div className="flex flex-col space-y-4 md:space-y-8 lg:space-y-12 w-full">
                <Upnext />
                {upcomingEvents?.map((event) => (
                  <EventInstance key={event.id} data={event} />
                ))}
              </div>
            )}
          </div>
          <div className=" flex flex-col md:items-center lg:w-[50rem] mx-auto">
            <p className="font-outfitBold text-2xl md:text-4xl lg:text-5xl my-8 md:my-12">
              Our Past Events
            </p>
            {pastEvents.length > 0 ? (
              <div className="space-y-4 md:space-y-8 w-full">
                {pastEvents?.map((event) => (
                  <EventInstance key={event.id} data={event} />
                ))}
              </div>
            ) : (
              <div className="text-xl md:text-3xl lg:text-4xl w-full font-outfitMedium leading-tight md:text-center">
                No past events yet. Stay tuned for more exciting events! 🎉
              </div>
            )}
          </div>
        </div>
      </SectionLayout>
      <CallToAction
        title="Get in Touch"
        description="We’d love to hear from you! Reach out for inquiries, support, or collaboration."
        buttonText="Go to Connect Page"
        linkTo="connect"
        index={3}
      />
    </>
  );
}
