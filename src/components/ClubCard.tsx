import { Link } from "react-router-dom";
import { Users, Calendar } from "lucide-react";
import type { Club } from "@/lib/mock-data";

const ClubCard = ({ club }: { club: Club }) => {
  return (
    <Link
      to={`/clubs/${club.id}`}
      className="group block overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
    >
      <div className="relative h-40 overflow-hidden">
        <img
          src={club.image}
          alt={club.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        <h3 className="absolute bottom-3 left-4 text-lg font-bold text-primary-foreground">
          {club.name}
        </h3>
      </div>
      <div className="p-4">
        <p className="mb-3 text-sm text-muted-foreground line-clamp-2">
          {club.description}
        </p>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5" />
            <span>{club.members} members</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            <span>{club.upcomingEvents} upcoming</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ClubCard;
