import { Mail, MapPin, Phone, Instagram, Linkedin, Github, Twitter, Send } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend
    alert("Message sent! (Demo - connect to your backend)");
  };

  return (
    <div className="relative min-h-screen bg-background pb-mobile-nav pt-20 md:pt-24 px-4 md:px-8 lg:px-16">
      <div className="absolute inset-0 bg-dot-pattern opacity-15 pointer-events-none" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[3px] text-primary font-heading">Get in Touch</span>
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-6xl">Contact Us</h1>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Have questions, ideas, or want to collaborate? We'd love to hear from you.
          </p>
        </div>

        <div className="mx-auto max-w-5xl grid gap-8 md:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-4 font-heading text-lg font-bold text-foreground">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="text-primary mt-0.5" size={18} />
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <a href="mailto:picsel@kdkce.edu" className="text-sm text-muted-foreground hover:text-primary">picsel@kdkce.edu</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="text-primary mt-0.5" size={18} />
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone</p>
                    <a href="tel:+919876543210" className="text-sm text-muted-foreground hover:text-primary">+91 98765 43210</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-primary mt-0.5" size={18} />
                  <div>
                    <p className="text-sm font-medium text-foreground">Address</p>
                    <p className="text-sm text-muted-foreground">
                      K.D.K. College of Engineering,<br />
                      Nagpur, Maharashtra, India - 440009
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-4 font-heading text-lg font-bold text-foreground">Follow Us</h3>
              <div className="flex gap-3">
                {[
                  { name: "Instagram", icon: Instagram, url: "#" },
                  { name: "LinkedIn", icon: Linkedin, url: "#" },
                  { name: "GitHub", icon: Github, url: "#" },
                  { name: "Twitter", icon: Twitter, url: "#" },
                ].map((s) => (
                  <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary hover:shadow-glow"
                    aria-label={s.name}
                  >
                    <s.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="mb-4 font-heading text-lg font-bold text-foreground">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="What's this about?"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="Your message..."
                  required
                />
              </div>
              <button type="submit" className="hidden md:flex valorant-btn-cyan items-center gap-2 w-full justify-center">
                <Send size={16} /> Send Message
              </button>
              <button type="submit" className="btn-mobile-primary md:hidden w-full flex items-center gap-2 justify-center">
                <Send size={16} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
