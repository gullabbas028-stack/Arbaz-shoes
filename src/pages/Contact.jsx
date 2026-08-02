import { useState } from "react";
import { siteInfo } from "../data/products";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gmail-based contact: opens a pre-filled email to the store's support inbox.
    const subject = encodeURIComponent(`New message from ${form.name || "website visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${siteInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="font-display text-4xl mb-2">Get In Touch</h1>
      <p className="text-charcoal/60 mb-12">
        Questions about sizing, an order, or a return? We usually reply within a few hours.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs uppercase tracking-widest text-olive mb-2">Name</label>
            <input
              required
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-stitch bg-white px-4 py-3 focus:outline-none focus:border-gold"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-olive mb-2">Email</label>
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-stitch bg-white px-4 py-3 focus:outline-none focus:border-gold"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-olive mb-2">Message</label>
            <textarea
              required
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full border border-stitch bg-white px-4 py-3 focus:outline-none focus:border-gold"
            />
          </div>
          <button className="bg-charcoal text-cream px-8 py-4 uppercase text-sm tracking-widest hover:bg-leatherDark transition-colors">
            Send Message
          </button>
          {sent && (
            <p className="text-sm text-olive">
              Your email client should have opened with this message — send it and we'll reply soon.
            </p>
          )}
        </form>

        <div className="space-y-8">
          <div>
            <h3 className="uppercase text-xs tracking-widest text-olive mb-2">Helpline</h3>
            <p className="text-charcoal/80">{siteInfo.phone}</p>
          </div>
          <div>
            <h3 className="uppercase text-xs tracking-widest text-olive mb-2">Email</h3>
            <p className="text-charcoal/80">{siteInfo.email}</p>
          </div>
          <div>
            <h3 className="uppercase text-xs tracking-widest text-olive mb-2">Store Address</h3>
            <p className="text-charcoal/80">{siteInfo.address}</p>
          </div>
          <div>
            <h3 className="uppercase text-xs tracking-widest text-olive mb-2">Business Hours</h3>
            <p className="text-charcoal/80">Monday – Saturday, 10:00 AM – 8:00 PM</p>
          </div>
          <a
            href={`https://wa.me/${siteInfo.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-olive text-cream px-6 py-3 uppercase text-sm tracking-widest hover:opacity-90 transition-opacity"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
