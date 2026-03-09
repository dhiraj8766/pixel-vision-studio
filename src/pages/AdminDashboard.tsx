import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CalendarDays, Users, GraduationCap, LogOut, Plus, Trash2, Edit2, X, Trophy, ClipboardList, Download, Search } from "lucide-react";
import { API } from "@/config/api";

type Tab = "events" | "team" | "faculty" | "registrations";

interface Event {
  id?: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  eventType: string;
  registerUrl: string;
  coverImage: string;
  gallery?: string[];
}

interface TeamMember {
  id?: number;
  name: string;
  role: string;
  description: string;
  mobile: string;
  email: string;
  tokenNo: number;
  imageUrl: string;
  socials: { linkedin: string; instagram: string; twitter: string };
}

interface Faculty {
  id?: number;
  name: string;
  role: string;
  mobile: string;
  email: string;
  imageUrl: string;
  message: string;
}

interface Registration {
  id?: number;
  name: string;
  email: string;
  phone: string;
  college: string;
  department: string;
  year: string;
  eventId: number;
  eventTitle: string;
  registeredAt?: string;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>("events");
  const [events, setEvents] = useState<Event[]>([]);
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [faculty, setFaculty] = useState<Faculty[]>([]);
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState<any>(null);
  const [regFilterEvent, setRegFilterEvent] = useState<string>("all");
  const [regSearch, setRegSearch] = useState("");

  // Auth check
  useEffect(() => {
    if (sessionStorage.getItem("admin_auth") !== "true") {
      navigate("/admin");
    }
  }, [navigate]);

