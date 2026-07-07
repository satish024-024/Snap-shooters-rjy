export interface PhotoItem {
  id: string;
  url: string;
  category: string;
  title: string;
  description?: string;
  widthRatio?: string; // e.g. 'col-span-1', 'col-span-2'
  heightRatio?: string; // e.g. 'row-span-1', 'row-span-2'
}

export interface LoveStory {
  id: string;
  couple: string;
  venue: string;
  city: string;
  date: string;
  coverImage: string;
  tags: string[];
  story: string;
  celebration: string;
  filmUrl: string;
  albumImages: string[];
}

export interface CraftedExperience {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface Testimonial {
  id: string;
  couple: string;
  text: string;
  rating: number;
  source: string;
  videoUrl?: string;
  thumbnail?: string;
}

export interface MapHub {
  id: string;
  city: string;
  state: string;
  lat: number; // For SVG plotting coordinates (x percent)
  lng: number; // For SVG plotting coordinates (y percent)
  title: string;
  venue: string;
  imageUrl: string;
}

export interface JourneyStep {
  step: string;
  title: string;
  description: string;
  details: string;
  image: string;
}

// Highly stable, live active Unsplash IDs for Indian/Luxury Weddings (now replaced with local custom-generated 4K assets)
export const IMG_BRIDE_RED = "/images/bride_red.png";
export const IMG_COUPLE_PALACE = "/images/couple_palace.png";
export const IMG_UNION_GARLANDS = "/images/union_garlands.png";
export const IMG_FLORAL_MANDAP = "/images/floral_mandap.png";
export const IMG_ENGAGEMENT_RINGS = "/images/engagement_rings.png";
export const IMG_SUNSET_COUPLE = "/images/sunset_couple.png";
export const IMG_DETAIL_RINGS = "/images/detail_rings.png";
export const IMG_BRIDE_PREP = "/images/bride_prep.png";
export const IMG_COUPLE_DANCE = "/images/couple_dance.png";
export const IMG_FOUNDER_PORTRAIT = "/images/founder_portrait.png";

// 6-8 Iconic photographs for "Signature Moments"
export const SIGNATURE_MOMENTS: PhotoItem[] = [
  {
    id: "sm-1",
    url: IMG_BRIDE_RED,
    category: "Bride",
    title: "The Royal Adornment",
    description: "A serene moment capture of the bride getting ready, highlighting the intricate gold jewelry and red lehenga.",
  },
  {
    id: "sm-2",
    url: IMG_COUPLE_PALACE,
    category: "Couple",
    title: "Timeless Devotion",
    description: "An intimate portrait of the couple reflecting on their journey together amidst heritage palace pillars.",
  },
  {
    id: "sm-3",
    url: IMG_UNION_GARLANDS,
    category: "Wedding",
    title: "The Holy Union",
    description: "The exchange of garlands (Varmala) under warm marigold chandeliers and classical bells.",
  },
  {
    id: "sm-4",
    url: IMG_FLORAL_MANDAP,
    category: "Decoration",
    title: "Floral Elegance",
    description: "A symmetrical composition of the mandap crafted with white roses, carnations, and candle arches.",
  },
  {
    id: "sm-5",
    url: IMG_ENGAGEMENT_RINGS,
    category: "Pre Wedding",
    title: "Whispers in the Wind",
    description: "Captured during the golden hour in the desert dunes, showcasing cinematic silhouettes.",
  },
  {
    id: "sm-6",
    url: IMG_SUNSET_COUPLE,
    category: "Couple",
    title: "Glow of Tomorrow",
    description: "A candid laughing moment of the couple against a burning crimson sunset.",
  },
  {
    id: "sm-7",
    url: IMG_DETAIL_RINGS,
    category: "Engagement",
    title: "The Golden Sparkle",
    description: "Fairy light sparkles encircling the couple as they share their first dance.",
  },
  {
    id: "sm-8",
    url: IMG_BRIDE_PREP,
    category: "Bride",
    title: "Pure Grace",
    description: "Close-up portrait capturing raw emotional joy in the bride's eyes right after the ceremony.",
  }
];

// Replaces "Featured Collections" -> "Love Stories"
export const LOVE_STORIES: LoveStory[] = [
  {
    id: "story-1",
    couple: "Yantrapati Vamsi & Haritha",
    venue: "GNR Convention Hall",
    city: "Rajahmundry",
    date: "Dec 12, 2025",
    coverImage: IMG_COUPLE_DANCE,
    tags: ["Wedding", "Highlight Film", "Traditional"],
    story: "Set on the banks of the sacred Godavari river, Vamsi & Haritha's wedding was an elegant display of traditional Telugu customs combined with modern luxury.",
    celebration: "A three-day affair starting with a vibrant Haldi ceremony, followed by an evening of music and a royal traditional wedding with over 1500 guests.",
    filmUrl: "https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-holding-hands-40131-large.mp4",
    albumImages: [
      IMG_BRIDE_RED,
      IMG_COUPLE_PALACE,
      IMG_UNION_GARLANDS,
    ]
  },
  {
    id: "story-2",
    couple: "Sai Kiran & Priya",
    venue: "Taj Umaid Bhawan Palace",
    city: "Udaipur",
    date: "Nov 04, 2025",
    coverImage: IMG_FLORAL_MANDAP,
    tags: ["Destination Wedding", "Films", "Royal"],
    story: "A regal destination wedding celebrating heritage, royalty, and love. Priya's custom-designed champagne lehenga beautifully complemented the palace arches.",
    celebration: "The palace came alive with floating candle pools, classic sitar players, and a cinematic firework show that lit up the lake during the reception.",
    filmUrl: "https://assets.mixkit.co/videos/preview/mixkit-wedding-couple-dancing-slowly-under-warm-lights-42226-large.mp4",
    albumImages: [
      IMG_ENGAGEMENT_RINGS,
      IMG_SUNSET_COUPLE,
      IMG_BRIDE_PREP,
    ]
  },
  {
    id: "story-3",
    couple: "Rohit & Anusha",
    venue: "N Convention",
    city: "Hyderabad",
    date: "Jan 18, 2026",
    coverImage: IMG_DETAIL_RINGS,
    tags: ["Reception", "Modern", "Cinematic"],
    story: "Anusha & Rohit's reception was a celebration of contemporary luxury. The stage was framed by custom LED installations and massive floral cascades.",
    celebration: "An energetic evening filled with Bollywood performances, high-key lighting, and a stunning live stream set up for family worldwide.",
    filmUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-wedding-couple-dancing-slowly-42215-large.mp4",
    albumImages: [
      IMG_BRIDE_RED,
      IMG_UNION_GARLANDS,
    ]
  },
  {
    id: "story-4",
    couple: "Nikhil & Swetha",
    venue: "Novotel Varun Beach",
    city: "Vizag",
    date: "Feb 02, 2026",
    coverImage: IMG_SUNSET_COUPLE,
    tags: ["Pre Wedding", "Beachfront", "Candid"],
    story: "A beachfront escape celebrating love against the crashing waves. Nikhil and Swetha shared an intimate photoshoot at sunrise before their main ceremony.",
    celebration: "A sun-kissed morning shoot followed by an elegant, open-air beach mandap decorated with pastel curtains and white orchids.",
    filmUrl: "https://assets.mixkit.co/videos/preview/mixkit-groom-putting-the-ring-on-the-brides-finger-40134-large.mp4",
    albumImages: [
      IMG_COUPLE_PALACE,
      IMG_BRIDE_PREP,
    ]
  }
];

// Expanded Categories for "Featured Collections"
export const CATEGORY_FILTERS = [
  "ALL",
  "WEDDING",
  "PRE WEDDING",
  "ENGAGEMENT",
  "BRIDE",
  "GROOM",
  "COUPLE",
  "RECEPTION",
  "HALDI",
  "MEHENDI",
  "DECORATION",
  "DRONE",
  "CINEMATIC",
  "CORPORATE",
  "BABY",
  "FASHION",
  "COMMERCIAL"
];

// Curated Photos with categories for "Featured Collections"
export const FEATURED_GALLERY_PHOTOS: PhotoItem[] = [
  {
    id: "gal-1",
    url: IMG_BRIDE_RED,
    category: "BRIDE",
    title: "Symphony in Red",
    widthRatio: "col-span-1 md:col-span-2",
    heightRatio: "row-span-2",
  },
  {
    id: "gal-2",
    url: IMG_COUPLE_PALACE,
    category: "COUPLE",
    title: "Whisper of Love",
    widthRatio: "col-span-1",
    heightRatio: "row-span-1",
  },
  {
    id: "gal-3",
    url: IMG_UNION_GARLANDS,
    category: "WEDDING",
    title: "Exchange of Souls",
    widthRatio: "col-span-1",
    heightRatio: "row-span-1",
  },
  {
    id: "gal-4",
    url: IMG_FLORAL_MANDAP,
    category: "DECORATION",
    title: "Sacred Canopy",
    widthRatio: "col-span-1 md:col-span-2",
    heightRatio: "row-span-1",
  },
  {
    id: "gal-5",
    url: IMG_ENGAGEMENT_RINGS,
    category: "PRE WEDDING",
    title: "Desert Silhouette",
    widthRatio: "col-span-1",
    heightRatio: "row-span-2",
  },
  {
    id: "gal-6",
    url: IMG_SUNSET_COUPLE,
    category: "COUPLE",
    title: "Sunset Embrace",
    widthRatio: "col-span-1 md:col-span-2",
    heightRatio: "row-span-1",
  },
  {
    id: "gal-7",
    url: IMG_DETAIL_RINGS,
    category: "ENGAGEMENT",
    title: "Sparkler Walkway",
    widthRatio: "col-span-1",
    heightRatio: "row-span-1",
  },
  {
    id: "gal-8",
    url: IMG_BRIDE_PREP,
    category: "BRIDE",
    title: "Morning Glow",
    widthRatio: "col-span-1",
    heightRatio: "row-span-1",
  },
  {
    id: "gal-9",
    url: IMG_COUPLE_DANCE,
    category: "WEDDING",
    title: "Walk of Joy",
    widthRatio: "col-span-1 md:col-span-2",
    heightRatio: "row-span-1",
  }
];

// Rebranded "Our Services" -> "Crafted Experiences"
export const CRAFTED_EXPERIENCES: CraftedExperience[] = [
  {
    id: "ce-1",
    title: "Luxury Wedding Photography",
    description: "Capturing fleeting emotions in editorial format. We treat every frame as an archival piece of artwork.",
    image: IMG_BRIDE_RED,
    link: "/photography",
  },
  {
    id: "ce-2",
    title: "Cinematic Films",
    description: "4K cinematic films using premium anamorphic glass and drone direction. True Hollywood-grade production.",
    image: IMG_COUPLE_DANCE,
    link: "/films",
  },
  {
    id: "ce-3",
    title: "Wedding Stories",
    description: "Complete magazine-inspired wedding coverages mapping pre-weddings, functions, and key portraits.",
    image: IMG_COUPLE_PALACE,
    link: "/wedding-stories",
  },
  {
    id: "ce-4",
    title: "Wedding Planning",
    description: "End-to-end luxury management under one roof. Venues, timelines, vendors, guest logistics, and choreography.",
    image: IMG_SUNSET_COUPLE,
    link: "/wedding-planning",
  },
  {
    id: "ce-5",
    title: "Decoration & Styling",
    description: "Sleek, bespoke themes spanning traditional temple designs, minimalist outdoor canopies, and grand stages.",
    image: IMG_FLORAL_MANDAP,
    link: "/decoration",
  },
  {
    id: "ce-6",
    title: "Drone & Aerial Coverage",
    description: "Ultra high-resolution dynamic drone sweeps capturing grand architectural vistas and couple compositions.",
    image: IMG_ENGAGEMENT_RINGS,
    link: "/photography",
  },
  {
    id: "ce-7",
    title: "Live Streaming & LED Walls",
    description: "Broadcast-grade multicam streaming with backup systems, integrating premium on-site LED displays.",
    image: IMG_DETAIL_RINGS,
    link: "/contact",
  },
  {
    id: "ce-8",
    title: "Premium Albums & Prints",
    description: "Hand-stretched leather, premium Italian paper, lay-flat designs, and archival framing for generations.",
    image: IMG_BRIDE_PREP,
    link: "/photography",
  }
];

// India Interactive Map Points
export const MAP_HUBS: MapHub[] = [
  {
    id: "hub-1",
    city: "Rajahmundry",
    state: "Andhra Pradesh",
    lat: 69.7, // Y coordinate in viewBox (69.7% of 696 = 485)
    lng: 49.0, // X coordinate in viewBox (49% of 612 = 300) - inland from coast
    title: "Yantrapati Vamsi & Haritha",
    venue: "GNR Convention Hall",
    imageUrl: IMG_COUPLE_DANCE,
  },
  {
    id: "hub-2",
    city: "Srinagar",
    state: "Jammu and Kashmir",
    lat: 10.1, // Y coordinate in viewBox (10.1% of 696 = 70)
    lng: 29.4, // X coordinate in viewBox (29.4% of 612 = 180)
    title: "Aman & Zeenat",
    venue: "The Lalit Grand Palace",
    imageUrl: IMG_COUPLE_PALACE,
  },
  {
    id: "hub-3",
    city: "Leh Ladakh",
    state: "Jammu and Kashmir",
    lat: 8.6,  // Y coordinate in viewBox (8.6% of 696 = 60)
    lng: 39.2, // X coordinate in viewBox (39.2% of 612 = 240)
    title: "Rigzin & Dolma",
    venue: "The Grand Dragon Ladakh",
    imageUrl: IMG_DETAIL_RINGS,
  },
  {
    id: "hub-4",
    city: "Shimla",
    state: "Himachal Pradesh",
    lat: 14.4, // Y coordinate in viewBox (14.4% of 696 = 100)
    lng: 32.7, // X coordinate in viewBox (32.7% of 612 = 200)
    title: "Kabir & Anjali",
    venue: "Wildflower Hall Shimla",
    imageUrl: IMG_BRIDE_PREP,
  },
  {
    id: "hub-5",
    city: "Udaipur",
    state: "Rajasthan",
    lat: 47.4, // Y coordinate in viewBox
    lng: 22.1, // X coordinate in viewBox
    title: "Sai Kiran & Priya",
    venue: "Taj Umaid Bhawan Palace",
    imageUrl: IMG_FLORAL_MANDAP,
  },
  {
    id: "hub-6",
    city: "Jaipur",
    state: "Rajasthan",
    lat: 40.2,
    lng: 29.4,
    title: "Kabir & Meera",
    venue: "Rambagh Palace Resort",
    imageUrl: IMG_COUPLE_PALACE,
  },
  {
    id: "hub-7",
    city: "Jodhpur",
    state: "Rajasthan",
    lat: 40.2,
    lng: 18.0,
    title: "Ranveer & Deepika",
    venue: "Taj Hari Mahal Palace",
    imageUrl: IMG_UNION_GARLANDS,
  },
  {
    id: "hub-8",
    city: "Goa",
    state: "Goa",
    lat: 74.0,
    lng: 19.6,
    title: "Amit & Sneha",
    venue: "W Goa Beachfront Resort",
    imageUrl: IMG_BRIDE_RED,
  },
  {
    id: "hub-9",
    city: "Hyderabad",
    state: "Telangana",
    lat: 68.2,
    lng: 40.0,
    title: "Rohit & Anusha",
    venue: "N Convention Center",
    imageUrl: IMG_DETAIL_RINGS,
  },
  {
    id: "hub-10",
    city: "Vizag",
    state: "Andhra Pradesh",
    lat: 66.1,
    lng: 53.9,
    title: "Nikhil & Swetha",
    venue: "Novotel Varun Beach",
    imageUrl: IMG_SUNSET_COUPLE,
  },
  {
    id: "hub-11",
    city: "Kochi",
    state: "Kerala",
    lat: 87.6, // Y coordinate in viewBox (87.6% of 696 = 610)
    lng: 26.1, // X coordinate in viewBox (26.1% of 612 = 160)
    title: "Rahul & Lakshmi",
    venue: "The Leela Kovalam",
    imageUrl: IMG_SUNSET_COUPLE,
  },
  {
    id: "hub-12",
    city: "Andamans",
    state: "Andaman and Nicobar Islands",
    lat: 93.4, // Y coordinate in viewBox (93.4% of 696 = 650)
    lng: 86.6, // X coordinate in viewBox (86.6% of 612 = 530)
    title: "Vikram & Neha",
    venue: "Taj Exotica Havelock",
    imageUrl: IMG_COUPLE_DANCE,
  }
];

// Testimonials
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    couple: "Vamsi & Haritha",
    text: "Snap Shooter Studios captured our wedding like an award-winning feature film. The attention to emotional details, lighting, and the final layout in our physical album is unmatched. Kiran and his assistants did not just shoot; they organized our visuals with immense grace.",
    rating: 5,
    source: "Google Review",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-wedding-couple-dancing-slowly-42215-large.mp4",
    thumbnail: IMG_COUPLE_DANCE,
  },
  {
    id: "test-2",
    couple: "Sai Kiran & Priya",
    text: "For a destination wedding in Udaipur, we needed a team that understood heritage lighting and editorial layouts. Snap Shooter Studios exceeded every expectation. Our wedding stories feel alive, raw, and absolutely timeless. Every dollar was an investment in art.",
    rating: 5,
    source: "Google Review",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-wedding-couple-dancing-slowly-under-warm-lights-42226-large.mp4",
    thumbnail: IMG_FLORAL_MANDAP,
  },
  {
    id: "test-3",
    couple: "Rohit & Anusha",
    text: "The cinematographic quality of our highlight reel left everyone in tears. They managed live streaming and multi-cam drones with absolute professionalism. If you want a luxury team that knows premium wedding photography, Kiran and his crew are the only choice in India.",
    rating: 5,
    source: "Google Review",
  }
];

