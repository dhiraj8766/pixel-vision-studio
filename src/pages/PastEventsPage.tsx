import { useState } from "react";
import { Calendar, MapPin, X, ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/heroimg/hero1.jpg";
import hero2 from "@/assets/heroimg/hero2.jpg";
import hero3 from "@/assets/heroimg/hero3.jpg";

const pastEvents = [
  {
    id: 5, title: "Cricket Tournament", description: "Inter-department cricket championship with 16 teams competing over 3 days. A great display of sportsmanship and teamwork.", 
    date: "2026-02-15", location: "Sports Ground", coverImage: hero2, eventType: "Sports",
    gallery: [hero1, hero2, hero3], highlights: "16 teams • 3 days • 200+ participants"
  },
  {
    id: 6, title: "Valorant Cup", description: "5v5 Valorant tournament that brought together 32 teams. Intense matches and spectacular plays throughout.", 
    date: "2026-02-20", location: "Online", coverImage: hero3, eventType: "Esports",
    gallery: [hero3, hero1, hero2], highlights: "32 teams • Online • 160+ players"
  },
  {
    id: 7, title: "Workshop: React", description: "Hands-on React.js workshop for beginners. Participants built a complete project from scratch with guidance from industry mentors.", 
    date: "2026-01-10", location: "CS Lab", coverImage: hero1, eventType: "Technical",
    gallery: [hero1, hero3, hero2], highlights: "50 participants • 8 hours • Project-based"
  },
  {
    id: 8, title: "Fun Friday", description: "Games, quizzes, and fun activities to unwind after exams. Featured coding challenges, trivia, and team games.", 
    date: "2026-01-25", location: "Auditorium", coverImage: hero2, eventType: "Fun",
    gallery: [hero2, hero1, hero3], highlights: "100+ attendees • 5 activities • Prizes"
  },
];

const PastEventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState<typeof pastEvents[0] | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const openEvent = (event: typeof pastEvents[0]) => {
    setSelectedEvent(event);
    setGalleryIndex(0);
  };

  return (
    <div className="relative min-h-screen bg-background pb-mobile-nav pt-20 md:pt-24 px-4 md:px-8 lg:px-16">
      <div className="absolute inset-0 bg-dot-pattern opacity-15 pointer-events-none" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="block text-xs font-semibold uppercase tracking-[3px] text-accent-yellow mb-2 font-heading">Gallery</span>
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Successful Events
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Relive the moments that defined our journey. Browse photos and stories from our past events.
          </p>
        </div>

        {/* Events Grid */}
        <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-2">
          {pastEvents.map((event) => (
            <div
              key={event.id}
              onClick={() => openEvent(event)}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-glow active:scale-[0.99]"
            >
              {/* Cover image */}
              <div className="relative h-56 overflow-hidden">
                <img src={event.coverImage} alt={event.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <span className="absolute top-3 left-3 rounded-full border border-primary/50 bg-background/60 px-3 py-1 text-[10px] font-bold uppercase text-primary backdrop-blur-sm">
                  {event.eventType}
                </span>
                {/* Gallery count */}
                <span className="absolute top-3 right-3 rounded-full bg-background/60 px-3 py-1 text-[10px] font-bold text-foreground backdrop-blur-sm">
                  📸 {event.gallery.length} photos
                </span>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground font-heading">{event.title}</h3>
                <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {event.date}</span>
                  <span className="flex items-center gap-1"><MapPin size={12} /> {event.location}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{event.description}</p>
                <p className="mt-2 text-xs font-semibold text-primary">{event.highlights}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Detail Modal with Gallery */}
      {selectedEvent && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/90 backdrop-blur-md p-4" onClick={() => setSelectedEvent(null)}>
          <div
            className="w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-card shadow-card animate-[scaleIn_0.3s_ease-out] max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gallery */}
            <div className="relative h-72">
              <img src={selectedEvent.gallery[galleryIndex]} alt={`${selectedEvent.title} photo`} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              <button onClick={() => setSelectedEvent(null)} className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-background/50 text-foreground backdrop-blur-sm hover:bg-accent-red">
                <X size={16} />
              </button>
              {selectedEvent.gallery.length > 1 && (
                <>
                  <button onClick={(e) => { e.stopPropagation(); setGalleryIndex((prev) => (prev - 1 + selectedEvent.gallery.length) % selectedEvent.gallery.length); }} className="absolute left-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-background/50 text-foreground backdrop-blur-sm hover:bg-primary">
                    <ChevronLeft size={16} />
                  </button>
                  <button onClick={(e) => { e.stopPropagation(); setGalleryIndex((prev) => (prev + 1) % selectedEvent.gallery.length); }} className="absolute right-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-background/50 text-foreground backdrop-blur-sm hover:bg-primary">
                    <ChevronRight size={16} />
                  </button>
                </>
              )}
              {/* Gallery dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {selectedEvent.gallery.map((_, i) => (
                  <button key={i} onClick={(e) => { e.stopPropagation(); setGalleryIndex(i); }} className={`h-1.5 rounded-full transition-all ${i === galleryIndex ? "w-6 bg-primary" : "w-1.5 bg-foreground/30"}`} />
                ))}
              </div>
            </div>

            <div className="p-6">
              <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary mb-2">{selectedEvent.eventType}</span>
              <h2 className="text-2xl font-bold text-foreground font-heading">{selectedEvent.title}</h2>
              <div className="mt-2 flex gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar size={14} /> {selectedEvent.date}</span>
                <span className="flex items-center gap-1"><MapPin size={14} /> {selectedEvent.location}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-secondary-foreground">{selectedEvent.description}</p>
              <p className="mt-3 text-sm font-semibold text-accent-yellow">{selectedEvent.highlights}</p>

              {/* Thumbnail strip */}
              <div className="mt-4 flex gap-2 overflow-x-auto scrollbar-hide">
                {selectedEvent.gallery.map((img, i) => (
                  <button key={i} onClick={() => setGalleryIndex(i)} className={`h-16 w-20 flex-shrink-0 overflow-hidden rounded-lg border transition-all ${i === galleryIndex ? "border-primary ring-2 ring-primary/20" : "border-border opacity-50"}`}>
                    <img src={img} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PastEventsPage;