  // Fetch data
  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    setLoading(true);
    try {
      let url = "";
      if (activeTab === "events") url = API.EVENTS;
      else if (activeTab === "team") url = API.TEAM;
      else if (activeTab === "faculty") url = API.FACULTY;
      else if (activeTab === "registrations") url = API.REGISTRATIONS;
      
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        if (activeTab === "events") setEvents(data);
        else if (activeTab === "team") setTeam(data);
        else if (activeTab === "faculty") setFaculty(data);
        else if (activeTab === "registrations") setRegistrations(data);
      }
    } catch (err) {
      console.error("Failed to fetch:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure?")) return;
    const url = activeTab === "events" ? API.EVENTS : activeTab === "team" ? API.TEAM : API.FACULTY;
    try {
      await fetch(`${url}/${id}`, { method: "DELETE" });
      fetchData();
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin_auth");
    navigate("/admin");
  };

  const tabs = [
    { key: "events" as Tab, label: "Events", icon: CalendarDays, count: events.length },
    { key: "team" as Tab, label: "Team", icon: Users, count: team.length },
    { key: "faculty" as Tab, label: "Faculty", icon: GraduationCap, count: faculty.length },
    { key: "registrations" as Tab, label: "Registrations", icon: ClipboardList, count: registrations.length },
  ];

  // Filtered registrations
  const uniqueEventTitles = [...new Set(registrations.map(r => r.eventTitle))];
  const filteredRegistrations = registrations.filter(r => {
    const matchesEvent = regFilterEvent === "all" || r.eventTitle === regFilterEvent;
    const matchesSearch = regSearch === "" || 
      r.name.toLowerCase().includes(regSearch.toLowerCase()) ||
      r.email.toLowerCase().includes(regSearch.toLowerCase()) ||
      r.college.toLowerCase().includes(regSearch.toLowerCase());
    return matchesEvent && matchesSearch;
  });

  const downloadCSV = () => {
    const headers = ["Name", "Email", "Phone", "College", "Department", "Year", "Event"];
    const rows = filteredRegistrations.map(r => [r.name, r.email, r.phone, r.college, r.department, r.year, r.eventTitle]);
    const csv = [headers, ...rows].map(row => row.map(cell => `"${cell}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `registrations${regFilterEvent !== "all" ? `-${regFilterEvent}` : ""}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-background pt-4 px-4 md:px-8 pb-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pt-4">
          <div>
            <h1 className="font-heading text-2xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-sm text-muted-foreground">Manage PICSEL Club content</p>
          </div>
          <button onClick={handleLogout} className="flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm text-muted-foreground hover:text-accent-red hover:border-accent-red transition-colors">
            <LogOut size={16} /> Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => { setActiveTab(tab.key); setShowForm(false); setEditItem(null); }}
              className={`flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === tab.key ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
              <span className="rounded-full bg-background/20 px-2 py-0.5 text-xs">{tab.count}</span>
            </button>
          ))}
        </div>

        {/* Registrations Tab Content */}
        {activeTab === "registrations" ? (
          <div>
            {/* Filters */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
                <select
                  value={regFilterEvent}
                  onChange={(e) => setRegFilterEvent(e.target.value)}
                  className="rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
                >
                  <option value="all">All Events</option>
                  {uniqueEventTitles.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
                <div className="relative w-full sm:w-64">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    className="w-full rounded-xl border border-border bg-card pl-9 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                    placeholder="Search by name, email, college..."
                    value={regSearch}
                    onChange={(e) => setRegSearch(e.target.value)}
                  />
                </div>
              </div>
              <button
                onClick={downloadCSV}
                disabled={filteredRegistrations.length === 0}
                className="flex items-center gap-2 rounded-xl bg-accent-green/15 border border-accent-green/30 px-4 py-2.5 text-sm font-bold text-accent-green transition-all hover:bg-accent-green/25 disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap"
              >
                <Download size={14} /> Download CSV ({filteredRegistrations.length})
              </button>
            </div>

            {/* Registrations table */}
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              {loading ? (
                <div className="p-8 text-center text-muted-foreground">Loading...</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted/30">
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">#</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Name</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Phone</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">College</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Dept / Year</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Event</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredRegistrations.map((reg, i) => (
                        <tr key={reg.id || i} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                          <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{i + 1}</td>
                          <td className="px-4 py-3 font-medium text-foreground">{reg.name}</td>
                          <td className="px-4 py-3 text-muted-foreground">{reg.email}</td>
                          <td className="px-4 py-3 text-muted-foreground">{reg.phone}</td>
                          <td className="px-4 py-3 text-muted-foreground max-w-[150px] truncate">{reg.college}</td>
                          <td className="px-4 py-3 text-muted-foreground text-xs">{reg.department}<br/><span className="text-[10px] text-primary">{reg.year}</span></td>
                          <td className="px-4 py-3">
                            <span className="rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">{reg.eventTitle}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {filteredRegistrations.length === 0 && !loading && (
                    <div className="p-8 text-center text-muted-foreground">
                      {registrations.length === 0
                        ? <>No registrations yet. Make sure your backend is running at <code className="text-primary">{API.BASE}</code></>
                        : "No registrations match your filter."}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ) : (
        <>
        {/* Action bar */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground font-heading">
            {activeTab === "events" ? "All Events" : activeTab === "team" ? "Team Members" : "Faculty Members"}
          </h2>
          <button
            onClick={() => { setShowForm(true); setEditItem(null); }}
            className="flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-all hover:shadow-glow"
          >
            <Plus size={16} /> Add New
          </button>
        </div>

        {/* Data table */}
        <div className="rounded-2xl border border-border bg-card overflow-hidden">
          {loading ? (
            <div className="p-8 text-center text-muted-foreground">Loading...</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">ID</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Name/Title</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {activeTab === "events" ? "Date" : "Role"}
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {activeTab === "events" ? "Type" : "Email"}
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {activeTab === "events" && events.map((item) => (
                    <tr key={item.id} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                      <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{item.id}</td>
                      <td className="px-4 py-3 font-medium text-foreground">{item.title}</td>
                      <td className="px-4 py-3 text-muted-foreground">{item.date}</td>
                      <td className="px-4 py-3">
                        <span className="rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">{item.eventType}</span>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button onClick={() => { setEditItem(item); setShowForm(true); }} className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"><Edit2 size={14} /></button>
                          <button onClick={() => item.id && handleDelete(item.id)} className="p-1.5 rounded-lg text-muted-foreground hover:text-accent-red hover:bg-accent-red/10 transition-colors"><Trash2 size={14} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {activeTab === "team" && team.map((item) => (
                    <tr key={item.id} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                      <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{item.id}</td>
                      <td className="px-4 py-3 font-medium text-foreground">{item.name}</td>
                      <td className="px-4 py-3 text-muted-foreground">{item.role}</td>
                      <td className="px-4 py-3 text-muted-foreground">{item.email}</td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button onClick={() => { setEditItem(item); setShowForm(true); }} className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"><Edit2 size={14} /></button>
                          <button onClick={() => item.id && handleDelete(item.id)} className="p-1.5 rounded-lg text-muted-foreground hover:text-accent-red hover:bg-accent-red/10 transition-colors"><Trash2 size={14} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {activeTab === "faculty" && faculty.map((item) => (
                    <tr key={item.id} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                      <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{item.id}</td>
                      <td className="px-4 py-3 font-medium text-foreground">{item.name}</td>
                      <td className="px-4 py-3 text-muted-foreground">{item.role}</td>
                      <td className="px-4 py-3 text-muted-foreground">{item.email}</td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button onClick={() => { setEditItem(item); setShowForm(true); }} className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"><Edit2 size={14} /></button>
                          <button onClick={() => item.id && handleDelete(item.id)} className="p-1.5 rounded-lg text-muted-foreground hover:text-accent-red hover:bg-accent-red/10 transition-colors"><Trash2 size={14} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {((activeTab === "events" && events.length === 0) || 
                (activeTab === "team" && team.length === 0) || 
                (activeTab === "faculty" && faculty.length === 0)) && !loading && (
                <div className="p-8 text-center text-muted-foreground">
                  No data found. Make sure your Spring Boot backend is running at <code className="text-primary">{API.BASE}</code>
                </div>
              )}
            </div>
          )}
        </div>
        </>
        )}

        {/* Add/Edit Form Modal */}
        {showForm && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/90 backdrop-blur-md p-4" onClick={() => setShowForm(false)}>
            <div className="w-full max-w-lg rounded-2xl border border-border bg-card p-6 shadow-card animate-[scaleIn_0.3s_ease-out] max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading text-lg font-bold text-foreground">{editItem ? "Edit" : "Add"} {activeTab.slice(0, -1)}</h3>
                <button onClick={() => setShowForm(false)} className="p-1 text-muted-foreground hover:text-foreground"><X size={20} /></button>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                This form submits to your Spring Boot API at <code className="text-primary text-xs">{API.BASE}</code>. 
                Make sure your backend is running.
              </p>
              
              {activeTab === "events" && <EventForm item={editItem} onSuccess={() => { setShowForm(false); fetchData(); }} />}
              {activeTab === "team" && <TeamForm item={editItem} onSuccess={() => { setShowForm(false); fetchData(); }} />}
              {activeTab === "faculty" && <FacultyForm item={editItem} onSuccess={() => { setShowForm(false); fetchData(); }} />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Event form
const EventForm = ({ item, onSuccess }: { item: any; onSuccess: () => void }) => {
  const [form, setForm] = useState<any>(item || { title: "", date: "", time: "", location: "", description: "", eventType: "Technical", registerUrl: "" });
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (item?.id) {
        await fetch(`${API.EVENTS}/${item.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      } else {
        const fd = new FormData();
        fd.append("data", new Blob([JSON.stringify(form)], { type: "application/json" }));
        if (coverImage) fd.append("coverImage", coverImage);
        await fetch(API.EVENTS, { method: "POST", body: fd });
      }
      onSuccess();
    } catch (err) { console.error(err); }
    finally { setSubmitting(false); }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
      <div className="grid grid-cols-2 gap-3">
        <input type="date" className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} required />
        <input type="time" className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} required />
      </div>
      <input className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none" placeholder="Location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} required />
      <select className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none" value={form.eventType} onChange={(e) => setForm({ ...form, eventType: e.target.value })}>
        <option value="Technical">Technical</option>
        <option value="Esports">Esports</option>
        <option value="Sports">Sports</option>
        <option value="Fun">Fun</option>
      </select>
      <textarea className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none resize-none" rows={3} placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required />
      <input className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none" placeholder="Register URL" value={form.registerUrl} onChange={(e) => setForm({ ...form, registerUrl: e.target.value })} />
      {!item?.id && (
        <div>
          <label className="block text-xs font-semibold text-muted-foreground mb-1">Cover Image</label>
          <input type="file" accept="image/*" onChange={(e) => setCoverImage(e.target.files?.[0] || null)} className="text-sm text-muted-foreground" />
        </div>
      )}
      <button type="submit" disabled={submitting} className="valorant-btn-cyan w-full text-center disabled:opacity-50">
        {submitting ? "Saving..." : item?.id ? "Update Event" : "Create Event"}
      </button>
    </form>
  );
};

