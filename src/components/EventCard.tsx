import { Link } from "react-router-dom";
import { Calendar, MapPin, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Event } from "@/lib/mock-data";

const EventCard = ({ event }: { event: Event }) => {
  const spotsLeft = event.capacity - event.registered;
  const fillPercent = (event.registered / event.capacity) * 100;

  return (
    <Link
      to={`/events/${event.id}`}
      className="group block overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <Badge className="absolute left-3 top-3 bg-primary text-primary-foreground">
          {event.category}
        </Badge>
      </div>
      <div className="p-5">
        <h3 className="mb-2 text-lg font-semibold text-card-foreground line-clamp-1 group-hover:text-primary transition-colors">
          {event.title}
        </h3>
        <p className="mb-3 text-sm text-muted-foreground line-clamp-2">
          {event.description}
        </p>
        <div className="mb-4 space-y-1.5">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" />
            <span>{new Date(event.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} · {event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            <span className="line-clamp-1">{event.location}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Users className="h-3.5 w-3.5" />
            <span>{spotsLeft} spots left</span>
          </div>
          <div className="h-1.5 w-20 overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{ width: `${fillPercent}%` }}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
