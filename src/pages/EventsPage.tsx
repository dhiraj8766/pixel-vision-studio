import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/heroimg/hero1.jpg";
import hero2 from "@/assets/heroimg/hero2.jpg";
import hero3 from "@/assets/heroimg/hero3.jpg";

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

// Simple calendar component
const MiniCalendar = ({ events: calEvents, onEventClick }: { events: typeof allEvents; onEventClick: (event: typeof allEvents[0]) => void }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 2)); // March 2026
  const [hoveredDay, setHoveredDay] = useState<number | null>(null);

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
  const monthName = currentMonth.toLocaleString("default", { month: "long", year: "numeric" });

  const eventsByDate = useMemo(() => {
    const map = new Map<number, typeof allEvents>();
    calEvents.forEach(e => {
      const d = new Date(e.date);
      if (d.getMonth() === currentMonth.getMonth() && d.getFullYear() === currentMonth.getFullYear()) {
        const day = d.getDate();
        if (!map.has(day)) map.set(day, []);
        map.get(day)!.push(e);
      }
    });
    return map;
  }, [calEvents, currentMonth]);

  const days: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  const hoveredEvents = hoveredDay !== null ? eventsByDate.get(hoveredDay) : null;

  return (
    <div className="rounded-2xl border border-[#c4a97d]/30 bg-[#ebe4d2]/70 p-5">
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))} className="p-1 text-[#8a7a6a] hover:text-[#1a3a2a]">
          <ChevronLeft size={18} />
        </button>
        <h3 className="text-sm font-bold text-[#1a3a2a] font-heading">{monthName}</h3>
        <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))} className="p-1 text-[#8a7a6a] hover:text-[#1a3a2a]">
          <ChevronRight size={18} />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(d => (
          <div key={d} className="text-[10px] font-bold text-[#8a7a6a] py-1">{d}</div>
        ))}
        {days.map((day, i) => {
          const hasEvent = day !== null && eventsByDate.has(day);
          return (
            <div
              key={i}
              className={`relative h-8 w-8 mx-auto flex items-center justify-center rounded-lg text-xs transition-colors ${
                day === null ? "" :
                hasEvent
                  ? "bg-[#2d5a3d]/15 text-[#2d5a3d] font-bold border border-[#2d5a3d]/30 cursor-pointer hover:bg-[#2d5a3d]/30"
                  : "text-[#5a7d6a] hover:bg-[#c4a97d]/20"
              }`}
              onMouseEnter={() => hasEvent && setHoveredDay(day)}
              onMouseLeave={() => setHoveredDay(null)}
              onClick={() => {
                if (hasEvent && day !== null) {
                  onEventClick(eventsByDate.get(day)![0]);
                }
              }}
            >
              {day}
              {/* Hover tooltip */}
              {hasEvent && hoveredDay === day && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 w-44 rounded-lg bg-[#1a3a2a] text-[#f3ecdc] p-2.5 shadow-lg pointer-events-none animate-[fadeIn_0.15s_ease-out]">
                  {eventsByDate.get(day)!.map(ev => (
                    <div key={ev.id} className="mb-1 last:mb-0">
                      <p className="text-[11px] font-semibold truncate">{ev.title}</p>
                      <p className="text-[9px] opacity-70">{ev.time} · {ev.location}</p>
                    </div>
                  ))}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#1a3a2a]" />
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-3 flex items-center gap-2 text-[10px] text-[#8a7a6a]">
        <div className="h-2 w-2 rounded-full bg-[#2d5a3d]/40" />
        <span>Click event date for details</span>
      </div>
    </div>
  );
};

const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState<typeof allEvents[0] | null>(null);

  const upcomingEvents = allEvents.filter((e) => e.status === "upcoming").sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const completedEvents = allEvents.filter((e) => e.status === "completed").sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="relative min-h-screen pb-mobile-nav pt-16 sm:pt-20 md:pt-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-events-cosmic">
      {/* Subtle decorative shapes */}
      <div className="absolute top-[20%] right-[5%] w-[300px] h-[300px] rounded-full bg-[hsl(35,40%,75%,0.2)] pointer-events-none z-0 blur-[80px]" />
      <div className="absolute bottom-[15%] left-[8%] w-[250px] h-[250px] rounded-full bg-[hsl(30,35%,70%,0.15)] pointer-events-none z-0 blur-[70px]" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="mb-6 sm:mb-8 border-b border-[#c4a97d]/30 pb-4 sm:pb-6">
          <span className="block text-[10px] sm:text-xs font-semibold uppercase tracking-[2px] sm:tracking-[3px] text-[#2d5a3d] mb-1.5 sm:mb-2 font-heading">Schedule</span>
          <h1 className="font-heading text-2xl sm:text-4xl font-bold text-[#1a3a2a] md:text-5xl">
            Upcoming & Past Events
          </h1>
        </div>

        {/* Layout: Timeline + Calendar */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-8 mb-10 sm:mb-16">
          {/* Timeline */}
          <div className="flex-1 min-w-0">
            {/* Upcoming */}
            {upcomingEvents.length > 0 && (
              <div className="mb-10">
                <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-[#2d5a3d] font-heading flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#2d5a3d] animate-pulse" />
                  Upcoming
                </h2>
                <div className="relative border-l-2 border-[#2d5a3d]/30 ml-3 space-y-0">
                  {upcomingEvents.map((event, i) => {
                    const total = upcomingEvents.length;
                    const progress = ((i + 1) / total) * 100;
                    return (
                      <div key={event.id} className="group relative pl-8 pb-6 cursor-pointer" onClick={() => setSelectedEvent(event)}>
                        <div className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-[#2d5a3d] bg-[#f3ecdc] group-hover:bg-[#2d5a3d] transition-colors" />
                        <div className="flex items-center gap-4 rounded-xl border border-transparent p-3 transition-all hover:border-[#c4a97d]/40 hover:bg-[#ebe4d2]/60 active:bg-[#ebe4d2]/80">
                          <div className="hidden md:block min-w-[90px]">
                            <span className="font-mono text-xs text-[#2d5a3d]">{event.date}</span>
                            <div className="mt-1 h-1 w-full rounded-full bg-[#c4a97d]/30 overflow-hidden">
                              <div className="h-full rounded-full bg-gradient-to-r from-[#2d5a3d] to-[#4a8c6a]" style={{ width: `${progress}%` }} />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-base font-semibold text-[#1a3a2a] font-heading">{event.title}</h3>
                            <p className="text-xs text-[#5a7d6a] mt-0.5 flex items-center gap-2">
                              <span className="flex items-center gap-1"><Clock size={10} /> {event.time}</span>
                              <span className="flex items-center gap-1"><MapPin size={10} /> {event.location}</span>
                            </p>
                            <span className="md:hidden font-mono text-[10px] text-[#2d5a3d]">{event.date}</span>
                          </div>
                          {event.registerUrl && (
                            <a href={event.registerUrl} onClick={(e) => e.stopPropagation()} className="hidden md:block">
                              <button className="rounded-full bg-[#1a3a2a] text-[#f3ecdc] text-[11px] py-2 px-4 font-semibold hover:bg-[#2d5a3d] transition-colors">Register</button>
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Completed */}
            {completedEvents.length > 0 && (
              <div className="mb-10" id="past">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-[#8a7a6a] font-heading">Completed</h2>
                  <Link to="/xevents" className="text-xs text-[#2d5a3d] hover:underline flex items-center gap-1">
                    View all stories <ArrowRight size={12} />
                  </Link>
                </div>
                <div className="relative border-l-2 border-[#c4a97d]/30 ml-3 space-y-0">
                  {completedEvents.map((event) => (
                    <div key={event.id} className="group relative pl-8 pb-6 cursor-pointer" onClick={() => setSelectedEvent(event)}>
                      <div className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-[#c4a97d] bg-[#c4a97d]/30" />
                      <div className="flex items-center gap-4 rounded-xl p-3 opacity-60 transition-all hover:opacity-100 hover:bg-[#ebe4d2]/40 active:bg-[#ebe4d2]/60">
                        <span className="font-mono text-xs text-[#8a7a6a] min-w-[90px] hidden md:block">{event.date}</span>
                        <div className="flex-1">
                          <h3 className="text-base font-medium text-[#3a5a4a]">{event.title}</h3>
                          <p className="text-xs text-[#8a7a6a] mt-0.5 flex items-center gap-2">
                            <span className="flex items-center gap-1"><Clock size={10} /> {event.time}</span>
                            <span className="flex items-center gap-1"><MapPin size={10} /> {event.location}</span>
                          </p>
                          <span className="md:hidden font-mono text-[10px] text-[#8a7a6a]">{event.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Calendar sidebar */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <MiniCalendar events={allEvents} onEventClick={setSelectedEvent} />
            </div>
          </div>
        </div>

        {/* Event Categories */}
        <div className="mt-8 mx-auto max-w-6xl">
          <h2 className="mb-8 text-center font-heading text-3xl font-bold text-[#1a3a2a] md:text-4xl">
            Explore by Category
          </h2>
          {eventTypes.map((type) => {
            const typeEvents = allEvents.filter((e) => e.eventType === type.key);
            if (typeEvents.length === 0) return null;
            return (
              <div key={type.key} className="mb-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-[#2d5a3d] font-heading">{type.label}</h3>
                  <span className="text-xs text-[#8a7a6a]">{typeEvents.length} events</span>
                </div>
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                  {typeEvents.map((event) => (
                    <div
                      key={event.id}
                      onClick={() => setSelectedEvent(event)}
                      className="group flex-shrink-0 w-[260px] md:w-[300px] cursor-pointer overflow-hidden rounded-2xl border border-[#c4a97d]/30 bg-[#ebe4d2]/60 transition-all hover:border-[#2d5a3d]/30 hover:shadow-lg hover:-translate-y-1 active:scale-[0.98]"
                    >
                      <div className="relative h-40 overflow-hidden">
                        <img src={event.coverImage} alt={event.title} className="h-full w-full object-cover transition-transform group-hover:scale-110" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#ebe4d2] to-transparent" />
                        <span className="absolute top-3 left-3 rounded-full border border-[#2d5a3d]/30 bg-[#f3ecdc]/80 px-3 py-1 text-[10px] font-bold uppercase text-[#2d5a3d] backdrop-blur-sm">
                          {type.label}
                        </span>
                      </div>
                      <div className="p-4">
                        <h4 className="text-sm font-bold text-[#1a3a2a]">{event.title}</h4>
                        <p className="mt-1 text-xs text-[#5a7d6a] flex items-center gap-1">
                          <Calendar size={12} /> {event.date}
                        </p>
                        {event.registerUrl && (
                          <a href={event.registerUrl} onClick={(e) => e.stopPropagation()} className="mt-3 inline-block">
                            <button className="rounded-full bg-[#1a3a2a] text-[#f3ecdc] text-[11px] py-1.5 px-3 font-semibold hover:bg-[#2d5a3d] transition-colors">Register ↗</button>
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
      </div>

      {/* Event Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#1a3a2a]/80 backdrop-blur-md p-4" onClick={() => setSelectedEvent(null)}>
          <div
            className="w-full max-w-lg overflow-hidden rounded-2xl border border-[#c4a97d]/30 bg-[#f3ecdc] shadow-2xl animate-[scaleIn_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56">
              <img src={selectedEvent.coverImage} alt={selectedEvent.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#f3ecdc] via-[#f3ecdc]/50 to-transparent" />
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#f3ecdc]/70 text-[#1a3a2a] backdrop-blur-sm transition-colors hover:bg-[#c4a97d]"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-[#2d5a3d] font-heading">{selectedEvent.title}</h2>
              <div className="mt-3 flex gap-4 text-sm text-[#1a3a2a]">
                <span className="flex items-center gap-1"><Calendar size={14} /> {selectedEvent.date}</span>
                <span className="flex items-center gap-1"><Clock size={14} /> {selectedEvent.time}</span>
              </div>
              <p className="mt-1 text-sm text-[#5a7d6a] flex items-center gap-1"><MapPin size={14} /> {selectedEvent.location}</p>
              <p className="mt-4 text-sm leading-relaxed text-[#3a5a4a]">{selectedEvent.description}</p>
              {selectedEvent.registerUrl && (
                <a href={selectedEvent.registerUrl} target="_blank" rel="noopener noreferrer" className="mt-6 block">
                  <button className="rounded-full bg-[#1a3a2a] text-[#f3ecdc] w-full py-3 font-semibold hover:bg-[#2d5a3d] transition-colors">Register Now</button>
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
