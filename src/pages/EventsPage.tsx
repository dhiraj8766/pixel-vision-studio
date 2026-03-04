import { useState } from "react";
import hero1 from "@/assets/heroimg/hero1.jpg";
import hero2 from "@/assets/heroimg/hero2.jpg";
import hero3 from "@/assets/heroimg/hero3.jpg";

// Demo events data
const allEvents = [
  { id: 1, title: "FNDS Tournament", description: "A competitive gaming tournament bringing together the best players.", date: "2026-03-22", time: "14:00", location: "Main Auditorium", coverImage: hero1, registerUrl: "#", eventType: "Esports", status: "upcoming" },
  { id: 2, title: "Hackathon 3.0", description: "48-hour coding marathon to build innovative solutions.", date: "2026-04-10", time: "09:00", location: "CS Lab", coverImage: hero2, registerUrl: "#", eventType: "Technical", status: "upcoming" },
  { id: 3, title: "Tech Talks", description: "Industry experts sharing insights on emerging technologies.", date: "2026-04-25", time: "16:00", location: "Seminar Hall", coverImage: hero3, registerUrl: "#", eventType: "Technical", status: "upcoming" },
  { id: 4, title: "Code Wars", description: "Competitive programming challenge with real-world problems.", date: "2026-05-05", time: "10:00", location: "CS Lab", coverImage: hero1, registerUrl: "#", eventType: "Technical", status: "upcoming" },
  { id: 5, title: "Cricket Tournament", description: "Inter-department cricket championship.", date: "2026-02-15", time: "08:00", location: "Sports Ground", coverImage: hero2, registerUrl: "", eventType: "Sports", status: "completed" },
  { id: 6, title: "Valorant Cup", description: "5v5 Valorant tournament for all skill levels.", date: "2026-02-20", time: "14:00", location: "Online", coverImage: hero3, registerUrl: "", eventType: "Esports", status: "completed" },
  { id: 7, title: "Workshop: React", description: "Hands-on React.js workshop for beginners.", date: "2026-01-10", time: "10:00", location: "CS Lab", coverImage: hero1, registerUrl: "", eventType: "Technical", status: "completed" },
  { id: 8, title: "Fun Friday", description: "Games and activities to unwind after exams.", date: "2026-01-25", time: "15:00", location: "Auditorium", coverImage: hero2, registerUrl: "", eventType: "Fun", status: "completed" },
];

const eventTypes = [
  { key: "Technical", label: "Technical Events", color: "text-primary" },
  { key: "Esports", label: "Esports", color: "text-accent-cyan" },
  { key: "Sports", label: "Sports Events", color: "text-accent-yellow" },
  { key: "Fun", label: "Fun Events", color: "text-accent-red" },
];