// Wedding Journey
export const WEDDING_JOURNEY: JourneyStep[] = [
  {
    step: "01",
    title: "Bride Preparation",
    description: "Capturing the calm before the celebration.",
    details: "Intimate close-ups of traditional adornments, details of jewelry, candid moments with parents, and soft window-lit portraits.",
    image: IMG_BRIDE_PREP,
  },
  {
    step: "02",
    title: "Engagement",
    description: "The official promise of tomorrow.",
    details: "High-key ring exchanges, dynamic low-light venue coverage, emotional group portraits, and formal couple compositions.",
    image: IMG_ENGAGEMENT_RINGS,
  },
  {
    step: "03",
    title: "Haldi & Mehendi",
    description: "Explosion of colors and laughter.",
    details: "High-speed shutter captures of splashing turmeric, intricate henna detail patterns, and vibrant sunlit outdoor color grades.",
    image: IMG_SUNSET_COUPLE,
  },
  {
    step: "04",
    title: "The Holy Wedding",
    description: "Sacred customs captured forever.",
    details: "Bride entry under flower canopies, the holy fire exchange, Varmala garland throws, and raw emotional tears during bidai.",
    image: IMG_UNION_GARLANDS,
  },
  {
    step: "05",
    title: "Reception",
    description: "Grand celebration and contemporary luxury.",
    details: "First couple dance under spotlights, guest speeches, family interactions, and high-energy stage performances.",
    image: IMG_COUPLE_DANCE,
  },
  {
    step: "06",
    title: "Editorial Editing",
    description: "Applying our signature color grades.",
    details: "Frame-by-frame color correction, sound design for the cinematic film, and layout selections for the wedding magazine.",
    image: IMG_FOUNDER_PORTRAIT,
  },
  {
    step: "07",
    title: "Archival Album",
    description: "Bespoke print craftsmanship.",
    details: "Images are pressed on luxury Italian paper, bound in hand-stretched leather, and delivered in a custom engraving box.",
    image: IMG_FLORAL_MANDAP,
  },
  {
    step: "08",
    title: "Timeless Delivery",
    description: "Reliving the memories forever.",
    details: "High-definition digital delivery via a secure web vault alongside the hand-stitched physical heirloom box.",
    image: IMG_COUPLE_PALACE,
  }
];

