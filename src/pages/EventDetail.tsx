import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, Users, Clock, Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { events } from "@/lib/mock-data";
import { toast } from "sonner";

const EventDetail = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold">Event not found</h1>
          <Button asChild className="mt-4">
            <Link to="/events">Back to Events</Link>
          </Button>
        </div>
      </div>
    );
  }

  const spotsLeft = event.capacity - event.registered;
  const fillPercent = (event.registered / event.capacity) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" size="sm" asChild className="mb-6">
          <Link to="/events">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Events
          </Link>
        </Button>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-xl">
              <img
                src={event.image}
                alt={event.title}
                className="h-64 w-full object-cover md:h-96"
              />
            </div>
            <div className="mt-6">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Badge className="bg-primary text-primary-foreground">{event.category}</Badge>
                {event.isPublic && <Badge variant="outline">Public Event</Badge>}
              </div>
              <h1 className="mb-3 text-3xl font-bold">{event.title}</h1>
              <p className="text-muted-foreground leading-relaxed">{event.description}</p>

              <div className="mt-8">
                <h2 className="mb-4 text-xl font-semibold">About This Event</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Join us for an unforgettable experience! This event is organized by {event.organizer} and 
                  promises to be one of the highlights of the semester. Whether you're a seasoned participant 
                  or joining for the first time, there's something for everyone. Connect with fellow students, 
                  learn new skills, and make lasting memories.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="sticky top-24 space-y-4">
              <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">{new Date(event.date).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}</p>
                      <p className="text-muted-foreground">{event.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="h-5 w-5 text-primary" />
                    <p>{event.location}</p>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Users className="h-5 w-5 text-primary" />
                    <p>{event.registered} / {event.capacity} registered</p>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="h-5 w-5 text-primary" />
                    <p>Organized by {event.organizer}</p>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="mb-2 flex justify-between text-xs text-muted-foreground">
                    <span>{spotsLeft} spots left</span>
                    <span>{Math.round(fillPercent)}% full</span>
                  </div>
                  <Progress value={fillPercent} className="h-2" />
                </div>

                <Button 
                  className="mt-5 w-full" 
                  size="lg"
                  onClick={() => toast.success("Successfully registered! Check your email for confirmation.")}
                >
                  RSVP Now
                </Button>

                <div className="mt-3 flex gap-2">
                  <Button variant="outline" className="flex-1" size="sm" onClick={() => toast.success("Added to favorites!")}>
                    <Heart className="mr-1.5 h-4 w-4" /> Save
                  </Button>
                  <Button variant="outline" className="flex-1" size="sm" onClick={() => toast.success("Link copied!")}>
                    <Share2 className="mr-1.5 h-4 w-4" /> Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventDetail;
