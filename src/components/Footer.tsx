import { Compass } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-secondary/50 py-12">
    <div className="container mx-auto px-4">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-hero">
              <Compass className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold">CampusHub</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Your centralized platform for campus events, clubs, and community engagement.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Platform</h4>
          <div className="space-y-2">
            <Link to="/events" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Events</Link>
            <Link to="/clubs" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Clubs</Link>
            <Link to="/calendar" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Calendar</Link>
          </div>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Resources</h4>
          <div className="space-y-2">
            <span className="block text-sm text-muted-foreground">Help Center</span>
            <span className="block text-sm text-muted-foreground">Community Guidelines</span>
            <span className="block text-sm text-muted-foreground">Contact Us</span>
          </div>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Legal</h4>
          <div className="space-y-2">
            <span className="block text-sm text-muted-foreground">Privacy Policy</span>
            <span className="block text-sm text-muted-foreground">Terms of Service</span>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © 2026 CampusHub. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
