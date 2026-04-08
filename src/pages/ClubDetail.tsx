import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Users, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { clubs, events } from "@/lib/mock-data";
import { toast } from "sonner";

const ClubDetail = () => {
  const { id } = useParams();
  const club = clubs.find((c) => c.id === id);

  if (!club) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold">Club not found</h1>
          <Button asChild className="mt-4">
            <Link to="/clubs">Back to Clubs</Link>
          </Button>
        </div>
      </div>
    );
  }

  const clubEvents = events.filter((e) => e.organizer === club.name).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" size="sm" asChild className="mb-6">
          <Link to="/clubs">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Clubs
          </Link>
        </Button>

        {/* Hero */}
        <div className="relative mb-8 overflow-hidden rounded-xl">
          <img src={club.image} alt={club.name} className="h-56 w-full object-cover md:h-72" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <Badge className="mb-2 bg-primary text-primary-foreground">{club.category}</Badge>
            <h1 className="text-3xl font-bold text-primary-foreground md:text-4xl">{club.name}</h1>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="mb-3 text-xl font-semibold">About</h2>
              <p className="text-muted-foreground leading-relaxed">{club.description}</p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We welcome members from all backgrounds and skill levels. Join us for regular meetings, 
                workshops, and social events throughout the semester. Whether you're looking to develop 
                new skills, meet like-minded people, or just have fun — we've got you covered.
              </p>
            </div>

            {clubEvents.length > 0 && (
              <div>
                <h2 className="mb-4 text-xl font-semibold">Upcoming Events</h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  {clubEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="sticky top-24 space-y-4">
              <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                <div className="mb-4 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Users className="h-5 w-5 text-primary" />
                    <span>{club.members} members</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>{club.upcomingEvents} upcoming events</span>
                  </div>
                </div>
                <Button className="w-full" size="lg" onClick={() => toast.success("Welcome to " + club.name + "!")}>
                  Join Club
                </Button>
                <Button variant="outline" className="mt-2 w-full" size="sm">
                  <MessageCircle className="mr-1.5 h-4 w-4" /> Group Chat
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ClubDetail;
