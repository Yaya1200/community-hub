export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  capacity: number;
  registered: number;
  image: string;
  organizer: string;
  isPublic: boolean;
}

export interface Club {
  id: string;
  name: string;
  description: string;
  members: number;
  category: string;
  image: string;
  upcomingEvents: number;
}

export const categories = [
  "All",
  "Academic",
  "Sports",
  "Music",
  "Tech",
  "Arts",
  "Social",
  "Workshop",
];

export const events: Event[] = [
  {
    id: "1",
    title: "Annual Hackathon 2026",
    description: "48-hour coding marathon with amazing prizes. Build innovative solutions to real-world problems with fellow developers.",
    date: "2026-04-25",
    time: "09:00 AM",
    location: "Engineering Building, Hall A",
    category: "Tech",
    capacity: 200,
    registered: 156,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
    organizer: "Tech Club",
    isPublic: true,
  },
  {
    id: "2",
    title: "Spring Music Festival",
    description: "Live performances from campus bands and special guest artists. Food trucks, art installations, and good vibes.",
    date: "2026-05-01",
    time: "04:00 PM",
    location: "University Amphitheater",
    category: "Music",
    capacity: 500,
    registered: 342,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
    organizer: "Music Society",
    isPublic: true,
  },
  {
    id: "3",
    title: "AI & Machine Learning Workshop",
    description: "Hands-on workshop covering the latest in AI/ML. Bring your laptop and curiosity!",
    date: "2026-04-18",
    time: "02:00 PM",
    location: "Computer Lab 301",
    category: "Workshop",
    capacity: 50,
    registered: 48,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
    organizer: "AI Research Group",
    isPublic: true,
  },
  {
    id: "4",
    title: "Inter-University Basketball Tournament",
    description: "Cheer for our team as they compete against top universities in the region.",
    date: "2026-04-20",
    time: "10:00 AM",
    location: "Sports Complex",
    category: "Sports",
    capacity: 300,
    registered: 210,
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=400&fit=crop",
    organizer: "Athletics Department",
    isPublic: true,
  },
  {
    id: "5",
    title: "Photography Exhibition",
    description: "Student photography showcase featuring works from across all departments.",
    date: "2026-05-10",
    time: "11:00 AM",
    location: "Art Gallery, Main Campus",
    category: "Arts",
    capacity: 150,
    registered: 67,
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop",
    organizer: "Photography Club",
    isPublic: true,
  },
  {
    id: "6",
    title: "Career Fair 2026",
    description: "Meet top employers and explore internship and job opportunities across industries.",
    date: "2026-04-30",
    time: "09:00 AM",
    location: "Convention Center",
    category: "Academic",
    capacity: 1000,
    registered: 756,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
    organizer: "Career Services",
    isPublic: true,
  },
];

export const clubs: Club[] = [
  {
    id: "1",
    name: "Tech Club",
    description: "Building the future through code, innovation, and collaboration. Weekly meetups, hackathons, and tech talks.",
    members: 234,
    category: "Tech",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop",
    upcomingEvents: 3,
  },
  {
    id: "2",
    name: "Music Society",
    description: "For music lovers and creators. Open jam sessions, concerts, and music production workshops.",
    members: 189,
    category: "Music",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=400&fit=crop",
    upcomingEvents: 2,
  },
  {
    id: "3",
    name: "Photography Club",
    description: "Capture life through your lens. Photo walks, editing workshops, and exhibitions.",
    members: 156,
    category: "Arts",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&h=400&fit=crop",
    upcomingEvents: 1,
  },
  {
    id: "4",
    name: "Debate Society",
    description: "Sharpen your rhetoric and critical thinking. Weekly debates on current affairs and philosophy.",
    members: 98,
    category: "Academic",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
    upcomingEvents: 2,
  },
  {
    id: "5",
    name: "Sports Federation",
    description: "United in athletics. Managing all university sports teams and intramural leagues.",
    members: 412,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1461896836934-bd45ba25a6ab?w=600&h=400&fit=crop",
    upcomingEvents: 5,
  },
  {
    id: "6",
    name: "Art Collective",
    description: "A creative space for painters, sculptors, digital artists, and anyone who loves making art.",
    members: 134,
    category: "Arts",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=400&fit=crop",
    upcomingEvents: 1,
  },
];