// Booking Timeline
export const BOOKING_TIMELINE = [
  {
    phase: "01",
    title: "Exhibition Consultation",
    desc: "We discuss your vision, location dynamics, scale of functions, and key aesthetics."
  },
  {
    phase: "02",
    title: "Curation & Planning",
    desc: "Mapping specific cameras, drone pathways, lighting setups, and coordinates."
  },
  {
    phase: "03",
    title: "Securing the Date",
    desc: "Contract finalization and booking approval. We lock our schedules PAN India."
  },
  {
    phase: "04",
    title: "The Visual Shoot",
    desc: "Our creative team directs and shoots on-site with cinematic gear."
  },
  {
    phase: "05",
    title: "Editorial Curation",
    desc: "Applying raw corrections, color grading, and designing your physical album layout."
  },
  {
    phase: "06",
    title: "Heirloom Delivery",
    desc: "Receiving your digital links and the hand-finished physical print box."
  }
];

// Instagram mock items
export const INSTAGRAM_FEED = [
  { id: "ig-1", url: IMG_BRIDE_RED },
  { id: "ig-2", url: IMG_COUPLE_PALACE },
  { id: "ig-3", url: IMG_UNION_GARLANDS },
  { id: "ig-4", url: IMG_FLORAL_MANDAP },
  { id: "ig-5", url: IMG_ENGAGEMENT_RINGS },
  { id: "ig-6", url: IMG_SUNSET_COUPLE },
  { id: "ig-7", url: IMG_DETAIL_RINGS },
  { id: "ig-8", url: IMG_BRIDE_PREP }
];