// Team form
const TeamForm = ({ item, onSuccess }: { item: any; onSuccess: () => void }) => {
  const [form, setForm] = useState<any>(item || { name: "", role: "", description: "", mobile: "", email: "", tokenNo: 0, socials: { linkedin: "", instagram: "", twitter: "" } });
  const [image, setImage] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (item?.id) {
        const { imageUrl, id, ...body } = form;
        await fetch(`${API.TEAM}/${item.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      } else {
        const fd = new FormData();
        const { imageUrl, id, ...body } = form;
        fd.append("data", new Blob([JSON.stringify(body)], { type: "application/json" }));
        if (image) fd.append("image", image);
        await fetch(API.TEAM, { method: "POST", body: fd });
      }
      onSuccess();
    } catch (err) { console.error(err); }
    finally { setSubmitting(false); }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none" placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
      <input className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none" placeholder="Role (e.g., President)" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} required />
      <textarea className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none resize-none" rows={2} placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
      <div className="grid grid-cols-2 gap-3">
        <input className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none" placeholder="Mobile" value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })} />
        <input className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      </div>
      <input type="number" className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none" placeholder="Token No" value={form.tokenNo} onChange={(e) => setForm({ ...form, tokenNo: parseInt(e.target.value) || 0 })} />
      <div className="space-y-2">
        <p className="text-xs font-semibold text-muted-foreground">Social Links</p>
        <input className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none" placeholder="LinkedIn URL" value={form.socials?.linkedin || ""} onChange={(e) => setForm({ ...form, socials: { ...form.socials, linkedin: e.target.value } })} />
        <input className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none" placeholder="Instagram URL" value={form.socials?.instagram || ""} onChange={(e) => setForm({ ...form, socials: { ...form.socials, instagram: e.target.value } })} />
        <input className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none" placeholder="Twitter URL" value={form.socials?.twitter || ""} onChange={(e) => setForm({ ...form, socials: { ...form.socials, twitter: e.target.value } })} />
      </div>
      {!item?.id && (
        <div>
          <label className="block text-xs font-semibold text-muted-foreground mb-1">Profile Image</label>
          <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files?.[0] || null)} className="text-sm text-muted-foreground" />
        </div>
      )}
      <button type="submit" disabled={submitting} className="valorant-btn-cyan w-full text-center disabled:opacity-50">
        {submitting ? "Saving..." : item?.id ? "Update Member" : "Add Member"}
      </button>
    </form>
  );
};

// Faculty form
const FacultyForm = ({ item, onSuccess }: { item: any; onSuccess: () => void }) => {
  const [form, setForm] = useState<any>(item || { name: "", role: "", mobile: "", email: "", message: "" });
  const [image, setImage] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (item?.id) {
        const { imageUrl, id, ...body } = form;
        await fetch(`${API.FACULTY}/${item.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      } else {
        const fd = new FormData();
        const { imageUrl, id, ...body } = form;
        fd.append("data", new Blob([JSON.stringify(body)], { type: "application/json" }));
        if (image) fd.append("image", image);
        await fetch(API.FACULTY, { method: "POST", body: fd });
      }
      onSuccess();
    } catch (err) { console.error(err); }
    finally { setSubmitting(false); }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none" placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
      <input className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none" placeholder="Role (e.g., Faculty Advisor)" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} required />
      <div className="grid grid-cols-2 gap-3">
        <input className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none" placeholder="Mobile" value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })} />
        <input className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      </div>
      <textarea className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none resize-none" rows={3} placeholder="Message / Description" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
      {!item?.id && (
        <div>
          <label className="block text-xs font-semibold text-muted-foreground mb-1">Profile Image</label>
          <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files?.[0] || null)} className="text-sm text-muted-foreground" />
        </div>
      )}
      <button type="submit" disabled={submitting} className="valorant-btn-cyan w-full text-center disabled:opacity-50">
        {submitting ? "Saving..." : item?.id ? "Update Faculty" : "Add Faculty"}
      </button>
    </form>
  );
};

export default AdminDashboard;
