import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Users, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import ClubCard from "@/components/ClubCard";
import { events, clubs } from "@/lib/mock-data";
import heroImage from "@/assets/hero-events.jpg";

const stats = [
  { label: "Active Events", value: "120+", icon: Calendar },
  { label: "Campus Clubs", value: "45+", icon: Users },
  { label: "Students Engaged", value: "5K+", icon: Zap },
  { label: "Avg Rating", value: "4.8", icon: Star },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Campus events" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
        </div>
        <div className="container relative mx-auto px-4 py-24 md:py-36">
          <div className="max-w-2xl animate-slide-up">
            <span className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent">
              🎉 Spring Events are Live!
            </span>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-primary-foreground md:text-6xl">
              Discover, Connect & Engage on Campus
            </h1>
            <p className="mb-8 text-lg text-primary-foreground/80">
              Your one-stop platform for campus events, clubs, and community. Never miss out on what matters.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link to="/events">
                  Explore Events <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20" asChild>
                <Link to="/clubs">Join a Club</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-card py-8">
        <div className="container mx-auto grid grid-cols-2 gap-6 px-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xl font-bold text-card-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Upcoming Events</h2>
              <p className="mt-1 text-muted-foreground">Don't miss out on these exciting activities</p>
            </div>
            <Button variant="ghost" asChild>
              <Link to="/events">View all <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.slice(0, 3).map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Clubs */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Popular Clubs</h2>
              <p className="mt-1 text-muted-foreground">Find your community and get involved</p>
            </div>
            <Button variant="ghost" asChild>
              <Link to="/clubs">View all <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {clubs.slice(0, 3).map((club) => (
              <ClubCard key={club.id} club={club} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-xl rounded-2xl gradient-hero p-10">
            <h2 className="mb-3 text-2xl font-bold text-primary-foreground md:text-3xl">
              Ready to Get Started?
            </h2>
            <p className="mb-6 text-primary-foreground/80">
              Join thousands of students already using CampusHub to stay connected.
            </p>
            <Button size="lg" variant="secondary">
              Create Your Account <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