const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState<typeof allEvents[0] | null>(null);

  const upcomingEvents = allEvents.filter((e) => e.status === "upcoming").sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const completedEvents = allEvents.filter((e) => e.status === "completed").sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen bg-background pb-mobile-nav pt-20 md:pt-24 px-4 md:px-8 lg:px-16">
      {/* Header */}
      <div className="mb-8 border-b border-border pb-6">
        <span className="block text-xs font-semibold uppercase tracking-[3px] text-primary mb-2">Schedule</span>
        <h1 className="font-serif text-4xl font-normal text-foreground md:text-5xl">
          Upcoming & Past Events
        </h1>
      </div>

      {/* Timeline Sections */}
      <div className="mx-auto max-w-4xl">
        {/* Upcoming */}
        {upcomingEvents.length > 0 && (
          <div className="mb-10">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-accent-yellow">Upcoming</h2>
            <div className="relative border-l-2 border-border ml-3 space-y-0">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="group relative pl-8 pb-6 cursor-pointer" onClick={() => setSelectedEvent(event)}>
                  {/* Dot */}
                  <div className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors" />
                  <div className="flex items-center gap-4 rounded-xl border border-transparent p-3 transition-all hover:border-border hover:bg-card/50">
                    <span className="font-mono text-xs text-primary min-w-[90px]">{event.date}</span>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-foreground">{event.title}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{event.time} • {event.location}</p>
                    </div>
                    {event.registerUrl && (
                      <a href={event.registerUrl} onClick={(e) => e.stopPropagation()} className="hidden md:block">
                        <button className="valorant-btn text-[11px] py-2 px-4">Register</button>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Completed */}
        {completedEvents.length > 0 && (
          <div className="mb-10" id="past">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-muted-foreground">Completed</h2>
            <div className="relative border-l-2 border-border/50 ml-3 space-y-0">
              {completedEvents.map((event) => (
                <div key={event.id} className="group relative pl-8 pb-6 cursor-pointer" onClick={() => setSelectedEvent(event)}>
                  <div className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-muted bg-muted" />
                  <div className="flex items-center gap-4 rounded-xl p-3 opacity-60 transition-all hover:opacity-100 hover:bg-card/30">
                    <span className="font-mono text-xs text-muted-foreground min-w-[90px]">{event.date}</span>
                    <div className="flex-1">
                      <h3 className="text-base font-medium text-foreground">{event.title}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{event.time} • {event.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Event Types Sections */}
      <div className="mt-16 mx-auto max-w-6xl">
        <h2 className="mb-8 text-center font-serif text-3xl text-foreground md:text-4xl">
          Explore by Category
        </h2>
        {eventTypes.map((type) => {
          const typeEvents = allEvents.filter((e) => e.eventType === type.key);
          if (typeEvents.length === 0) return null;
          return (
            <div key={type.key} className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-lg font-bold ${type.color}`}>{type.label}</h3>
                <div className="flex gap-2">
                  <span className="text-xs text-muted-foreground">{typeEvents.length} events</span>
                </div>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {typeEvents.map((event) => (
                  <div
                    key={event.id}
                    onClick={() => setSelectedEvent(event)}
                    className="group flex-shrink-0 w-[260px] md:w-[300px] cursor-pointer overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-glow hover:-translate-y-1"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img src={event.coverImage} alt={event.title} className="h-full w-full object-cover transition-transform group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                      <span className="absolute top-3 left-3 rounded-full border border-primary/50 bg-background/60 px-3 py-1 text-[10px] font-bold uppercase text-primary backdrop-blur-sm">
                        {type.label}
                      </span>
                    </div>
                    <div className="p-4">
                      <h4 className="text-sm font-bold text-foreground">{event.title}</h4>
                      <p className="mt-1 text-xs text-muted-foreground flex items-center gap-1">
                        <span>📅</span> {event.date}
                      </p>
                      {event.registerUrl && (
                        <a href={event.registerUrl} onClick={(e) => e.stopPropagation()} className="mt-3 inline-block">
                          <button className="valorant-btn-cyan text-[11px] py-1.5 px-3">Register ↗</button>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Event Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/85 backdrop-blur-md p-4" onClick={() => setSelectedEvent(null)}>
          <div
            className="w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-card shadow-card animate-[fadeIn_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56">
              <img src={selectedEvent.coverImage} alt={selectedEvent.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-background/50 text-foreground backdrop-blur-sm transition-colors hover:bg-accent-red"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-primary">{selectedEvent.title}</h2>
              <div className="mt-3 flex gap-4 text-sm text-foreground">
                <span>📅 {selectedEvent.date}</span>
                <span>⏰ {selectedEvent.time}</span>
              </div>
              <p className="mt-1 text-sm italic text-muted-foreground">📍 {selectedEvent.location}</p>
              <p className="mt-4 text-sm leading-relaxed text-secondary-foreground">{selectedEvent.description}</p>
              {selectedEvent.registerUrl && (
                <a href={selectedEvent.registerUrl} target="_blank" rel="noopener noreferrer" className="mt-6 block">
                  <button className="valorant-btn w-full text-center">Register Now</button>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsPage;
